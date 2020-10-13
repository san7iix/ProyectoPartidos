import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import CanchasAdmin from '../../../api_interact/Administrador/Canchas/CanchasAdmin';

class CardCrearCancha extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.crearCancha = this.crearCancha.bind(this)
    }


    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })

    }

    crearCancha(){
        const cancha = {
            name: this.state.name,
            price: this.state.price
        }

        CanchasAdmin.Crear(cancha)
        .then(res=>{
            if(res.success===200)alert('Cancha agregada correctamente')
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
                        Agregar sitio
                    </Typography>
                    <form>
                        <div >
                            <TextField id="outlined-basic" label="Nombre" required variant="outlined" size="small" name="name" onChange={this.handleChange}/>
                        </div>
                        <br/>
                        <div>
                            <TextField id="outlined-basic" label="Precio" type="number" required variant="outlined" size="small" name="price" onChange={this.handleChange}/>
                        </div>
                    </form>

                </CardContent>
                <CardActions>
                    <Button onClick={this.crearCancha} size="small">Agregar</Button>
                </CardActions>

            </Card>
        );
    }
}

export default CardCrearCancha;