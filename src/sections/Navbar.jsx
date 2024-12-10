import { useState } from "react";
import menuI from '../assets/menu.svg';
import closeI from '../assets/close.svg';

const NavItems= () => {
    return (
        <ul className="">
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
               <div className="w-6 h-6" onClick={toggleMenu}>
                 <img src={!isOpen ? menuI : closeI} alt="" className="w-6 h-6"/>
               </div>
               </div>   
            </div>
        </header>
    )
}

export default Navbar;