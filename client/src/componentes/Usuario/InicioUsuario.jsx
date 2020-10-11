import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid' 
import CardPartido from './Componentes/CardPartido'
import CardEquipo from './Componentes/CardEquipo';

class InicioUsuario extends Component {

    constructor(props){
        super(props)

        this.state = {
            partido : {
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
                <Grid item xs={4}>
                    <CardPartido/>
                </Grid>
                <Grid item xs={4}>
                    <CardEquipo/>
                </Grid>
            </Grid>
        );
    }
}

export default InicioUsuario;