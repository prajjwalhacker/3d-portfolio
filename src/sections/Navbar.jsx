import { useState } from "react";
import menuI from '../assets/menu.svg';
import closeI from '../assets/close.svg';
import { navLinks } from "../constant";

const NavItems= () => {
    return (
        <ul className="nav-ul">
            {navLinks.map((item) => {
                return (
                    <li key={item.id} className="nav-li">
                        <a href={item.href} className="nav-li_a" onClick={() => {

                        }}>
                        {item.name}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

const Navbar = () => {

    
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl m-auto">
               <div className="flex justify-between items-center py-5 mx-auto c-space">
               <a href='/' className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                  Prajjwal
               </a>
               <nav className="sm:flex hidden"> 
               <NavItems/>
               </nav>
               <div className="w-6 h-6 sm:hidden" onClick={toggleMenu}>
                 <img src={!isOpen ? menuI : closeI} alt="" className="w-6 h-6"/>
               </div>
               </div>   
            </div>
            <div className={`sm:hidden  nav-sidebars overflow-y-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
               <nav className="p-5">
                   <NavItems/>
               </nav>
            </div>
        </header>
    )
}

export default Navbar;