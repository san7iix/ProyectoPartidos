import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import { Grid, InputLabel } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CanchasAdmin from '../../../api_interact/Administrador/Canchas/CanchasAdmin';
import EquipoManager from '../../../api_interact/Manager/Equipos/EquipoManager';

class AgendarPartido extends Component {

    constructor(props){
        super(props)
        this.state = {
            id_team_1: this.props.id_team,
            id_team_2: '',
            id_place : '',
            date: '',
            hour: '',
            canchas: []
        }

        this.getCanchas = this.getCanchas.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.agendarPartido = this.agendarPartido.bind(this)
    }

    agendarPartido(){
        const datos = {
            "id_team_1": this.state.id_team_1,
            "id_team_2": this.state.id_team_2,
            "id_place": this.state.id_place,
            "date": this.state.date,
            "hour": this.state.hour
        }
        EquipoManager.CreateMatch(datos)
        .then(res=>{
            console.log(res)
            if(res.success===200)alert('Se ha agendado un partido')
                // window.location.reload(false);
        })
        .catch(err=>{
            console.log(err)
        })
    }

    getCanchas(){
        CanchasAdmin.GetCanchas()
        .then(res=>{
            this.setState({
                canchas: res.places
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })

    }

    componentDidMount(){
        this.getCanchas()
    }

    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <h3>Agendar partido</h3>
                            <TextField value={this.state.id_team_2} id="id_team_2" name="id_team_2" type="number" label="Id equipo contrario" variant="outlined" onChange={this.handleChange}/>
                            <br/><br/>
                            <InputLabel>Sitio</InputLabel>
                            <Select
                                name="id_place"
                                labelId="Sitio"
                                id="id_place"
                                value={this.state.id_place}
                                onChange={this.handleChange}
                            >
                                {
                                    this.state.canchas.map((cancha)=>(
                                        <MenuItem key={cancha.id} value={cancha.id}>{cancha.name}</MenuItem>
                                    ))
                                }
                            </Select>
                            <br/>
                            <br/>
                            <TextField value={this.state.date} id="date" name="date" type="date" variant="outlined" onChange={this.handleChange}/>
                            <TextField value={this.state.hour} id="hour" name="hour" type="time" variant="outlined" onChange={this.handleChange}/>
                        </CardContent>
                        <CardActions>
                            <Button onClick={this.agendarPartido}>Agendar</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default AgendarPartido;