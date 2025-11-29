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

import { db } from "../../firebase/firebase.init";
import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";

export const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null); // ⭐ Firestore profile
  const [loading, setLoading] = useState(true);

  // ⭐ Create Firestore Profile
  const createUserProfile = async (firebaseUser) => {
    if (!firebaseUser) return;

    const ref = doc(db, "users", firebaseUser.uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      await setDoc(ref, {
        name: firebaseUser.displayName || "",
        email: firebaseUser.email,
        photoURL: firebaseUser.photoURL || "",
        role: "Student",
        bio: "",
        phone: "",
        facebook: "",
        linkedin: "",
        github: "",
        resumeURL: "",
        academic: {
          studentId: "",
          session: "",
          semester: "",
          dob: "",
          department: ""
        },
        address: {
          street: "",
          city: "",
          state: "",
          country: "",
          postal: ""
        },
        skills: []
      });
    }
  };

  // ⭐ AUTH METHODS
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

  // ⭐ FIREBASE AUTH LISTENER
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        await createUserProfile(currentUser);

        const ref = doc(db, "users", currentUser.uid);

        const unsubProfile = onSnapshot(ref, (snap) => {
          setUserProfile(snap.data());
          setLoading(false);   // ⭐ VERY IMPORTANT
        });

        return () => unsubProfile();
      } else {
        setUserProfile(null);
        setLoading(false);     // ⭐ Must stop loading here too
      }
    });

    return () => unsubscribe();
  }, []);


  // ⭐ EXPORT EVERYTHING
  const authInfo = {
    user,
    userProfile,      // 🔥 profile now available everywhere!
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
