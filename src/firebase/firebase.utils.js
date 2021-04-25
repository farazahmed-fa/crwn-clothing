import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDUqUFUeIU_pBqri4sACtSzFALu_G6wrd0",
    authDomain: "crwn-db-7ebe4.firebaseapp.com",
    projectId: "crwn-db-7ebe4",
    storageBucket: "crwn-db-7ebe4.appspot.com",
    messagingSenderId: "927061438151",
    appId: "1:927061438151:web:04a78483cbd030cd7258e2",
    measurementId: "G-BXN3WZRB9Z"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;