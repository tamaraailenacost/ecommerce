import React, { useState, useContext, useEffect } from 'react';
import 'firebase/auth';
import * as firebase from 'firebase/app';



export const AuthContext = React.createContext( );
export const useAuthContext = () => useContext( AuthContext );
// Permite uno usar Provider y en cada component uso const cart = useCartContext();


export default function AuthProvider( {children} ) {

    const [ user, setUser ] = useState( null);

    useEffect(() => {

        firebase.auth().onAuthStateChanged(setUser);

    }, [ ]);

    const logIn = ( ) => {

        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleAuthProvider);
     
    }

    const logOut = ( ) => {

        firebase.auth().signOut(); 
      
    }




    
    return <AuthContext.Provider value = {{ user, logIn, logOut }} > 
    { children }
          </AuthContext.Provider>



}
