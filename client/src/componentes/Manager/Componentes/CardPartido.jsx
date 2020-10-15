import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import EquipoManager from '../../../api_interact/Manager/Equipos/EquipoManager';

class InicioUsuario extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id_team: this.props.id_team,
            partido: {
                equipo1: '',
                equipo2: '',
                fecha: '',
                hora: '',
                lugar: ''
            }
        }

        this.getMatch = this.getMatch.bind(this)
    }

    getMatch(){
        EquipoManager.GetMatchsPending(this.state.id_team)
        .then(res=>{
            let resp=res[0]
            this.setState({
                equipo1: resp.id_team_1,
                equipo2: resp.id_team_1,
                fecha: resp.date,
                hora: resp.hour,
                lugar: resp.id_place
            })
            console.log(this.state)
        })
        .catch(err=>{

        })
    }


    componentDidMount(){
        this.getMatch()
    }

    

    render() {
        return (
            <Card>
                <CardContent>
                    <Typography>{this.state.partido.equipo1 != '' ? 'Partido pendiente' : 'No hay partidos pendientes'}</Typography>
                    {this.state.partido.equipo1 != '' ? <p><b>{`${this.state.partido.equipo1} Vs ${this.state.partido.equipo2}`}</b></p> : ''}
                    {this.state.partido.equipo1 != '' ? <p>Fecha: {this.state.partido.fecha} </p> : ''}
                    {this.state.partido.equipo1 != '' ? <p>Hora: {this.state.partido.hora}</p> : ''}
                    {this.state.partido.equipo1 != '' ? <p>Lugar: {this.state.partido.lugar}</p> : ''}
                </CardContent>
            </Card>
        );
    }
}

export default InicioUsuario;