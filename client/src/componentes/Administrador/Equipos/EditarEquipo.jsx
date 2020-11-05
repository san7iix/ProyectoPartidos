import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import EquiposAdmin from '../../../api_interact/Administrador/Equipos/EquiposAdmin';


class EditarEquipo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            name: '',
            uniform: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.EditarEquipo = this.EditarEquipo.bind(this)
        this.ObtenerEquipo = this.ObtenerEquipo.bind(this)
    }

    EditarEquipo(){
        let Equipo = {
            id: this.state.id,
            name: this.state.name,
            uniform: this.state.uniform,
        }
        EquiposAdmin.Editar(Equipo)
            .then(res => {
                if(res.success===200){
                    alert('Editado correctamente')
                    this.props.history.push('/equipos')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    ObtenerEquipo(){        
        EquiposAdmin.Detalles(this.state.id)
        .then(res => {
            this.setState({
                id: res.team.id,
                name: res.team.name,
                uniform: res.team.uniform,
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
        this.ObtenerEquipo()
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
                                <TextField onChange={this.handleChange} id="outlined-basic" label="Uniforme" type="text" required variant="outlined" size="small" name="uniform" value={this.state.uniform} />
                            </div>
                            <br />
                        </form>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={this.EditarEquipo}>Editar</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
        );
    }
}

export default EditarEquipo;