import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import ReceiptIcon from '@material-ui/icons/Receipt';
import DeleteIcon from '@material-ui/icons/Delete';
import EquiposAdmin from '../../../api_interact/Administrador/Equipos/EquiposAdmin';





class TablaEquipos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            equipos: []
        }
        this.obtenerEquipos = this.obtenerEquipos.bind(this)
    }


    obtenerEquipos(){
        EquiposAdmin.getEquipos()
        .then(res => {
            this.setState({ equipos: res.teams })
        })
        .catch(err => {
            this.setState({ equipos: [] })
        })
    }

    eliminarEquipo(id){
        EquiposAdmin.Eliminar(id)
        .then(res=>{
            if(res.success===200){
                alert("Eliminado correctamente")
                this.obtenerEquipos()
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    componentDidMount(){
        this.obtenerEquipos()
    }

    render() {
        return (
            <div>
                <h3>Numero de canchas: {this.state.equipos.length}</h3>
                <TableContainer component={Paper}>
                    <Table className="table" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="right">Nombre</TableCell>
                                <TableCell align="right">Uniforme</TableCell>
                                <TableCell align="right">Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.equipos.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.uniform}</TableCell>
                                    <TableCell align="right">
                                        <Link to={`/equipos/editar/${row.id}`}><ReceiptIcon/></Link>
                                        <Link onClick={() => this.eliminarEquipo(row.id)}><DeleteIcon/></Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default TablaEquipos;