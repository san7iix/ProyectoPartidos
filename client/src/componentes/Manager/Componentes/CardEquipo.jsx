import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';

class CardEquipo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre_equipo: this.props.name,
            manager: this.props.manager
        }
    }
    render() {
        return (
            <Card>
                <CardContent>
                    <Typography>Equipo</Typography>
                    <Typography><h2>{this.state.nombre_equipo}</h2></Typography>
                    <Typography><b>Manager:</b> {this.state.manager}</Typography>
                    <Typography><h6>Compañeros</h6></Typography>
                </CardContent>
            </Card>
        );
    }
}

export default CardEquipo;