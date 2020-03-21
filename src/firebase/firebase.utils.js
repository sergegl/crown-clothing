import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyD-QSw-BuNOAhImpaa3llR6Mtc_-lqfmrY",
  authDomain: "crown-db-8380f.firebaseapp.com",
  databaseURL: "https://crown-db-8380f.firebaseio.com",
  projectId: "crown-db-8380f",
  storageBucket: "crown-db-8380f.appspot.com",
  messagingSenderId: "54599956168",
  appId: "1:54599956168:web:3167ce41fa30e4e45897fd",
  measurementId: "G-C4DXRK352C"
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// Create google provider
const provider = new firebase.auth.GoogleAuthProvider();
// Prompt with dialog to select an account to login with
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Export firebase instance
export default firebase;