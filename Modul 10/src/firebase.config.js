// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {
export default { 
  apiKey: "AIzaSyD3iT0N7Bc0xqeU3XIKL3P_npRguqepmRA",
  authDomain: "latihan-firebase-dc57a.firebaseapp.com",
  projectId: "latihan-firebase-dc57a",
  storageBucket: "latihan-firebase-dc57a.appspot.com",
  messagingSenderId: "169143962482",
  appId: "1:169143962482:web:8687cc9c6cd458203febeb",
  measurementId: "G-PG2MH0ZWJW"
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);