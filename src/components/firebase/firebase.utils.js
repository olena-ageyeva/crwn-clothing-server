import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCYjSS_u390R56xuC5WTzyAzUd3mWw0msc",
  authDomain: "crwn-db-1708c.firebaseapp.com",
  projectId: "crwn-db-1708c",
  storageBucket: "crwn-db-1708c.appspot.com",
  messagingSenderId: "624394825897",
  appId: "1:624394825897:web:84930ea052cef95852f9b8",
  measurementId: "G-YBKKSHTBKH",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
