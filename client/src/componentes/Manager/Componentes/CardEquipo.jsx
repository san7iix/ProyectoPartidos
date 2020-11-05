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
import DeleteIcon from '@material-ui/icons/Delete';
import EquipoManager from '../../../api_interact/Manager/Equipos/EquipoManager'

class CardEquipo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id_equipo: this.props.id_team,
            nombre_equipo: this.props.name,
            manager: this.props.manager,
            jugadores: []
        }

        this.getJugadores = this.getJugadores.bind(this)
    }


    getJugadores() {
        EquipoManager.GetPlayers(this.state.id_equipo)
            .then(res => {
                this.setState({
                    jugadores: res.players
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    deletePlayer(id_team, id_player){
        EquipoManager.DeletePlayer(id_team, id_player)
        .then(res=>{
            console.log(res)
            if(res.success===200){
                alert('Se eliminó el jugador de su equipo')
            }
            window.location.reload(false);
        })
        .catch(err=>{
            console.log(err)
        })
    }


    componentDidMount() {
        this.getJugadores()
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <Typography>Equipo</Typography>
                    <Typography><h2>{this.state.nombre_equipo}</h2></Typography>
                    <Typography><p>Id de equipo: {this.state.id_equipo}</p></Typography>
                    <Typography><b>Manager:</b> {this.state.manager}</Typography>
                    <Typography><h6>Jugadores</h6></Typography>
                    <TableContainer component={Paper}>
                        <Table className="table" aria-label="simple table">

                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell>Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.jugadores.map((jugador) => (
                                        <TableRow key={jugador.player}>
                                            <TableCell>{jugador.name_user}</TableCell>
                                            <TableCell><button onClick={()=>this.deletePlayer(this.state.id_equipo, jugador.player)}><DeleteIcon/></button></TableCell>                                            
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        );
    }
}

export default CardEquipo;