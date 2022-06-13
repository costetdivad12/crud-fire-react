import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyA1FZ8qWR2uYT2vTxb-Z3UL_CegFAPqyvU",
  authDomain: "crud-fire-react-1609f.firebaseapp.com",
  projectId: "crud-fire-react-1609f",
  storageBucket: "crud-fire-react-1609f.appspot.com",
  messagingSenderId: "11629122216",
  appId: "1:11629122216:web:4a2d49f39c6215a0f9a89d",
  measurementId: "G-T0FJHX5BDE"
};


  const app = initializeApp(firebaseConfig);

  export const db= getFirestore(app);