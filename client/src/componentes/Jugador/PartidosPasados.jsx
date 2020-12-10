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

class PartidosPasados extends Component {

    constructor(props) {
        super(props)

        this.state = {
            partidos: [
                {
                    id: '1',
                    rival: 'Equipo1',
                    lugar: 'Lugar random1',
                    estado: 'Jugado',
                    fecha: '2020-12-8',
                    hora: '14:00:00'
                },
                {
                    id: '2',
                    rival: 'Equipo3',
                    lugar: 'Lugar random2',
                    estado: 'Jugado',
                    fecha: '2020-01-15',
                    hora: '01:00:00'
                },
                {
                    id: '3',
                    rival: 'Equipo4',
                    lugar: 'Lugar random3',
                    estado: 'Cancelado',
                    fecha: '2020-04-08',
                    hora: '15:00:00'
                },
                {
                    id: '4',
                    rival: 'Equipo2',
                    lugar: 'Lugar random4',
                    estado: 'Jugado',
                    fecha: '2020-12-8',
                    hora: '08:00:00'
                }
            ]
        }
    }

    render() {
        return (
            <Grid container spacing={4}>
                <h3>Partidos anteriores</h3>
                <TableContainer component={Paper}>
                    <Table className="table" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Rival</TableCell>
                                <TableCell align="right">Lugar</TableCell>
                                <TableCell align="right">Estado</TableCell>
                                <TableCell align="right">Fecha</TableCell>
                                <TableCell align="right">Hora</TableCell>
                                <TableCell align="right">Detalles</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.partidos.map(partido => (
                                    <TableRow key={partido.id}>
                                        <TableCell align="right">{partido.rival}</TableCell>
                                        <TableCell align="right"> {partido.lugar} </TableCell>
                                        <TableCell align="right">{partido.estado}</TableCell>
                                        <TableCell align="right">{partido.fecha}</TableCell>
                                        <TableCell align="right">{partido.hora}</TableCell>
                                        <TableCell align="right"><Link to={`/detallesPartido/${partido.id}`} color="primary" variant="condensed">Detalles</Link></TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        );
    }
}

export default PartidosPasados;