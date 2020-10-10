import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid'

class EditarUsuario extends Component {
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
                                    <TextField id="outlined-basic" label="Nombre" required variant="outlined" size="small" />
                                </div >
                                <div>
                                    <TextField id="outlined-basic" label="Email" type="email" required variant="outlined" size="small" />
                                </div>
                                <div>
                                    <TextField id="outlined-basic" label="Contraseña" type="password" required variant="outlined" size="small" />
                                </div>
                                <div>
                                    <InputLabel id="select_rol">Rol</InputLabel>
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
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default EditarUsuario;