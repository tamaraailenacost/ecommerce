import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';




const Cart = () => {
    
    return(
        <>
        <Link to="/cart">
            <ShoppingCartIcon  className="mysiconos">
            </ShoppingCartIcon>
        </Link>
        </>
    );
};

export default Cart;