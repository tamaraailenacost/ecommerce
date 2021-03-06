
import React, { useState } from 'react';
import  { IconButton, Button, Grid } from '@material-ui/core';
import {Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useCartContext } from '../context/cartContext';


const ItemCount = ( props ) => {

    const { cart, addItem } = useCartContext();
    const { item } = props;
    const [ add, setAdd ] = useState( 1 );
    const [show, setShow] = useState(false);
   


    function addClick(){
        if( add <  item.maxQty ){
            setAdd(add + 1 );
        }
        
    }

    function substractClick(){
        if(add > 1 ){
            setAdd(add -1);
        }
    }

    const addToCart = (  qty, item  ) => {
        
        setShow( true);
        item.stock = qty;
        addItem(item, qty);
     
    }
    
    return (
        <>  
            <Grid className={!show ? "claseCSSMostrar" :" claseCSSNoMostrar" } >
                <IconButton onClick={substractClick} color="secondary">
                        <RemoveIcon size="small" />
                </IconButton>
                {add}
                <IconButton onClick={addClick}>
                        <AddShoppingCartIcon size="small"/>
                    
                </IconButton>
                <Button
                    onClick={ ()=> addToCart(add, item) }
                    variant="contained"
                    size="large"
                    startIcon={<ShoppingBasketIcon />}
                >
                     { add } 
                </Button>
                <p> Stock Available: { item.maxQty }</p>
            </Grid>
            { show &&<Link to="/cart">
                <Button  >
                    Buy now!
                </Button>
            </Link>}
        </>
    );
};

export default ItemCount;