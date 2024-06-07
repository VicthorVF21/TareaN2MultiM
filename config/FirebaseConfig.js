import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDPdjN9sQDks6XaFSydZm2Qtx3Xf0Cm57s",
    authDomain: "tareamulti-738cd.firebaseapp.com",
    projectId: "tareamulti-738cd",
    storageBucket: "tareamulti-738cd.appspot.com",
    messagingSenderId: "952584827018",
    appId: "1:952584827018:web:653d1c66542f1a0c1cbd73"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();

