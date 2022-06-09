import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCn4peWG9bAeYr-o91eK9oY8Z1m4q0wq4g",
    authDomain: "crud-fire-react-6c11c.firebaseapp.com",
    projectId: "crud-fire-react-6c11c",
    storageBucket: "crud-fire-react-6c11c.appspot.com",
    messagingSenderId: "264037474572",
    appId: "1:264037474572:web:781c322cb771902239a929",
    measurementId: "G-C6N2XVW62S"
    };

  const app = initializeApp(firebaseConfig);

  export const db= getFirestore(app);