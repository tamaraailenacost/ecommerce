import React, { useEffect, useState } from 'react';
import { Grid, Paper, CircularProgress } from '@material-ui/core';
import Items from '../components/Items';
import Loading from '../components/Loading';
import { getFirestore } from '../firebase';



//Promise resolve an objet with the items data
const getItems = () => {
    return new Promise((resp, rej) =>{
        setTimeout( ()=> {
            resp( [ 
                { id: "1", title: "2x1 Loop class", stock:3, category:"class", price: 1500, pictureUrl: "/assets/images/gallery/imagen_vacia.jpg" },
                { id: "2", title: "Rise the Bar",stock:4, category:"class", price: 1500, pictureUrl: "/assets/images/gallery/imagen_vacia.jpg" },
                { id: "3", title: "Level Up with Loop", category:"class", stock:2, price: 1500, pictureUrl: "/assets/images/gallery/imagen_vacia.jpg" },
                { id: "4", title: "contempo", price: 1500, category:"class", stock:3, pictureUrl: "/assets/images/gallery/imagen_vacia.jpg" },
                ])
           
        }, 2000)
    });
}



const ListItems = () => {

    const [list, setList] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        getItems( ).then(
            resp => {
                
                setList( resp );
                setLoading( true );
        });
    
    }, []);
    
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