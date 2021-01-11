import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB7wXBB0d6FEo_W2CCiYsiflSyVlwfBPOs",
  authDomain: "shopping-cart-d72e6.firebaseapp.com",
  projectId: "shopping-cart-d72e6",
  storageBucket: "shopping-cart-d72e6.appspot.com",
  messagingSenderId: "633144573878",
  appId: "1:633144573878:web:a96d30cf636dfdcc018b17",
  measurementId: "G-DJJ1GBTK29",
});

const db = firebaseApp.firestore();
export default db;
