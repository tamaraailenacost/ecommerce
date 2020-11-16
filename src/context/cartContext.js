import React, { useState, useContext } from 'react';

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);
// Permite uno usar Provider y en cada component uso const cart = useCartContext();
//import React , { useContext } from 'react';


export default function CartProvider({ children, defaultCart = [] }) {

    const [cart, setCart] = useState(defaultCart);


    function addItem ( item ) { 

        //const existItem = cart.find( element => element.title === item.title );
        console.log("agregar al carrito", existItem);

        setCart([...cart, item]);

    }

    function removeItem ( itemId ){

        console.log("remover al carrito", itemId);

    }

    function clearItems() {

        setCart( defaultCart = []);
        console.log("el carrito quedo vacio" , cart);
    }



    return <CartContext.Provider value = { { cart, addItem, removeItem, clearItems } } > 
                { children }
            </CartContext.Provider>
}