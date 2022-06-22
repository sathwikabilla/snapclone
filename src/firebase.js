// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyBhc585pa24pdOpNdDLCodjr0UrALbEQRY",
  authDomain: "snapclone-ded4c.firebaseapp.com",
  projectId: "snapclone-ded4c",
  storageBucket: "snapclone-ded4c.appspot.com",
  messagingSenderId: "976755266870",
  appId: "1:976755266870:web:0cfc81951938a5ef734f97",
  measurementId: "G-CWH6B94ECD"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage =firebase.storage();
  const provider=new firebase.auth.GoogleAuthProvider();
  
  export {auth, provider, storage, db};
