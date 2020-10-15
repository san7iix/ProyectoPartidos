import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EquipoManager from '../../../api_interact/Manager/Equipos/EquipoManager';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'




class CardJugadoresDisponibles extends Component {
    constructor(props) {
        super(props)

        this.state = {
            players: [],
            id_team: this.props.id_team
        }

        this.getFreePlayers = this.getFreePlayers.bind(this)
        this.addFreePlayer = this.addFreePlayer.bind(this)
    }

    addFreePlayer(id_team, id_player){
        EquipoManager.AddPlayer(id_team,id_player)
        .then(res=>{
            if(res.success===200)alert('Jugador agregado a tu equipo')
            window.location.reload(false);
        })
        .catch(err=>{
            console.log(err)
        })
    }

    getFreePlayers() {
        EquipoManager.GetFreePlayers()
            .then(res => {
                this.setState({
                    players: res
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount() {
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
                    </TableHead>
                    <TableBody>
                        {
                            this.state.players.map((player) => (
                                <TableRow key={player.id_user}>
                                    <TableCell align="right">{player.id_user}</TableCell>
                                    <TableCell align="right">{player.name}</TableCell>
                                    <TableCell align="right"><button onClick={()=>this.addFreePlayer(this.state.id_team, player.id_user)} ><AddIcon/></button></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

export default CardJugadoresDisponibles;