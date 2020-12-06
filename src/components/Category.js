import React, { useEffect, useState } from 'react';
import { Grid, Paper, CircularProgress } from '@material-ui/core';
import Items from '../components/Items';
import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';


// Firebase
import { getFirestore } from '../firebase';

//Alert
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

const Category = () => {

    //useParams escucha la URL y captura la ruta.
    const { categoryId } = useParams();
    const [list, setList] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [error, setError ] = useState( false);



    useEffect(() => {
        //setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("items");
        //console.log( itemCollection );
        const catCollection = itemCollection
        .where('category', '==', categoryId);
        catCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
              setError(true);
            }
            setList( querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        
        }).catch( (err) => {
          setError(true);

        }).finally( () => {
          setLoading(true);
        });

      }, [ categoryId ]);


    return (
        <>  
             { !loading && <Loading/> }
                { error  && <Alert severity="info">
                  <AlertTitle>Info</AlertTitle>
                  There is no item <strong> in {categoryId} </strong>
                  <hr/>
                </Alert>
            }
             <Grid container item spacing={4} style={{ marginTop: "2em" }}> 
                { !error && <Items resp = { list }/>}
            
            </Grid> 
        </>
    );
};

export default Category;