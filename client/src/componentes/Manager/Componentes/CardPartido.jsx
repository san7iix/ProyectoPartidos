import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';

class InicioUsuario extends Component {

    constructor(props) {
        super(props)

        this.state = {
            partido: {
                equipo1: 'Equipo 1',
                equipo2: 'Equipo 2',
                fecha: '01-12-2020',
                hora: '10:00',
                lugar: 'Los Almendros'
            }
        }
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