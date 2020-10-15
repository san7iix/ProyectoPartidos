import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { CardHeader } from '@material-ui/core';
import EquipoManager from '../../../api_interact/Manager/Equipos/EquipoManager';



class CardJugadoresDisponibles extends Component {
    constructor(props) {
        super(props)

        this.state = {
            players: []
        }

        this.getFreePlayers = this.getFreePlayers.bind(this)
    }

    getFreePlayers(){
        EquipoManager.GetFreePlayers()
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    componentDidMount(){
        this.getFreePlayers()
    }

    render() {
        return (
            <TableContainer component={Paper}>
                <Table className="table" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Nombre</TableCell>
                            <TableCell align="right">Acciones</TableCell>
                        </TableRow>
                        <TableBody>
                            {
                                this.state.players.map((player) => (
                                    <TableRow key={player.id}>
                                        <TableCell align="right">{player.name}</TableCell>
                                        <TableCell align="right">{player.name}</TableCell>
                                        <TableCell align="right">Agregar al equipo</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </TableHead>
                </Table>
            </TableContainer>
        );
    }
}

export default CardJugadoresDisponibles;