import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';

class InicioUsuario extends Component {

    constructor(props){
        super(props)

        this.state = {
            partido : {
                equipo1: 'Equipo1',
                equipo2: 'Equipo2',
                fecha: '02-02-2020',
                hora: '00:15',
                lugar: 'Plaza 1'
            }
        }
    }

    render() {
        return (            
                    <Card>
                        <CardContent>
                            <Typography>Partido pendiente</Typography>
                            <p><b> {`${this.state.partido.equipo1} Vs ${this.state.partido.equipo2}`} </b></p>
                            <p><b>Fecha:</b>{` ${this.state.partido.fecha}`}</p>
                            <p><b>Hora:</b>{` ${this.state.partido.hora}`}</p>
                            <p><b>Lugar:</b>{` ${this.state.partido.lugar}`}</p>
                        </CardContent>
                    </Card>
        );
    }
}

export default InicioUsuario;