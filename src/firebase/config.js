// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyD2UzAJJnKg-d89wSiAbDu36ypFNvw4mIs",

    authDomain: "heroesapp-b6ab2.firebaseapp.com",
  
    projectId: "heroesapp-b6ab2",
  
    storageBucket: "heroesapp-b6ab2.appspot.com",
  
    messagingSenderId: "1054968575871",
  
    appId: "1:1054968575871:web:0a79e0945a709a19774c4a",
  
  

//   measurementId: "G-CNYRFLTKR3"

};


// Initialize Firebase

const FirebaseApp = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)