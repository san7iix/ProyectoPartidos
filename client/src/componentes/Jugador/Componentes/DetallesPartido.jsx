import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'

class DetallesPartido extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id_partido: this.props.match.params.id,
            datos: [
                {
                    goles: [{
                        jugador: 'Jugador 1',
                        minuto: '20',
                        equipo: 'Equipo random 1'
                    },
                    {
                        jugador: 'Jugador 1',
                        minuto: '30',
                        equipo: 'Equipo random 1'
                    }],
                    faltas: [{
                        jugador: 'Jugador 12',
                        tarjeta: 'Amarilla',
                        equipo: 'Equipo random 2'
                    },
                    {
                        jugador: 'Jugador 13',
                        tarjeta: '',
                        equipo: 'Equipo random 1'
                    }]
                }
            ]
        }

    }


    render() {
        return (
            <Grid container >
                <Grid container container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={4}>
                    <Grid item xs={6}>
                        <h3>Goles</h3>
                        <TableContainer component={Paper}>
                            <Table className="table" aria-label="simple table">
                                <TableHead>
                                    <TableCell>Jugador</TableCell>
                                    <TableCell>Minuto</TableCell>
                                    <TableCell>Equipo</TableCell>
                                </TableHead>
                                <TableBody>
                                    {
                                        this.state.datos[0].goles.map(gol => (
                                            <TableRow>
                                                <TableCell>{gol.jugador}</TableCell>
                                                <TableCell>{gol.minuto}</TableCell>
                                                <TableCell>{gol.equipo}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={4}>
                        <h3>Faltas</h3>
                        <TableContainer component={Paper}>
                            <Table className="table" aria-label="simple table">
                                <TableHead>
                                    <TableCell>Jugador</TableCell>
                                    <TableCell>Tarjeta</TableCell>
                                    <TableCell>Equipo</TableCell>
                                </TableHead>
                                <TableBody>
                                    {
                                        this.state.datos[0].faltas.map(falta => (
                                            <TableRow>
                                                <TableCell>{falta.jugador}</TableCell>
                                                <TableCell>{falta.tarjeta}</TableCell>
                                                <TableCell>{falta.equipo}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default DetallesPartido;