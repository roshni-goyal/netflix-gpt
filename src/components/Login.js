 import React, { useRef, useState } from "react";
 import Header from './Header'
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
 
 const Login = () => {


const [isSignIn, setIsSignIn] = useState(true);
const [errorMessage, setErrorMessage] = useState(null);

const email = useRef(null);
const password = useRef(null);
const fullName = useRef(null);

const handleButtonClick = () => {
    //validate the form data
   const message = checkValidateData(email.current.value, password.current.value);
   setErrorMessage(message);
    if(message) return; //if message is present that means an error occurred and if error is there than return.
   
    if(!isSignIn){
        //signup logic
        createUserWithEmailAndPassword(
            auth, 
            email.current.value, 
            password.current.value)
            .then((userCredential) => {
    // Signed up 
         const user = userCredential.user;
         console.log(user);
    // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
         });

    }else{
        console.log(email.current.value);
        console.log(password.current.value);
        signInWithEmailAndPassword(
            auth, 
            email.current.value, 
            password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
         if(errorMessage) setErrorMessage("Invalid User Id/password");
        });
      

    }



}
const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
}

    return (
        <div>
            <Header/>
            <div className = "absolute">
            <img 
            src = "https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/52e4cd00-9a33-4f8b-afa0-6623070f7654/US-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_6392408d-671b-40c8-83c8-888c04ea535d_large.jpg"
            alt="logo"
      />
            </div>
            <form onSubmit = {(e) => e.preventDefault()}
                className="w-3/12 absolute p-12 my-40 mx-auto right-0 left-0  bg-black  text-white rounded-md bg-opacity-75">
                <h1 className="font-bold text-3xl py-4">
                    {isSignIn ? "Sign In" : "Sign Up"}</h1>
                    {!isSignIn && (
                          <input
                          ref= {fullName}
                          type = "text" 
                          placeholder="Full Name" 
                          className="p-4 my-4 w-full  bg-gray-950 border border-slate-300 rounded-sm">
                          </input>
                    )}
                   
                <input
                    ref= {email}
                    type = "text" 
                    placeholder="Email or mobile number" 
                    className="p-4 my-4 w-full bg-gray-950 border border-slate-300 rounded-sm">
                    </input>
                <input 
                    ref= {password}
                    type = "password"
                    placeholder="Password" 
                    className="p-4 my-4 w-full  bg-gray-950 border border-slate-300 rounded-sm">
                    </input>
                <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
               
                <button className="p-4 my-6 bg-red-600 w-full rounded-lg" onClick={handleButtonClick}>
                {isSignIn ? "Sign In" : "Sign Up"}
                </button>
                {isSignIn ? 
                <p className="py-4 cursor-pointer"> New To Netflix? 
                <span className="font-bold cursor-pointer" onClick={toggleSignInForm}>Sign Up Now.</span></p> : 
                
                <p className="py-4 cursor-pointer"> Already a User ?
                <span className="font-bold cursor-pointer" onClick={toggleSignInForm}> Sign In Now.</span></p>}
                
            </form>
            
        </div>
    )
 };

 export default Login