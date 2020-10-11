import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'

class CardCrearCancha extends Component {
    render() {
        return (
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Agregar sitio
                    </Typography>
                    <form>
                        <div >
                            <TextField id="outlined-basic" label="Nombre" required variant="outlined" size="small" />
                        </div>
                        <br/>
                        <div>
                            <TextField id="outlined-basic" label="Precio" type="number" required variant="outlined" size="small" />
                        </div>
                    </form>

                </CardContent>
                <CardActions>
                    <Button size="small">Agregar</Button>
                </CardActions>

            </Card>
        );
    }
}

export default CardCrearCancha;