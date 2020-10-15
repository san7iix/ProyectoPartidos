import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid' 
import CardPartido from './Componentes/CardPartido'
import CardEquipo from './Componentes/CardEquipo'


class InicioUsuario extends Component {

    constructor(props){
        super(props)

        this.state = {
            partido : {
                name: 'Equipo1',
                equipo2: 'Equipo2',
                hora: '00:15',
                lugar: 'Plaza 1'
            },
            equipo : {
                id : '',
                name: 'Deportivo tapita'
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
                    {
                        this.state.equipo.id !== ''  ? <CardEquipo/> :  <div>No tienes ningún equipo a cargo.</div>
                    }
                </Grid>
            </Grid>
        );
    }
}

export default InicioUsuario;