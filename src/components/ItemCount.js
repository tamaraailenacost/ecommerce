
import React, { useState } from 'react';
import  { IconButton, Link, Button, Grid } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const ItemCount = () => {

    const [ add, setAdd ] = useState(0);

    function addClick(){
        setAdd(add + 1 );
    }

    function substractClick(){
        if(add > 0 ){
            setAdd(add -1);
        }
    }
    
    return (
        <>
            <IconButton onClick={substractClick} color="secondary">
                    <RemoveIcon size="small" />
            </IconButton>
            {add}
            <IconButton onClick={addClick}>
                    <AddShoppingCartIcon size="small"/>
                   
            </IconButton>
            <Grid>
            <Link to="/cart">
                <Button
                    variant="contained"
                    size="large"
                    startIcon={<ShoppingBasketIcon />}
                >
                    Add to Cart { add } 
                </Button>
            </Link>
            </Grid>
        </>
    );
};

export default ItemCount;