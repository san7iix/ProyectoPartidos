import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import CanchasAdmin from '../../../api_interact/Administrador/Canchas/CanchasAdmin';
import EquiposAdmin from '../../../api_interact/Administrador/Equipos/EquiposAdmin';

class CardCrearEquipo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            uniform: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.CrearEquipo = this.CrearEquipo.bind(this)
    }


    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })

    }

    CrearEquipo(){
        const equipo = {
            name: this.state.name,
            uniform: this.state.uniform
        }

        EquiposAdmin.Crear(equipo)
        .then(res=>{
            console.log(res)
            if(res.success===200)alert('Equipo agregado correctamente')
            window.location.reload(false);
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Agregar equipo
                    </Typography>
                    <form>
                        <div >
                            <TextField id="outlined-basic" label="Nombre" required variant="outlined" size="small" name="name" onChange={this.handleChange}/>
                        </div>
                        <br/>
                        <div>
                            <TextField id="outlined-basic" label="Uniforme" type="text" required variant="outlined" size="small" name="uniform" onChange={this.handleChange}/>
                        </div>
                    </form>

                </CardContent>
                <CardActions>
                    <Button onClick={this.CrearEquipo} size="small">Agregar</Button>
                </CardActions>

            </Card>
        );
    }
}

export default CardCrearEquipo;