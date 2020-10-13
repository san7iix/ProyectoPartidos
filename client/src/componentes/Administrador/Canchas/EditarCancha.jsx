import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CanchasAdmin from '../../../api_interact/Administrador/Canchas/CanchasAdmin';

class EditarCancha extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            name: '',
            price: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.editarCancha = this.editarCancha.bind(this)
        this.obtenerCancha = this.obtenerCancha.bind(this)
    }

    editarCancha(){
        let Cancha = {
            id: this.state.id,
            name: this.state.name,
            price: this.state.price,
        }
        CanchasAdmin.Editar(Cancha)
            .then(res => {
                if(res.success===200){
                    alert('Editado correctamente')
                    this.props.history.push('/canchas')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    obtenerCancha(){        
        CanchasAdmin.Detalles(this.state.id)
        .then(res => {
            this.setState({
                id: res.place.id,
                name: res.place.name,
                price: res.place.price,
            })
        })
        .catch(err => {
            this.setState({ error: 'Error' })
        })
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    componentDidMount(){
        this.obtenerCancha()
    }

    render() {
        return (
            <Grid container spacing={2}>
            <Grid item xs={2}>
                <Card>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Editar cancha
                        </Typography>
                        <form>
                            <br/>
                            <div >
                                <TextField onChange={this.handleChange} id="outlined-basic" label="Nombre" required variant="outlined" size="small" name="name" value={this.state.name} />
                            </div>
                            <br />
                            <div>
                                <TextField onChange={this.handleChange} id="outlined-basic" label="Precio" type="number" required variant="outlined" size="small" name="price" value={this.state.price} />
                            </div>
                            <br />
                        </form>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={this.editarCancha}>Editar</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
        );
    }
}

export default EditarCancha;