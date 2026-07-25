import {useState , useRef} from "react";
import { formValidation } from "../utils/formValidation";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import { getFirebaseErrorMessage } from "../utils/firebase";
import { useDispatch } from "react-redux";
import  {addUser}  from "../utils/userSlice";
import Header from "./Header";
import { BG_IMG } from "../utils/constants";


const Login = () => {
    const [signUp , setsignUp] = useState(false);
    const [errorMsg , seterrorMsg] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const dispatch = useDispatch();

    const handleForm = () => {
        setsignUp(!signUp);
    }

    const handleValidation = (email , password , name , signUp) => {
        const message = (name.current) ? formValidation(email.current.value , password.current.value , name.current.value , signUp) :formValidation(email.current.value , password.current.value , signUp);
        seterrorMsg(message);

        if(message) return;

        if(signUp){
            createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
                .then(() => {
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value 
                    }).then(() => {
                        dispatch(addUser({uid:auth.currentUser.uid , displayName: auth.currentUser.displayName , email: auth.currentUser.email}));
                        // Profile updated!
                    }).catch((error) => {
                        seterrorMsg(error.message);
                        // An error occurred
                    });   
                })
                .catch((error) => {
                    const errorCode = error.code;
                    seterrorMsg(getFirebaseErrorMessage(errorCode));
                });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value , password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    dispatch(addUser({uid: user.uid, displayName: user.displayName, email: user.email}));
                })
                .catch((error) => {
                    const errorCode = error.code;
                    seterrorMsg(getFirebaseErrorMessage(errorCode));
                });
        }
}

    return (
       
        <div  >
            <Header />
            {/* gradient affect */}
            {/* <div className="absolute top-0 left-0 w-full h-60 bg-linear-to-b from-black/70 to-transparent"></div> */}
            <div className="absolute bottom-0 left-0 w-full h-90 bg-linear-to-t from-black/90 to-transparent"></div>

            {/* background Image */}
            <img src = {BG_IMG} className="h-screen w-full"/>

            {/* Form */}
            <div className = "  absolute inset-0 flex justify-center items-center ">
            <form className=" bg-black/70 rounded-sm flex flex-col py-20 px-15" onSubmit={(e) => {
                e.preventDefault();
            }} >

                <h1 className="mb-5 font-bold text-3xl text-white">{signUp ? 'Sign Up' : 'Sign In'}</h1> 
             
                {(signUp) && (<input type="text" placeholder="Name" className="mb-5 px-5 py-3 w-80 bg-gray-700 placeholder:text-zinc-400 text-white" ref={name} />)}

                <input type="text" placeholder="Email Address" className="mb-5 px-5 py-3 w-80  bg-gray-700 placeholder:text-zinc-400 text-zinc-200" ref={email}/>

                <input type="password" placeholder="Password" className="mb-5 px-5 py-3 w-80  bg-gray-700 placeholder:text-zinc-400 text-zinc-200 " ref={password} />

                <p className="mb-5 text-red-500 font-bold">{errorMsg}</p>
                <button className="mb-5 py-2 w-80 bg-red-700 font-bold text-zinc-200 text-xl cursor-pointer" type = "button" onClick={() => handleValidation(email, password , name , signUp)}>{signUp ? 'Sign Up' : 'Sign In'}</button>

                {(signUp) ? <p className="mt-5 text-white">Already have an account?  <span className = "cursor-pointer font-bold hover:text-blue-500 hover:underline"onClick={handleForm}>Sign In now</span> 
                </p> : <p className="mt-5 text-white">New to Netflix?  <span className = "cursor-pointer font-bold hover:text-blue-500 hover:underline" onClick={handleForm}>Sign Up now</span> </p>}

            </form>
            </div>
        </div>
    );
};

export default Login;
