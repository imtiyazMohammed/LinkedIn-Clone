import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCNIn1L97geCPcAvWIkNBPNk6oDXIMzaS8",
    authDomain: "my-linkedin-clone-project.firebaseapp.com",
    projectId: "my-linkedin-clone-project",
    storageBucket: "my-linkedin-clone-project.appspot.com",
    messagingSenderId: "602541637058",
    appId: "1:602541637058:web:571056e2c79b2ab3b5ea5b",
    measurementId: "G-DKYE7FYMKR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};