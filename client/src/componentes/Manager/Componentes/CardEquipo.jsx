import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';

class CardEquipo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre_equipo : 'Equipo 1',
        }
    }
    render() {
        return (
            <Card>
            <CardContent>
                <Typography><h2>{this.state.nombre_equipo}</h2></Typography>
                <Typography><h4>{this.state.manager}</h4></Typography>
                <Typography><h6>Compañeros</h6></Typography>
                
            </CardContent>
        </Card>
        );
    }
}

export default CardEquipo;