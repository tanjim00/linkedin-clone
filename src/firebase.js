import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBviI0eg2ctZSd0d8LdVGtpCCwCEpdqoTc",
    authDomain: "linkedin-clone-27ab7.firebaseapp.com",
    projectId: "linkedin-clone-27ab7",
    storageBucket: "linkedin-clone-27ab7.appspot.com",
    messagingSenderId: "286912683651",
    appId: "1:286912683651:web:efd7ec6a0f19e5697e05b6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };