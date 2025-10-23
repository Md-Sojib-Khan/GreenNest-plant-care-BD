import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { app } from '../Firebase/firebase.config';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignInUser = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsabscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        });
        return () => { unsabscribe() }
    }, [])

    const authInfo = {
        auth,
        user,
        loading,
        setLoading,
        createUser,
        logInUser,
        googleSignInUser,
        logOutUser,
        updateUser,
    }
    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>;
};

export default AuthProvider;