
import { NavLink } from "react-router";
import MobileMenu from "./MobileMenu";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import UserPanel from "./Userpanel";
const Header = ()=>{
const userAuth = useContext(AuthContext);

const {user} = userAuth
    return(
        <header className="bg-background shadow-md sticky top-0 z-10">
            <div className="flex items-center justify-between max-full max-w-[1200px] py-4  mx-auto  md:px-4">
            <NavLink to="/"> <div id="logo" className="text-3xl text-primary text-shadow-gray-900 cursor-pointer font-bold">Note-book</div></NavLink>
            <nav className="md:block hidden">
                <ul className="flex items-center text-xl text-text cursor-pointer space-x-4">
                    <li className="  hover:underline">
                       <NavLink to="/" className={({isActive})=>{return isActive?'underline':''}}>Home</NavLink>
                    </li>
                    <li className=" hover:underline">
                         <NavLink to="/about" className={({isActive})=>{return isActive?'underline':''}}>About</NavLink>
                    </li>
                    <li className=" hover:underline">
                         <NavLink to="/contact" className={({isActive})=>{ return isActive?'underline':''}}>Contact</NavLink>
                    </li>
                { !user?(
                    <li className=" hover:underline">
                        <NavLink to="/login" className={({isActive})=>{ return isActive?'underline':''}}>Login</NavLink> 
                    </li>):

                   (
                    <li>
                        <UserPanel/>
                    </li>
                   )
}
                </ul>
            </nav>
             <MobileMenu/>
            </div>
        </header>
    )
}

export default Header;