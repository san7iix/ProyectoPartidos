import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class DetalleUsuario extends Component {
    render() {
        return (
            <div>
                <p>Aqui deben mostrarse los detalles del usuario</p>
                <Link to="/Usuarios">Atras</Link>                
            </div>
        );
    }
}

export default DetalleUsuario;