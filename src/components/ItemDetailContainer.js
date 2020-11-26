import React, {useEffect, useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { Paper, Grid, ButtonBase, Typography, Button, Chip } from '@material-ui/core';
import ItemCount from '../components/ItemCount';
import Loading from '../components/Loading';
import { getFirestore } from '../firebase';





//Promise resolve an objet with the items data
const getItems = () => {
    return new Promise((resp, rej) =>{
        setTimeout( ()=> {
            resp( [
              { id: "1", maxQty: "10", title: "2x1 Loop class", stock: 3, category: "class", price: 1500, pictureUrl: "/assets/images/gallery/imagen_vacia.jpg" },
              { id: "2", maxQty: "10", title: "Rise the Bar", stock: 4, category: "class", price: 1500, pictureUrl: "/assets/images/gallery/imagen_vacia.jpg" },
              { id: "3", maxQty: "10", title: "Level Up with Loop", category: "class", stock: 2, price: 1500, pictureUrl: "/assets/images/gallery/imagen_vacia.jpg" },
              { id: "4", maxQty: "10", title: "contempo", price: 1500, category: "class", stock: 3, pictureUrl: "/assets/images/gallery/imagen_vacia.jpg" },
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
    const [ loading, setLoading ] = useState(false);



/*
    
    useEffect( () =>{
        //console.log("recibi el id", id);
        getItems( id ).then(
            resp => {
                 resp.filter(
                    p =>{
                        //console.log("respuesta recibida", p);
                        if( p.id === id ) {
                            //console.log("respuesta recibida", p);
                            setItemId(p);
                            setLoading(true);
                        }
                    }

                  );
        });
        
    }, [id]); */

    useEffect(() => {

        
        const db = getFirestore();
        const itemCollection = db.collection("items");

        console.log( "itemCollection", itemCollection);
        const catCollection = itemCollection
        .where('id', '==', id);
        catCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
              console.log('No results');
            };
            console.log( querySnapshot.docs );
            setItemId(
              querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            );
            setLoading(true);
        });
      }, [ id ]);
    

    


    return (
        <div className={classes.root}>
            { !loading && <Loading/> }
            { loading && <Paper className={classes.paper} style={{ marginTop: "4em" }}>
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
                          { itemId.feature}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                        Code: { itemId.id }
                        </Typography>
                        <Chip label={ itemId.category }   color="secondary"/>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">
                        ${ itemId.price }
                        </Typography>
                        
                    </Grid>
                    </Grid>
                </Grid>
            <Grid>
                <ItemCount item = {itemId}/>
            </Grid>
            </Paper>
}
      </div>
    );
};

export default ItemDetailContainer;