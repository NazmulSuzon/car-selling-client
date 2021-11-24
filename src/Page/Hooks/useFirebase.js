import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";
import initializeAuthentication from "../Home/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({
    isAdmin : false,
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  const auth = getAuth();

  const registerUser = ({email,displayName,password}, history) => {
    console.log(displayName)
    setIsLoading(true);
    createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        setAuthError('');
        console.log(userCredential)
        const newUser = { email: email, displayName: displayName };
        setUser(newUser);

        // save user to db
        saveUser(email, displayName);

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: displayName
        })
        .then(() => {})
        .catch((error) => {})
        history.replace('/');
      })
      .catch((error) => {
        setAuthError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const logInUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        const destination = location?.state?.from || '/';
        history.push(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message); 
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser({})
        }
        setIsLoading(false);
    });
    return () => unsubscribed;
}, [])

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email,displayName) => {
    const user = { email, displayName };
    fetch('https://glacial-anchorage-88737.herokuapp.com/users', {
      method:'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  }

  return {
    user,
    isAdmin, 
    setIsAdmin,
    logInUser,
    registerUser,
    isLoading,
    authError,
    logOut,
  };
};

export default useFirebase;
