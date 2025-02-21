import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { signInWithPopup } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

 export const AuthProvider = ({children})=>{

    const [currentUser, setCurrentUser] = useState("");
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            console.log(user)
            if(user){
                // const {email,displayName,photoURL} = user;
                // const userData = {
                //     username: displayName,
                //     email,
                //     photo: photoURL                                                                                                                                                        
                // }
            }
        });
    
        return () => unsubscribe();
        }, []);

    // Register User 
   async function signUpUser(email,password){
        await createUserWithEmailAndPassword(auth,email,password);
    }
    // Login User
     async function  signInUser(email,password){
        const user = await signInWithEmailAndPassword(auth, email, password);
        // setCurrentUser(user._tokenResponse)
        setCurrentUser(user)

    }
    // Login and Signup with Google



    const googleProvider = new GoogleAuthProvider();

    async function signInWithGoogle(){
        await signInWithPopup(auth,googleProvider);
    }

    // Logout User
    async function logoutUser(){
        await signOut(auth);
    }

    const value = {
        signUpUser,
        signInUser,
        currentUser,
        signInWithGoogle,
        logoutUser
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
 }

