import firebase from "firebase/app";
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyCvzWNjzXqcLUvmxXnw_JbXZ4elFe6wuKA",
    authDomain: "messenger-4b8f2.firebaseapp.com",
    projectId: "messenger-4b8f2",
    storageBucket: "messenger-4b8f2.appspot.com",
    messagingSenderId: "701561666961",
    appId: "1:701561666961:web:52779d9a230435e2ad2e30",
    measurementId: "G-9BBTLZPYJ1"
  });

  const db = firebaseApp.firestore();

  export default db;
 