import React, { Component } from 'react';
import TablaUsuarios from './TablaUsuarios'
import Grid from '@material-ui/core/Grid'
import CardCrearUsuario from './CardCrearUsuario'

class Usuarios extends Component {
    render() {


        return (
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={2}>
                        <CardCrearUsuario />
                    </Grid>
                    <Grid item>
                        <TablaUsuarios />

                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Usuarios;