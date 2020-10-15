import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import UsuarioAdminService from '../../../api_interact/Administrador/Usuario/UsuarioAdmin'



class CardCrearUsuario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            role_id: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.crearUsuario = this.crearUsuario.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })

    }

    crearUsuario() {
        const Usuario = {
            name: this.state.name,
            email: this.state.email,
            role_id: this.state.role_id,
            password: this.state.password
        }
        UsuarioAdminService.crearUsuario(Usuario)
            .then(res => {
                if(res.success===200)alert('Usuario agregado correctamente')
                window.location.reload(false);
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Agregar usuario
                    </Typography>
                    <form>
                        <div >
                            <TextField id="outlined-basic" label="Nombre" required variant="outlined" size="small" onChange={this.handleChange} name="name" />
                        </div >
                        <br />
                        <div>
                            <TextField id="outlined-basic" label="Email" type="email" required variant="outlined" size="small" onChange={this.handleChange} name="email" />
                        </div>
                        <br />
                        <div>
                            <TextField id="outlined-basic" label="Contraseña" type="password" required variant="outlined" size="small" onChange={this.handleChange} name="password" />
                        </div>
                        <br />
                        <div>
                            <InputLabel id="select_rol">Rol</InputLabel>
                            <Select
                                name="role_id"
                                labelId="Rol"
                                id="select_rol"
                                onChange={this.handleChange}
                            >
                                <MenuItem value={2}>Jugador</MenuItem>
                                <MenuItem value={3}>Manager</MenuItem>
                            </Select>
                        </div>
                    </form>

                </CardContent>
                <CardActions>
                    <Button size="small" onClick={this.crearUsuario}>Agregar</Button>
                </CardActions>

            </Card>
        );
    }
}

export default CardCrearUsuario;