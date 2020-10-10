import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TablePagination from '@material-ui/core'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'


function createData(id, nombre, email, rol, fcreac, fmodif) {
    return { id, nombre, email, rol, fcreac, fmodif };
}

const rows = [
    createData(1, 'Usuario de prueba', 'demo@user.com', 'Admin', '2354-654321-463', '4894-3543541-1'),
    createData(2, 'Usuario de prueba', 'demo@user.com', 'Manager', '2354-654321-463', '4894-3543541-1'),
    createData(3, 'Usuario de prueba', 'demo@user.com', 'Jugador', '2354-654321-463', '4894-3543541-1'),
    createData(4, 'Usuario de prueba', 'demo@user.com', 'Jugador', '2354-654321-463', '4894-3543541-1'),
    createData(5, 'Usuario de prueba', 'demo@user.com', 'Jugador', '2354-654321-463', '4894-3543541-1')
];


class TablaUsuarios extends Component {
    render() {
        return (
            <div>
                <h3>Usuarios registrados: {rows.length}</h3>
                <TableContainer component={Paper}>
                    <Table className="table" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="right">Nombre</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Rol</TableCell>
                                <TableCell align="right">Fecha de creación</TableCell>
                                <TableCell align="right">Fecha de modificación</TableCell>
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
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.rol}</TableCell>
                                    <TableCell align="right">{row.fcreac}</TableCell>
                                    <TableCell align="right">{row.fmodif}</TableCell>
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

export default TablaUsuarios;