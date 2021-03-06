import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "react-ecomerce-786c7.firebaseapp.com",
  projectId: "react-ecomerce-786c7",
  storageBucket: "react-ecomerce-786c7.appspot.com",
  messagingSenderId: "825583036712",
  appId: "1:825583036712:web:c8f41a0eb7a28e17de881d",
};
firebase.initializeApp(config);

export default firebase;
