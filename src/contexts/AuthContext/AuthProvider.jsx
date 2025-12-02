// src/contexts/AuthContext/AuthProvider.jsx
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

// Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // ⭐ Create Firestore user profile if not exists
  const createUserProfile = async (firebaseUser) => {
    if (!firebaseUser) return;

    const ref = doc(db, "users", firebaseUser.uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      await setDoc(ref, {
        name: firebaseUser.displayName || "",
        email: firebaseUser.email,
        photoURL: firebaseUser.photoURL || "",
        role: "student", // ⭐ default role

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
          department: "",
        },

        address: {
          street: "",
          city: "",
          state: "",
          country: "",
          postal: "",
        },

        skills: [],

        // ⭐ Learning Progress Fields
        progress: {
          completedLessons: 0,
          totalLessons: 0,
          percentage: 0,
        },

        createdAt: new Date(),
      });
    }
  };

  // ⭐ Update learning progress (reusable)
  const updateProgress = async (completedLessons, totalLessons) => {
    if (!user) return;

    const percentage =
      totalLessons === 0
        ? 0
        : Math.round((completedLessons / totalLessons) * 100);

    const ref = doc(db, "users", user.uid);

    await setDoc(
      ref,
      {
        progress: {
          completedLessons,
          totalLessons,
          percentage,
        },
      },
      { merge: true }
    );
  };

  // ⭐ Authentication methods
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

  // ⭐ Social Login - MUST MATCH SocialLogin.jsx
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const signInWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  // ⭐ Auth State Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        await createUserProfile(currentUser);

        const ref = doc(db, "users", currentUser.uid);

        const unsubProfile = onSnapshot(ref, (snap) => {
          setUserProfile({
            uid: currentUser.uid,
            ...snap.data(),
          });
          setLoading(false);
        });

        return () => unsubProfile();
      } else {
        setUserProfile(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  // ⭐ Export values
  const authInfo = {
    user,
    userProfile,
    loading,

    registerUser,
    loginUser,
    logoutUser,

    // Social Logins
    signInWithGoogle,
    signInWithGithub,
    signInWithFacebook,

    // Learning progress update
    updateProgress,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
