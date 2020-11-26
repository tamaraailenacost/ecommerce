import React, { useEffect, useState } from 'react';
import { Grid, Paper, CircularProgress } from '@material-ui/core';
import Items from '../components/Items';
import Loading from '../components/Loading';

// Firebase
import { getFirestore } from '../firebase';



const ListItems = () => {

    const [list, setList] = useState([]);
    const [ loading, setLoading ] = useState(false);


    useEffect(() => {
        //setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("items");
        console.log( itemCollection );
        //const catCollection = itemCollection
        //.where('categoryId', '==', 'gorros');
        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
              console.log('No results');
            };
            setList(
              querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            );
            setLoading(true);
        });
      },[  ]);


    
    return (
        <>
             <Grid container item spacing={4} style={{ marginTop: "2em" }}> 
    { !loading && <Loading/> }
             
                <Items resp = { list }/>
            
            </Grid> 
        </>
    );
};

export default ListItems;