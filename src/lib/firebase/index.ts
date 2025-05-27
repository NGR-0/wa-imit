// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYuhPFkVtkBxoLHfcqvUe-7TfDNCMXAPI",
  authDomain: "chat-2e34f.firebaseapp.com",
  projectId: "chat-2e34f",
  storageBucket: "chat-2e34f.firebasestorage.app",
  messagingSenderId: "15012495431",
  appId: "1:15012495431:web:d3c8ceae8868899d533162",
  measurementId: "G-CBJKZKNF5P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

export const signWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    const token = credential?.accessToken;
    return { user, credential, token };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      console.error("Google login failed:", error);
      throw new Error("Unknown error occurred during Google sign-in.");
    }
  }
};
export const signWithTwitter = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const user = result.user;
    const token = credential?.accessToken;
    return { user, credential, token };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      console.error("Google login failed:", error);
      throw new Error("Unknown error occurred during Google sign-in.");
    }
  }
};
