import React, { useState} from 'react';
import { Button } from '@material-ui/core';

//icons
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

//context
import { useCartContext } from '../context/cartContext';




const ItemAction = ( props ) => {

    //debugger;

    const { cart, addItem } = useCartContext();
    const { stock } = props;
    const [ add, setAdd ] = useState( stock );


    function addClick(){
        setAdd( stock + 1 );
        console.log(add);
    }

    function substractClick(){
        if(add > 1 ){
            setAdd( stock -1);
            console.log(add);
        }
    }

    /*const addToCart = (  qty, item  ) => {
        
        setShow( true);
        item.stock = qty;
        addItem(item, qty);
     
    }*/

    return (
        <>
            <Button variant="contained" 
              onClick={ addClick }
              fontSize="small"  
              style={{ marginTop: "2em", 
              marginRight:"2em"  }} 
              >
                    <AddIcon/>
                </Button>

                { add }

                <Button variant="contained" 
                onClick={ substractClick }
                fontSize="small" 
                style={{ marginTop: "2em", marginLeft:"2em" }} 
                >
                    <RemoveIcon/>
            </Button> 
        </>
    );
};

export default ItemAction;