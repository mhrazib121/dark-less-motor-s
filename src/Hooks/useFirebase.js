import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import authenticationInitialize from '../Firebase/authentication.init';
import { useHistory } from 'react-router';


authenticationInitialize()

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    // const history = useHistory()


    const auth = getAuth();

    const registerUser = (email, password, name, history, location) => {
        console.log(email, password);
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // Signed in 
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST');

                // Redirect
                const redirect = location?.state?.from || '/';
                history.replace(redirect);

            })
            .catch((error) => {
            })
            .finally(() => setIsLoading(false))
    }
    // Sign-out successful.
    const logOut = (history, location) => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                // Redirect
                const redirect = location?.state?.from || '/';
                history.replace(redirect);
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
        fetch('https://evening-retreat-75203.herokuapp.com/users', {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    useEffect(() => {
        setLoading(true)
        fetch(`https://evening-retreat-75203.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
            .finally(setLoading(false))
    }, [user.email])

    return {
        user,
        error,
        admin,
        loading,
        registerUser,
        logOut,
        loginUser,
        signInUsingGoogle,
        saveUser,
        isLoading
    };
};

export default useFirebase;