import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCg5yMKKGhv2Mkh5907UPx3K1vX1EMXqj0",
    authDomain: "ihack-hackathon.firebaseapp.com",
    projectId: "ihack-hackathon",
    storageBucket: "ihack-hackathon.appspot.com",
    messagingSenderId: "886996937588",
    appId: "1:886996937588:web:f9d65ad3f75014dd619a21"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)