
import { NavLink } from "react-router";
import MobileMenu from "./MobileMenu";
const Header = ()=>{

    return(
        <header className="bg-blue-200 shadow-md sticky top-0">
            <div className="flex items-center justify-between max-full max-w-[1200px] py-4  mx-auto  md:px-4">
            <NavLink to="/"> <div id="logo" className="text-3xl text-red-700 text-shadow-gray-900 cursor-pointer font-bold">Note-book</div></NavLink>
            <nav className="md:block hidden">
                <ul className="flex text-xl cursor-pointer space-x-4">
                    <li className="  hover:underline">
                       <NavLink to="/" className={({isActive})=>{return isActive?'underline':''}}>Home</NavLink>
                    </li>
                    <li className=" hover:underline">
                         <NavLink to="/about" className={({isActive})=>{return isActive?'underline':''}}>About</NavLink>
                    </li>
                    <li className=" hover:underline">
                         <NavLink to="/contact" className={({isActive})=>{ return isActive?'underline':''}}>Contact</NavLink>
                    </li>
                    <li className=" hover:underline">
                        <NavLink to="/login" className={({isActive})=>{ return isActive?'underline':''}}>Login</NavLink> 
                    </li>
                </ul>
            </nav>
             <MobileMenu/>
            </div>
        </header>
    )
}

export default Header;