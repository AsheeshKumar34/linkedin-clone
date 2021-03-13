import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9MQbP1fgDKBBgdhwCuwR8ikM_qhLXoY0",
  authDomain: "linkedin-clone-48f52.firebaseapp.com",
  projectId: "linkedin-clone-48f52",
  storageBucket: "linkedin-clone-48f52.appspot.com",
  messagingSenderId: "232936670621",
  appId: "1:232936670621:web:9ac69a3e026d3e401fdb74",
  measurementId: "G-CN6F1915MT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
