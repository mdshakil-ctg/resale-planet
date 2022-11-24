import { useEffect, useState } from "react"

const UseToken = email =>{
  console.log(email)
   const [token, setToken] = useState('');
   useEffect(()=>{
      fetch(`http://localhost:5000/jwt?email=${email}`)
    .then(res=> res.json())
    .then(data => {
      console.log(data)
      if(data.accessToken){
        localStorage.setItem('token', data.accessToken)
       setToken(data.accessToken)
      }
    })
    .catch(err=>console.log(err)) 
   },[email])
   return [token]
}

export default UseToken;