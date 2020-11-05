import React, { Component } from 'react';
import TablaCanchas from './TablaCanchas'
import Grid from '@material-ui/core/Grid'
import CardCrearCancha from './CardCrearCancha'

class Canchas extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={2}>
                        <CardCrearCancha />
                    </Grid>
                    <Grid item>
                        <TablaCanchas />

                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Canchas;