import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
 
    apiKey: "AIzaSyCCwRRd4C4naXqt_KIyqu5kGT9I7aABu5E",
    authDomain: "product-clone.firebaseapp.com",
    projectId: "product-clone",
    storageBucket: "product-clone.appspot.com",
    messagingSenderId: "484284015537",
    appId: "1:484284015537:web:45ddd7f8afbc54771a1390"
  
  
});
const db= firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};