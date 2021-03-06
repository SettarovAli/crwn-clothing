import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import keyBy from "lodash.keyby";

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

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    let { displayName, email, photoURL } = userAuth;
    // if (!photoURL) photoURL = "/images/avatar.png";
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error catching user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return keyBy(transformedCollection, "routeName");
};

export default firebase;
