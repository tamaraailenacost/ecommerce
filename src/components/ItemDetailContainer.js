import React, {useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useParams } from 'react-router-dom';
import { Paper, Grid, ButtonBase, Typography } from '@material-ui/core';


//styles
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

const ItemDetailContainer = () => {

    //destructurar la funcion y sacar sus parametros para usarlos.
    //useParams escucha la URL y captura la ruta.
    const { id } = useParams();
    useEffect( () =>{
        console.log("recibi el id", id);
        
    }, [id]);

    //styles
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                            Standard license
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Full resolution 1920x1080 • JPEG
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            ID: 1030114
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                            Remove
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">$19.00</Typography>
                    </Grid>
                    </Grid>
                </Grid>
            </Paper>
      </div>
    );
};

export default ItemDetailContainer;