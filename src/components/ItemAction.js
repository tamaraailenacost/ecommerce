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
    const { stock, item } = props;
    const [ add, setAdd ] = useState( stock );


    function addClick(){
        
        if( add <  item.maxQty ){ 
            let qty = add +1;
            setAdd( add + 1 );
            addItem( item, qty);
        }
        
        
    }

    function substractClick(){

        if(add > 1 ){
            let qty = add -1;
            setAdd( add -1);
            addItem( item, qty);
            
        }
    }

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