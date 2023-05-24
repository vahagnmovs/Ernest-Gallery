import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT,
    authDomain: "ernest-gallery.firebaseapp.com",
    projectId: "ernest-gallery",
    storageBucket: "ernest-gallery.appspot.com",
    messagingSenderId: "440945990353",
    appId: "1:440945990353:web:ca7812f843fe1b2813c3f0"
};

const app = firebase.initializeApp(firebaseConfig);

const firestore = app.firestore();

export { firestore, firebase as default };
