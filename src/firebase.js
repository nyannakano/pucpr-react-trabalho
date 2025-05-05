import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

let firebaseConfig = {
    apiKey: "AIzaSyA-S0MN5KoJqasv3DjHqNH3bwhC6dEnxUM",
    authDomain: "pucpr-trabalho.firebaseapp.com",
    projectId: "pucpr-trabalho",
    storageBucket: "pucpr-trabalho.firebasestorage.app",
    messagingSenderId: "6166618964",
    appId: "1:6166618964:web:473cd49764a67afa77dec1",
    measurementId: "G-NEEBYGV2HE"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };

export default firebase;
