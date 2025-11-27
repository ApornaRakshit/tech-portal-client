import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.init";
import {
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext(null);

// Hook to use the Auth Context
export const useAuth = () => useContext(AuthContext);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const saveUserToDb = async (firebaseUser) => {
    if (!firebaseUser?.email) return;

    const userData = {
      name: firebaseUser.displayName || "Anonymous",
      email: firebaseUser.email,
      photoURL: firebaseUser.photoURL,
      uid: firebaseUser.uid,
    };

    await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userData),
    });
  };

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
  const signInWithGithub = () => signInWithPopup(auth, githubProvider);
  const signInWithFacebook = () => signInWithPopup(auth, facebookProvider);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) await saveUserToDb(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    registerUser,
    loginUser,
    logoutUser,
    signInWithGoogle,
    signInWithGithub,
    signInWithFacebook,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
