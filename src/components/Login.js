import Header from "./Header"
import {useState, useRef} from "react"
import {checkValidData } from "../utils/validate"
import {auth} from "../utils/firebase"
import {useDispatch} from "react-redux"
import {addUser} from "../utils/userSlice"
import { USER_AVATAR} from "../utils/constants"

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
const Login = () =>{
   const dispatch = useDispatch()
    const [isSignInForm , setIsSignInForm] = useState(true)
   const [errorMessage , setErrorMessage] = useState(null)
    const toggleSignInForm = () =>{
       setIsSignInForm(!isSignInForm)
    }
    const name  = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const handleButtonClick = () =>{
          const message = checkValidData(email.current.value,  password.current.value)
          
          setErrorMessage(message)
          if(message) return;
         
           if(!isSignInForm){
          
createUserWithEmailAndPassword(auth, email.current.value,  password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: USER_AVATAR
    }).then(() => {
      const {uid , email , displayName , photoURL} = auth.currentUser
       dispatch(addUser({uid : uid , email : email , displayName : displayName , photoURL : photoURL}))

    }).catch((error) => {
      // An error occurred
      // ...
    });

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });
           }   

            else{
              signInWithEmailAndPassword(auth, email.current.value,  password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });
            }

    }
    return(        
        <div>
            <Header/>
            <div className = "absolute">
            <img src  = "https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt = "banner"/>
            </div>
             <form onSubmit = {(e) => e.preventDefault()} className = "bg-black text-white p-12 absolute w-3/12 my-28 m-auto left-0 right-0 bg-opacity-80 rounded-md">
               <h1 className = "text-white font-bold my-6 text-3xl">{isSignInForm ? "Sign In" : "Sign Up" }</h1>
                {!isSignInForm && <input ref = {name} type = "text" placeholder = "Full Name" className = "rounded-md w-full p-2 my-4 bg-gray-500 bg-opacity-80"/>}
                {!isSignInForm && <input type = "text" placeholder = "Contact Number" className = "rounded-md w-full p-2 my-4 bg-gray-500 bg-opacity-80"/>}
                <input ref = {email} type = "email" placeholder = "Email Address" className = "rounded-md w-full p-2 my-4 bg-gray-500 bg-opacity-80"/>
                <input ref = {password} type = "password" placeholder = "Password" className = "rounded-md w-full p-2 my-4 bg-gray-500 bg-opacity-80"/>
               <p className = "p-2 text-red-700 font-bold text-lg">{errorMessage}</p>
                <button  className  = "bg-red-700 p-2 my-6 w-full text-white rounded-md" onClick = {handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up" }</button>
              <p className = "text-white p-2 my-2"> {isSignInForm ?  "New to Netflix?" : "Already Registered?" }  <span className = "font-bold hover:underline cursor-pointer" onClick = {toggleSignInForm}>{isSignInForm ?  "Sign up now." : "Sign in now."}</span></p>
            
             </form>
        </div>
    )
}
export default Login