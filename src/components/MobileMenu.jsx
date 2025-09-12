import { useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router";
export default function MobileMenu() {

  const [open, setOpen] = useState(false);

  const useAuth = useContext(AuthContext);

  const {user, logout} = useAuth;
   const navigate = useNavigate();
   function logoutHandler(){
    logout();
    navigate('/login');
   }
  return (
    <nav className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-[64px] h-[64px] bg-text rounded-2xl flex flex-col justify-center items-center space-y-2"
      >
        <span className={`block w-8 h-1 bg-background rounded transition-transform duration-300 ${
            open ? "rotate-45 translate-y-3" : ""
          }`}></span>
        <span className={`block w-8 h-1 bg-background rounded transition-opacity duration-300  ${
            open ? "opacity-0" : "opacity-100"
          }`}></span>
        <span className={`block w-8 h-1 bg-background rounded transition-transform duration-300 ${
            open ? "-rotate-45 -translate-y-3" : ""
          }`}></span>
      </button>

      {/* Menu links */}
      
        <div className={`w-[200px] h-[100vh] fixed top-0 left-0 bg-background px-6 transform transition-transform duration-300 ease-in ${open?"translate-x-0" : "-translate-x-full"}`}>
        <ul className="flex flex-col text-xl cursor-pointer space-y-4 mt-4 text-text">
          {user && (<li>  Hi,{user}</li> )}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline" : "hover:underline"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "underline" : "hover:underline"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "underline" : "hover:underline"
              }
            >
              Contact
            </NavLink>
          </li>
           { !user?(
            <>
                    <li className=" hover:underline">
                        <NavLink to="/login" className={({isActive})=>{ return isActive?'underline':''}}>Login</NavLink> 
                    </li>
                    
                    <li className=" hover:underline">
                        <NavLink to="/signup" className={({isActive})=>{ return isActive?'underline':''}}>Signup</NavLink> 
                    </li>
                 </> 
                  ):

                   (
                    <li onClick={logoutHandler}>
                       logout
                    </li>
                   )
                  }
        </ul>
     </div>
      
    </nav>
  );
}