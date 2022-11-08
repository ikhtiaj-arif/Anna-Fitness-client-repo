import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.config';




export const AuthContext = createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const UserContext = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserName = (name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, name)
    }

    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () =>{
        
        return signOut(auth)
    }

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }



    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
             unsubscribe()
            }
    }, [])

    const info={
        user,
        setUser,
        loading,
        createUser,
        logInUser,
        updateUserName,
        googleLogin,
        logOutUser
    }



    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;