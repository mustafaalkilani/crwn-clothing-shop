import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCqFzd-qyREeXgzDwVlUFvX5eVlzhewtiA",
  authDomain: "crown-clothing-db-e1aa6.firebaseapp.com",
  projectId: "crown-clothing-db-e1aa6",
  storageBucket: "crown-clothing-db-e1aa6.appspot.com",
  messagingSenderId: "1034777266357",
  appId: "1:1034777266357:web:0bfc1fbc0bc6467b3656fc"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });

    }catch (error) {
      console.log('there was an error with creating user', error.message);
    }
  }
}