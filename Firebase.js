import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config={
    apiKey: "AIzaSyCGKrhW3qNu-AsB7C5fSw0QadPb-aFabu0",
    authDomain: "datoschiperstream.firebaseapp.com",
    databaseURL: "https://datoschiperstream.firebaseio.com",
    projectId: "datoschiperstream",
    storageBucket: "datoschiperstream.appspot.com",
    messagingSenderId: "440808886907",
    appId: "1:440808886907:web:f666bc01f4447bbd16c8de",
    measurementId: "G-NC14CKLEXY"

};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
