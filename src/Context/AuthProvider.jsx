import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { app } from '../Firebase/firebase.config';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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

    const forgotPassUser = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsabscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
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
        forgotPassUser,
        updateUser,
        logOutUser,
    }
    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>;
};

export default AuthProvider;