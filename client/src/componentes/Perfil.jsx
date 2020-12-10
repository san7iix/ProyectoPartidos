import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import UsuarioAdminService from '../api_interact/Administrador/Usuario/UsuarioAdmin'
import { Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';


class Perfil extends Component {

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
                if (res.user.id_role == 1) {
                    res.user.id_role = 'Administrador'
                } else if (res.user.id_role == 2) {
                    res.user.id_role = 'Jugador'
                } else {
                    res.user.id_role = 'Manager'
                }
                this.setState({
                    nombre: res.user.name,
                    email: res.user.email,
                    equipo: res.user.name,
                    rol: res.user.id_role,
                    id: res.user.id,
                })
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
            <Grid container fluid>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>
                                <h3>{this.state.nombre}</h3>
                            </Typography>
                            <Typography color="textPrimary" gutterBottom>
                                {`Email: ${this.state.email}`}
                            </Typography>
                            <Typography color="textPrimary" gutterBottom>
                                {`Equipo: 1`}
                            </Typography>
                            <Typography color="textPrimary" gutterBottom>
                                {this.state.rol}
                            </Typography>
                        </CardContent>

                    </Card>

                </Grid>

            </Grid>
        );
    }
}

export default Perfil;