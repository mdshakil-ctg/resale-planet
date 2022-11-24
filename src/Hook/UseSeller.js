import { useEffect, useState } from "react"

const useSeller = email =>{
   const [isSeller, setIsSeller] = useState(false)
   const [isLoading, setIsloading] = useState(true);
   useEffect(()=>{
      if(email){
         fetch(`http://localhost:5000/users/${email}`)
         .then(res => res.json())
         .then(data =>{
            setIsSeller(data.isSeller)
            setIsloading(false)
         })
      }
   },[email])
   return [isSeller, isLoading]
}
export default useSeller;