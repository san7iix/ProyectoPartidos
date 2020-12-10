import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';

class CardEquipo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre_equipo: 'Equipo 1',
            manager: 'Manager 1',
            compan: [{
                nombre: 'Jugador 1',
                numero: '12'
            }, {
                nombre: 'Jugador 2',
                numero: '20'
            }]
        }
    }
    render() {
        return (
            <Card>
                <CardContent>
                    <Typography><h2>{this.state.nombre_equipo}</h2></Typography>
                    <Typography><h4>{this.state.manager}</h4></Typography>
                    <Typography><h6>Compañeros</h6></Typography>
                    {this.state.compan.map(compa => (

                        <Typography>{`${compa.nombre}, numero: ${compa.numero}`}</Typography>
                    ))}
                </CardContent>
            </Card>
        );
    }
}

export default CardEquipo;