import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJ7zFOzmJYQFEgsRihqgYsyYNyKul-WH8",
    authDomain: "whatsapp-clone-b138e.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-b138e.firebaseio.com",
    projectId: "whatsapp-clone-b138e",
    storageBucket: "whatsapp-clone-b138e.appspot.com",
    messagingSenderId: "969043215528",
    appId: "1:969043215528:web:dde45d2e7489ca15eb6e9d",
    measurementId: "G-JVYEWXV0YQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;