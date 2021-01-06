import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAJV0-NVF6R77vrRdT860R1o0EWmOW1Gl4",
    authDomain: "firegram-847f5.firebaseapp.com",
    projectId: "firegram-847f5",
    storageBucket: "firegram-847f5.appspot.com",
    messagingSenderId: "312699181823",
    appId: "1:312699181823:web:6fc28e5fae0a1bf5e0caca",
    measurementId: "G-F4CNWS43P4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.initializeApp({ firebaseConfig })

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };