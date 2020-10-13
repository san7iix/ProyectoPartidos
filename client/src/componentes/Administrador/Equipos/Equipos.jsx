import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import TablaEquipos from './TablaEquipos';
import CardCrearEquipo from './CardCrearEquipo';

class Equipos extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={2}>
                        <CardCrearEquipo></CardCrearEquipo>
                    </Grid>
                    <Grid item>
                        <TablaEquipos />

                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Equipos;