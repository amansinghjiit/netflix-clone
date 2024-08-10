import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDktbXvNy_R1chYmkEj7BgpnGG4DARLLAI",
  authDomain: "netflix-clone-350c1.firebaseapp.com",
  projectId: "netflix-clone-350c1",
  storageBucket: "netflix-clone-350c1.appspot.com",
  messagingSenderId: "50001085720",
  appId: "1:50001085720:web:4160701bc7b4ca0f9a8a6d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
};

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
};

const logout = () => {
    signOut(auth);
};

export { auth, db, signup, login, logout };
