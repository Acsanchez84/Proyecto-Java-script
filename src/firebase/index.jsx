import firebase from "firebase/app";
import '@firebase/firestore';


 // Crear la conexión con firebase
 
 const app = firebase.initializeApp ({
    apiKey: "AIzaSyA-owHNHcdS0fpx2y_NC3NJ-qRuORf91NQ",
    authDomain: "coder-react-ecommerce-vica.firebaseapp.com",
    projectId: "coder-react-ecommerce-vica",
    storageBucket: "coder-react-ecommerce-vica.appspot.com",
    messagingSenderId: "467647828387",
    appId: "1:467647828387:web:2d634c7ed622f6bf410a16"
 });

 export const getFirebase = () => {
     return app;
 }

 export const getFirestore = () => {
     return firebase.firestore(app);
 }