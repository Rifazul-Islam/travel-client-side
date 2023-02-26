import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase-config';

export const AuthContext=createContext();
const auth=getAuth(app);

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user , setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const haddlarCreateUser = (email, password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
    }

    const UserProfile = (profile) =>{
        setLoading(true)
            return updateProfile(auth.currentUser, profile)
     }


    const handlarSogin = (email,password)=>{
        setLoading(true)
              
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handlarGoogle = () =>{
        setLoading(true)
            return signInWithPopup(auth, googleProvider)
       }

    const lognOut = ()=>{
        setLoading(true);
      return signOut(auth)
 }


    useEffect(()=>{
             
        const unScrible = onAuthStateChanged(auth, (currentUser)=>{

           setUser(currentUser)
           setLoading(false)
        })
     return ()=> unScrible()
},[])

    const authInfo = {
       user,
       loading,
       haddlarCreateUser,
       handlarSogin,
       lognOut,
       handlarGoogle,
       UserProfile
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;