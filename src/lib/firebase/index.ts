// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
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
export const auth = getAuth(app);
export const db = getFirestore(app);

auth.languageCode = "en";

const googleProvider = new GoogleAuthProvider();

export const signWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(result);

    const user = result.user;
    const token = credential?.accessToken;

    const uid = user.uid;

    const userDocRef = doc(db, "users", uid);
    const userSnap = await getDoc(userDocRef);

    const isNew = !userSnap.exists();

    return { user, credential, token, isNew };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      console.error("Google login failed:", error);
      throw new Error("Unknown error occurred during Google sign-in.");
    }
  }
};
