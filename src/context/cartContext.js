import React, { useState, useContext } from 'react';

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);
// Permite uno usar Provider y en cada component uso const cart = useCartContext();
//import React , { useContext } from 'react';


export default function CartProvider({ children}) {

    const [cart, setCart] = useState( []);
    const [cartQty, setcarQty ] = useState(0);




    function addItem ( item, qty ) { 
 
            if (!cart.find( p => p.id === item.id )) {
                
                
                setCart([...cart, item]); 
                setcarQty( cartQty + item.stock );     
            }
            else {
                //udate cantidad 
                cart.map(function( i ) {    

                    if( i.id === item.id){
                        i.stock += qty;
                    }
                    return i;
                 });
                 console.log(cart);
                 setCart([...cart]);
                 setcarQty( cartQty + item.stock ); 
            }
    }




    function removeItem ( item ){

        //console.log("remover item", itemId);
        const newCart = cart.filter( i => i.id !== item.id );

        setCart([...newCart]);
        setcarQty( cartQty - item.stock ); 
    }

    
    
    
    function clearItems() {

        setCart([]);
        setcarQty(0);
        console.log("el carrito quedo vacio" , cart);
    }



    return <CartContext.Provider value = { {cart, addItem, removeItem, clearItems, cartQty } } > 
                { children }
            </CartContext.Provider>
}