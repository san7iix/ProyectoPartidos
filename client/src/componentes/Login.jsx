import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <Container fluid >
                <Grid container spacing={2} id="loginForm" >
                    <Grid item xs >
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Login
                    </Typography>
                                <form>
                                    <div >
                                        <TextField id="outlined-basic" type="email" label="Email" required variant="outlined" size="medium" onChange={this.handleChange} name="email" />
                                    </div>
                                    <br />
                                    <div>
                                        <TextField type="password" id="outlined-basic" label="Contraseña" required variant="outlined" size="medium" onChange={this.handleChange} name="password" />
                                    </div>
                                </form>
                                <br />
                                <Button variant="contained" color="primary" size="medium" onClick={this.editarUsuario}>Entrar</Button>
                                <br />
                                <Link to="/recuperarCuenta">Recuperar contraseña</Link>
                            </CardContent>
                            <CardActions>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default Login;