import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState(null)

    // signup email, pass
    const SignUp = (email, password)=>{
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign in
    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign in with google
    const googleProvider = new GoogleAuthProvider();


    const signInWithGoogle = ()=>{
        setLoading(true)

        return signInWithPopup(auth, googleProvider)

    }
    //update profile

    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }
    

    //handle current User
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    } ,[])


    //logout
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    
    
    
   //global object 
    const authInfo = {
        SignUp,
        user,
        logOut,
        updateUser,
        login,
        setUser,
        loading,
        signInWithGoogle,
        setLoading,
        


    }

    return (
        
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;