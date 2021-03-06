import React, { useEffect, useState } from 'react';
import { Grid, Paper, CircularProgress } from '@material-ui/core';
import Items from '../components/Items';
import Loading from '../components/Loading';

// Firebase
import { getFirestore } from '../firebase';

//Alert
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';



const ListItems = () => {

    const [list, setList] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [error, setError ] = useState( false);



    useEffect(() => {
        //setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("items");
        //console.log( itemCollection );
        //const catCollection = itemCollection
        //.where('categoryId', '==', 'gorros');
        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
              setError(true);
            }
            setList( querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        
        }).catch( (err) => {
          setError(true);

        }).finally( () => {
          setLoading(true);
        });

      }, [  ]);



    
    return (
        <>  
             { !loading && <Loading/> }
                { error  && <Alert severity="info">
                  <AlertTitle>Info</AlertTitle>
                  There is a problem <strong> with the internet conexion</strong>
                  <hr/>
                </Alert>
            }
             <Grid container item spacing={4} style={{ marginTop: "2em" }}> 
                { !error && <Items resp = { list }/>}
            
            </Grid> 
        </>
    );
};

export default ListItems;