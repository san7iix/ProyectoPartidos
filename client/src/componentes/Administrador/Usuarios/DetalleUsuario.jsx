import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import UsuarioAdminService from '../../../api_interact/Administrador/Usuario/UsuarioAdmin'
class DetalleUsuario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            nombre: '',
            email: '',
            equipo: '',
            rol: '',
            error: ''
        }
        this.obtenerUsuario = this.obtenerUsuario.bind(this)
    }

    obtenerUsuario(id) {
        UsuarioAdminService.getDetalleUsuario(id)
            .then(res => {
                this.setState({
                    nombre: res.user.name,
                    email: res.user.email,
                    equipo: res.user.name,
                    rol: res.user.id_role,
                    id: res.user.id,
                })
                console.log(res.user)
            })
            .catch(err => {
                this.setState({ error: 'Error' })
            })
    }

    componentDidMount() {
        this.obtenerUsuario(this.state.id)
    }

    render() {
        return (
            <div>
                <p>Id: {this.state.id}</p>
                <p>Nombre: {this.state.nombre}</p>
                <p>Email: {this.state.email}</p>
                <p>Equipo: {this.state.equipo}</p>
                <p>Rol: {this.state.rol}</p>
                <Link to="/Usuarios">Atras</Link>

            </div>
        );
    }
}

export default DetalleUsuario;