import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid'
import UsuarioAdminService from '../../../api_interact/Administrador/Usuario/UsuarioAdmin'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';




class EditarUsuario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            nombre: '',
            email: '',
            rol: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    obtenerUsuario(id) {
        UsuarioAdminService.getDetalleUsuario(id)
            .then(res => {
                this.setState({
                    id: res.user.id,
                    nombre: res.user.name,
                    email: res.user.email,
                    rol: res.user.id_role
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
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Editar usuario
                            </Typography>
                            <form>
                                <div >
                                    <TextField onChange={this.handleChange} id="outlined-basic" label="Nombre" required variant="outlined" size="small" name="nombre" value={this.state.nombre} />
                                </div>
                                <br />
                                <div>
                                    <TextField onChange={this.handleChange} id="outlined-basic" label="Email" type="email" required variant="outlined" size="small" name="email" value={this.state.email} />
                                </div>
                                <br />
                                <div>
                                    <TextField onChange={this.handleChange} id="outlined-basic" label="Contraseña" type="password" required variant="outlined" size="small" name="password" />
                                </div>
                                <br />
                                <div>
                                    <InputLabel onChange={this.handleChange} id="select_rol">Rol</InputLabel>
                                    <Select
                                        labelId="Rol"
                                        id="select_rol"
                                    >
                                        <MenuItem value={2}>Manager</MenuItem>
                                        <MenuItem value={3}>Jugador</MenuItem>
                                    </Select>
                                </div>
                            </form>
                        </CardContent>
                        <CardActions>
                            <Button size="small" >Editar</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default EditarUsuario;