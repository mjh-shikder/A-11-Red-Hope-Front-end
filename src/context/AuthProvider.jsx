import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);
  const [typedEmail, setTypedEmail] = useState("");
  const [role, setRole] = useState("");

  console.log(role);
  

  // Create user with email and password.
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User
  const userLogin = (email, passowrd) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, passowrd);
  };

  // Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  });

  // Get the Role from DB
  useEffect(() => {
    if (!user) return;
    axios.get(`http://localhost:5000/users/role/${user.email}`).then((res) => {
      setRole(res.data.role);
    
    });
  }, [user]);

  // Logout
  const logout = () => {
    return signOut(auth);
  };

  const authData = {
    user,
    setUser,
    createUser,
    userLogin,
    logout,
    loading,
    setLoading,
    showPassword,
    setShowPassword,
    typedEmail,
    setTypedEmail,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
