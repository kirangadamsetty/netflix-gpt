import Header from "./Header"
import {useState} from "react"
const Login = () =>{

    const [isSignInForm , setIsSignInForm] = useState(true)

    const toggleSignInForm = () =>{
       setIsSignInForm(!isSignInForm)
    }

    return(
        
        <div>
            <Header/>
            <div class = "absolute">
            <img src  = "https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt = "banner"/>
            </div>
             <form class = "bg-black p-12 absolute w-3/12 my-28 m-auto left-0 right-0 bg-opacity-80 rounded-md">
               <h1 className = "text-white font-bold my-6 text-3xl">{isSignInForm ? "Sign In" : "Sign Up" }</h1>
                {!isSignInForm && <input type = "text" placeholder = "Full Name" className = "rounded-md w-full p-2 my-4 bg-gray-500 bg-opacity-80"/>}
                {!isSignInForm && <input type = "text" placeholder = "Contact Number" className = "rounded-md w-full p-2 my-4 bg-gray-500 bg-opacity-80"/>}
                <input type = "email" placeholder = "Email Address" className = "rounded-md w-full p-2 my-4 bg-gray-500 bg-opacity-80"/>
                <input type = "password" placeholder = "Password" className = "rounded-md w-full p-2 my-4 bg-gray-500 bg-opacity-80"/>
                <button className  = "bg-red-700 p-2 my-6 w-full text-white rounded-md">{isSignInForm ? "Sign In" : "Sign Up" }</button>
              <p className = "text-white p-2 my-2"> {isSignInForm ?  "New to Netflix?" : "Already Registered?" }  <span className = "font-bold hover:underline cursor-pointer" onClick = {toggleSignInForm}>{isSignInForm ?  "Sign up now." : "Sign in now."}</span></p>
            
             </form>


        </div>
    )
}
export default Login