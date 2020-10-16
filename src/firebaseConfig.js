import * as firebase from "firebase";
import "firebase/auth";
//import dataConfig from './dataConfig'

const app = firebase.initializeApp(
    {
        apiKey:"AIzaSyBUc9TGzDw_Z1TYucnxxbhoCAlaZeanDNA",
        authDomain:"trabajadorchi.firebaseapp.com",
        databaseURL:"https://trabajadorchi.firebaseio.com",
        projectId:"trabajadorchi",
        storeBucket:"trabajadorchi.appspot.com",
        messagingSenderId:"886794037277",
        appId:"1:886794037277:web:e347bed26a08a4fc677ef4",
        measurementId:"G-K85ZTGM8P5"
    }
);

/*const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();*/

export default app;

