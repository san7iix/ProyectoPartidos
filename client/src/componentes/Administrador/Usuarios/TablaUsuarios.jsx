import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import UsuarioAdminService from '../../../api_interact/Administrador/Usuario/UsuarioAdmin'



class TablaUsuarios extends Component {

    constructor(props) {
        super(props)
        this.state = {
            usuarios: []
        }
        this.obtenerUsuarios = this.obtenerUsuarios.bind(this)
        this.eliminarUsuario = this.eliminarUsuario.bind(this)
    }

    obtenerUsuarios() {
        UsuarioAdminService.getUsuarios()
            .then(res => {
                res.users.map(usuario => {
                    if (usuario.id_role === 2) usuario.id_role = "Manager"
                    else if (usuario.id_role === 3) usuario.id_role = "Usuario"
                    return usuario
                })
                this.setState({ usuarios: res.users })
            })
            .catch(err => {
                this.setState({ usuarios: [] })
            })
    }

    eliminarUsuario(usuario) {
        UsuarioAdminService.eliminarUsuario(usuario)
            .then((res) => {
                if (res.success === 200) {
                    alert('ELiminación correcta')
                }
            })
            .catch(err => console.log(err))
        this.obtenerUsuarios()
    }


    componentDidMount() {
        this.obtenerUsuarios()
    }


    render() {
        return (
            <div>
                <h3>Usuarios registrados: {this.state.usuarios.length}</h3>
                <TableContainer component={Paper}>
                    <Table className="table" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="right">Nombre</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Rol</TableCell>
                                <TableCell align="right">Fecha de creación</TableCell>
                                <TableCell align="right">Fecha de modificación</TableCell>
                                <TableCell align="right">Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.usuarios.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.id_role}</TableCell>
                                    <TableCell align="right">{row.created_at}</TableCell>
                                    <TableCell align="right">{row.updated_at}</TableCell>
                                    <TableCell align="right">
                                        <Link to={`usuarios/detalle/${row.id}`}>Detalles</Link>
                                        <Link to={`usuarios/editar/${row.id}`}>Editar</Link>
                                        <Link onClick={() => this.eliminarUsuario(row.id)} >Eliminar</Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default TablaUsuarios;