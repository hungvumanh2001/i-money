import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsS-GT85CKAVnDSvpcERyrxCbxw2wgvd0",
  authDomain: "imoney-75060.firebaseapp.com",
  projectId: "imoney-75060",
  storageBucket: "imoney-75060.appspot.com",
  messagingSenderId: "839571322922",
  appId: "1:839571322922:web:4f9cea1bd4128dd0552b53",
  measurementId: "G-Z7CV9DE6BL",
};
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
