import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import authenticationInitialize from '../Firebase/authentication.init';


authenticationInitialize()

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    

    const auth = getAuth();

    const registerUser = (email, password) => {
        console.log(email, password);
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // Signed in 
                const user = result.user;
                setUser(user)
            })
            .catch((error) => {
            })
            .finally(()=> setIsLoading(false))
    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            })
            .finally(()=> setIsLoading(false))
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])

    // Email & Password Login Syestem 
    // *******************************
    const loginUser = (email, password) => {
        setIsLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
            // .then(result => {
            //     // Signed in 
            //     const user = result.user;
            //     history.push(redirect_url)
            //     // ...
            // })
            .catch((error) => {
                const errorMessage = error.message;
            })
            .finally(()=> setIsLoading(false))
    }

    // Google Login Syestem 
    // ********************
    const signInUsingGoogle = () => {
        setIsLoading (true)
         return signInWithPopup(auth, googleProvider)

         .catch((error)=>{
            // setError(error.massage)
        })
        .finally(()=> setIsLoading(false))
            
    }

    return {
        user,
        error,
        registerUser,
        logOut,
        loginUser,
        signInUsingGoogle,
        isLoading
    };
};

export default useFirebase;