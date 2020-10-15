import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid' 
import CardPartido from './Componentes/CardPartido'
import CardEquipo from './Componentes/CardEquipo'
import CardCrearEquipo from './Componentes/CardCrearEquipo'
import EquipoManager from '../../api_interact/Manager/Equipos/EquipoManager'


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

        })
    }

    componentDidMount(){
        this.getEquipo()
    }

    render() {
        return (
            <Grid container spacing={4}>
                    {
                        this.state.equipo.id_user && <Grid item xs={4}><CardPartido/></Grid>
                    }
                    
                
                    {
                        !this.state.equipo.id_user && <Grid item xs={4}><CardCrearEquipo id_manager={this.state.id_manager}/></Grid>
                    }
                    
                
                <Grid item xs={4}>
                    {
                        this.state.equipo.id_user  ? <CardEquipo name={this.state.equipo.name} manager={this.state.equipo.name_user} /> :  <div>No tienes ningún equipo a cargo.</div>
                    }
                </Grid>
            </Grid>
        );
    }
}

export default InicioUsuario;