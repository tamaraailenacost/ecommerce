import React, {useEffect, useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { Paper, Grid, ButtonBase, Typography } from '@material-ui/core';




//Promise resolve an objet with the items data
const getItems = () => {
    return new Promise((resp, rej) =>{
        setTimeout( ()=> {
            resp( [ 
                { id: 1, title: "2x1 Loop class", price: 1500, pictureUrl: "/assets/images/gallery/imagen_vacia.jpg" },
                { id: 2, title: "Rise the Bar", price: 1500, pictureUrl: "/assets/images/gallery/imagen_vacia.jpg" },
                { id: 3, title: "Level Up with Loop", price: 1500, pictureUrl: "/assets/images/gallery/imagen_vacia.jpg" },
                { id: 4, title: "contempo", price: 1500, pictureUrl: "/assets/images/gallery/imagen_vacia.jpg" },
                ])
           
        }, 3000)
    });
}


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

    //styles
    const classes = useStyles();

    //destructurar la funcion y sacar sus parametros para usarlos.
    //useParams escucha la URL y captura la ruta.
    const { id } = useParams();
    const [itemId, setItemId] = useState([]);


    useEffect( () =>{
        console.log("recibi el id", id);
        getItems( ).then(
            resp => {
                setItemId( resp[2] );
                console.log("respuesta recibida", resp[2]);
        });
        
    }, [id]);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt={itemId.title} src={itemId.pictureUrl} />
                    </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                              { itemId.title }
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam, nulla reprehenderit minus nobis incidunt! Consectetur quidem, harum minima ab corrupti a reiciendis, dolores magnam numquam cupiditate, rem autem possimus!
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                        Code: { itemId.id }
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">
                        ${ itemId.price }
                        </Typography>
                    </Grid>
                    </Grid>
                </Grid>
            </Paper>
      </div>
    );
};

export default ItemDetailContainer;