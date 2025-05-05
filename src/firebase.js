import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-S0MN5KoJqasv3DjHqNH3bwhC6dEnxUM",
    authDomain: "pucpr-trabalho.firebaseapp.com",
    projectId: "pucpr-trabalho",
    storageBucket: "pucpr-trabalho.firebasestorage.app",
    messagingSenderId: "6166618964",
    appId: "1:6166618964:web:473cd49764a67afa77dec1",
    measurementId: "G-NEEBYGV2HE"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
