import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD1pTFzlklnGxN2NsxW0Isfay-8WbwxVdo",
    authDomain: "ol-software123.firebaseapp.com",
    projectId: "ol-software123",
    storageBucket: "ol-software123.appspot.com",
    messagingSenderId: "807732346725",
    appId: "1:807732346725:web:1f813e3ca92a0173baab8c"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db, 
    googleAuthProvider,
    firebase
}