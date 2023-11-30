// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1NKdTZbCq8QuljIJOzZONBpvXmajYgZE",
  authDomain: "react-journal-f4a74.firebaseapp.com",
  projectId: "react-journal-f4a74",
  storageBucket: "react-journal-f4a74.appspot.com",
  messagingSenderId: "346260388033",
  appId: "1:346260388033:web:67a4396f556ca905293c40"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );