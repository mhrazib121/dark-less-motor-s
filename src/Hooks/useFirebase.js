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

    const registerUser = (email, password, name, history) => {
        console.log(email, password);
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // Signed in 
                // const user = result.user;

                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST');

                // console.log(result);
                console.log(newUser);
                history.replace('/');
            })
            .catch((error) => {
            })
            .finally(() => setIsLoading(false))
    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false))
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
            .finally(() => setIsLoading(false))
    }

    // Google Login Syestem 
    // ********************
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

            .catch((error) => {
                // setError(error.massage)
            })
            .finally(() => setIsLoading(false))

    }

    // Save user 
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        error,
        registerUser,
        logOut,
        loginUser,
        signInUsingGoogle,
        saveUser,
        isLoading
    };
};

export default useFirebase;