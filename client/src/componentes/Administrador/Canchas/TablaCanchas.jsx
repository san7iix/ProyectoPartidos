import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'


function createData(id, nombre, precio,) {
    return { id, nombre, precio};
}

const rows = [
    createData(1, 'Cancha 1', 1 ),
    createData(2, 'Cancha 2', 1 ),
    createData(3, 'Cancha 3', 1 ),
    createData(4, 'Cancha 4', 1 ),
];


class TablaCanchas extends Component {
    render() {
        return (
            <div>
                <h3>Numero de canchas: {rows.length}</h3>
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
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">{row.nombre}</TableCell>
                                    <TableCell align="right">{row.precio}</TableCell>
                                    <TableCell align="right">
                                        <Link to="Usuarios/detalle">Detalles</Link>
                                        <Link to="Usuarios/editar">Editar</Link>
                                        <Link to="">Eliminar</Link>
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