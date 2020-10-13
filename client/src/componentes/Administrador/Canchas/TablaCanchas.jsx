import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import CanchasAdmin from '../../../api_interact/Administrador/Canchas/CanchasAdmin';





class TablaCanchas extends Component {

    constructor(props) {
        super(props)
        this.state = {
            canchas: []
        }
        this.obtenerCanchas = this.obtenerCanchas.bind(this)
    }


    obtenerCanchas(){
        CanchasAdmin.GetCanchas()
        .then(res => {
            this.setState({ canchas: res.places })
        })
        .catch(err => {
            this.setState({ canchas: [] })
        })
    }

    eliminarCancha(id){
        CanchasAdmin.Eliminar(id)
        .then(res=>{
            if(res.success==200){
                alert("Eliminado correctamente")
                this.obtenerCanchas()
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    componentDidMount(){
        this.obtenerCanchas()
    }

    render() {
        return (
            <div>
                <h3>Numero de canchas: {this.state.canchas.length}</h3>
                <TableContainer component={Paper}>
                    <Table className="table" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="right">Nombre</TableCell>
                                <TableCell align="right">Precio</TableCell>
                                <TableCell align="right">Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.canchas.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.price}</TableCell>
                                    <TableCell align="right">
                                        <Link to="canchas/detalle">Detalles</Link>
                                        <Link to="canchas/editar">Editar</Link>
                                        <Link onClick={() => this.eliminarCancha(row.id)}>Eliminar</Link>
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

export default TablaCanchas;