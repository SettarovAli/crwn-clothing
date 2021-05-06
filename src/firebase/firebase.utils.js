import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAOqRttel5ez64CyigYy1BGjipuBcEarrI",
  authDomain: "crwn-db-15f3f.firebaseapp.com",
  projectId: "crwn-db-15f3f",
  storageBucket: "crwn-db-15f3f.appspot.com",
  messagingSenderId: "582906935143",
  appId: "1:582906935143:web:854195e1a62d2d3a7ca1c2",
  measurementId: "G-30P2PF343T",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
