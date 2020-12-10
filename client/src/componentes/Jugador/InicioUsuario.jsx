import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Row from '@material-ui/core'
import CardPartido from './Componentes/CardPartido'
import CardEquipo from './Componentes/CardEquipo';
import PartidosPasados from './PartidosPasados';

class InicioUsuario extends Component {

    constructor(props) {
        super(props)

        this.state = {
            partido: {
                equipo1: 'Equipo1',
                equipo2: 'Equipo2',
                hora: '00:15',
                lugar: 'Plaza 1'
            }
        }
    }

    render() {
        return (
            <Grid container spacing={4}>
                <Grid direction="row" container spacing={2} justify="center">
                    <Grid item>
                        <CardPartido />
                    </Grid>
                    <Grid item xs={6}>
                        <CardEquipo />
                    </Grid>
                </Grid>

                <Grid item direction="row" container spacing={2} justify="center" alignItems="center">
                    <Grid item xs={5} >
                        <PartidosPasados />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default InicioUsuario;