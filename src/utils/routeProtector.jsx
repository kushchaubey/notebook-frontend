
import { useNavigate } from "react-router";
import { useContext, useEffect } from "react"
import { AuthContext  } from "../context/AuthContext"

const RouteProtector = ({children,isloginPage})=>{
const navigate = useNavigate();
const userAuth = useContext(AuthContext);
const {user} = userAuth;

useEffect(()=>{
    if(user && isloginPage){
       console.log(user);
            navigate("/");
           
     }
     if(!user && !isloginPage){
       navigate("/login")
     }
},[user,isloginPage, navigate])
     
return <>{children}</>
}

export default RouteProtector;