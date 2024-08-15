

/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import Swal from "sweetalert2";
import { auth } from "../../firebase/firebase.config";


export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(true)

    const EmailSingIn = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email, password);
    }
    const provider = new GoogleAuthProvider();
    const googleSingIn = () => {
        setLoading(true);
        return signInWithPopup(auth , provider)
    }


    const LogInEmail = async (email, password) => {
        try {
            setLoading(true);
            return await signInWithEmailAndPassword(auth, email, password)



        } catch (error) {
            Swal.fire({
                title: 'Error!',
                timer: 1500,
                text: 'Something went wrong',
                icon: 'error',

            })
            return console.log(error);
        }
    }
    const LogOut = () => {

        signOut(auth)
            .then(async () => {

                // const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/logout`, { withCredentials: true })

                setUser(null)
                Swal.fire({
                    title: 'Success',
                    text: 'Successfully singed out',
                    icon: 'success',
                    timer: 1500
                })
            })

            .catch(error => Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                timer: 1500
            }));


    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {

            // get token form server using email
            setUser(currentUser);
            if (currentUser) {
               
              console.log(currentUser);

            }
            
            setLoading(false);


        })
        return () => {
            unSubscribe()
        }
    }, [user?.email]);




    const info = {
        user,

        EmailSingIn,
        googleSingIn,
        setLoading,
        LogOut,
        LogInEmail,

        loading,

        state,
        setState,
        setUser

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;