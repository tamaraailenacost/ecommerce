import React, {useEffect, useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { Paper, Grid, ButtonBase, Typography, Button, Chip } from '@material-ui/core';
import ItemCount from '../components/ItemCount';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

//Alert
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

//Firebase
import { getFirestore } from '../firebase';



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
    const [error, setError ] = useState( false);
    const [ loading, setLoading ] = useState(false);


    useEffect(() => {

        
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const item = itemCollection.doc(id);
        
        //console.log("el item que trajo", item);

        item.get().then(( doc ) =>{
          if( !doc.exists){
            console.log("item not exist");
            setError(true);
            return;
          }
          setItemId( { id: doc.id, ...doc.data() } );
          
        }).catch( (err) => {
          setError(true);

        }).finally( () => {
          setLoading(true);
        });

      }, [ id ]);
    

    


    return (
        <div className={classes.root}>
            { !loading && <Loading/> }
            { error  && <Alert severity="info">
                  <AlertTitle>Info</AlertTitle>
                  There is a problem <strong> with the internet conexion  </strong>
                  or the item you are looking for doesn't exist.
                  <hr/>
                  <Link to="/">Go back to Home</Link>
                </Alert>
            }
            { loading && !error && <Paper className={classes.paper} style={{ marginTop: "4em" }}>
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