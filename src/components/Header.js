import { signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase"
import {useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from "react"
import {addUser, removeUser} from "../utils/userSlice"
import {LOGO} from "../utils/constants"

const Header = () =>{
    const dispatch = useDispatch()
        const user = useSelector(store => store.user)
    const navigate = useNavigate()
    const handleSignOut = () =>{
        signOut(auth).then(() => {
            alert("Do you want to signOut")
        
          }).catch((error) => {
            // An error happened.
          });
    }


    useEffect(()=> {
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid , email , displayName, photoURL} = user;
           dispatch(addUser({uid:uid , email : email , displayName : displayName, photoURL : photoURL}));
           navigate("/browser")
          } else {
            dispatch(removeUser())
            navigate("/")
          }
        });
        return () => unsubscribe
       }, [])


    return(
        <div className = "w-full absolute bg-gradient-to-b from-black z-10 flex justify-between items-center">
        <div className = "px-8 py-2 ">
           <img src  = {LOGO}
            alt = "logo" className = "w-56"/>

        </div>
        {user && <div className = "px-8 py-2 flex">
        <img className = "w-12 rounded-full" alt = "userImage" src = {user.photoURL}/>
            <button onClick = {handleSignOut} className = "font-bold text-2xl text-white ml-2">SignOut</button>
        </div>}
        </div>
    )
}
export default Header


