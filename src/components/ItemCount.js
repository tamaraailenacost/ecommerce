import React, { useState } from 'react';
import  { IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveIcon from '@material-ui/icons/Remove';




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
        </>
    );
};

export default ItemCount;