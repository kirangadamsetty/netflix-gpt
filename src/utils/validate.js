export const checkValidData = (email ,  password) =>{
    const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
   const  emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)

  
  if (!emailValid ) return "Email is not valid"
  if (!passwordValid ) return "Password is not valid"
   return null
}

