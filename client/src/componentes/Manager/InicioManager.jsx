import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid' 
import CardPartido from './Componentes/CardPartido'
import CardEquipo from './Componentes/CardEquipo'
import CardCrearEquipo from './Componentes/CardCrearEquipo'
import EquipoManager from '../../api_interact/Manager/Equipos/EquipoManager'
import CardJugadoresDisponibles from './Componentes/CardJugadoresDisponibles';
import AgendarPartido from './Componentes/AgendarPartido';


class InicioUsuario extends Component {

    constructor(props){
        super(props)

        this.state = {
            id_manager: this.props.match.params.id,
            equipo : []
        }

        this.getEquipo = this.getEquipo.bind(this)
    }

    getEquipo(){
        EquipoManager.GetEquipo(this.state.id_manager).
        then(res=>{
            this.setState({
                equipo: res
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    componentDidMount(){
        this.getEquipo()
    }

    render() {
        return (
            <Grid container spacing={4}>
                    {
                        this.state.equipo.id_user && <Grid item xs={4}><CardPartido id_team={this.state.equipo.id}/></Grid> 
                    }
                    
                
                    {
                        !this.state.equipo.id_user && <Grid item xs={4}><CardCrearEquipo id_manager={this.state.id_manager}/></Grid>
                    }
                    
                
                
                    {
                        this.state.equipo.id_user  ? <Grid item xs={4}><CardEquipo name={this.state.equipo.name} manager={this.state.equipo.name_user} id_team={this.state.equipo.id} /></Grid> :  <div>No tienes ningún equipo a cargo.</div>
                    }

                    {
                        this.state.equipo.id_user  && <Grid item xs={4}><CardJugadoresDisponibles id_team={this.state.equipo.id} /></Grid>
                    }
                
                    {
                        this.state.equipo.id_user && <Grid item><AgendarPartido id_team={this.state.equipo.id}/></Grid>
                    }
            </Grid>
        );
    }
}

export default InicioUsuario;