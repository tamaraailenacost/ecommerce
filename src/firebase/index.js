import * as firebase from 'firebase/app';
import 'firebase/firestore';



const app = firebase.initializeApp({
    apiKey: "AIzaSyDwGgEq6UcyFNoCvbo9iKgXxjxFKyIoLpE",
    authDomain: "ecommerce-react-6edde.firebaseapp.com",
    databaseURL: "https://ecommerce-react-6edde.firebaseio.com",
    projectId: "ecommerce-react-6edde",
    storageBucket: "ecommerce-react-6edde.appspot.com",
    messagingSenderId: "476793616841",
    appId: "1:476793616841:web:3ca0b74530139074a69018",
    measurementId: "G-Z37FV6M4R3"
});
export function getFirebase() {
    return app;
}


export function getFirestore() {
    return firebase.firestore(app);
}