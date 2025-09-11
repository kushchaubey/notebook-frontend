import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

const UserPanel = ()=>{
  
   const [showPanel, setShowpanel] = useState(false);
   const useAuth  = useContext(AuthContext);

   const {user, logout} = useAuth;

   const navigate = useNavigate();
   function logoutHandler(){
    logout();
    navigate('/login');
   }
    return(
       <div className="relative">
            <div className="border-2 px-4 py-2 rounded-[50%] max-w-[50px] " onClick={()=>{
                setShowpanel(!showPanel);
            }}><h1>{user.charAt(0).toUpperCase()}</h1></div>
            
                <ul className={`bg-background rounded-2xl text-text text-center border-2  absolute p-4  left-[-105px]  min-w-[160px] transition-opacity duration-200  ${showPanel?"opacity-100":"opacity-0 pointer-events-none"}` }>
                    <li>Hi {user}</li>
                    <li onClick={logoutHandler}>Logout</li>
                </ul>
           
       </div>
    )
}

export default UserPanel;