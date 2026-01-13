import {NAVIGATION} from "@/constants/index";
import NavItem from "@/pages/Index/components/NavItem";
import Login from "@/pages/Login/Login";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarDesktop from "./NavbarDesktop";
import { useScroll } from "@/hooks/useScroll";

const Navbar = () => {
    const {isScrolled, scrollDirection} = useScroll(10);
    //
    const shouldShow = scrollDirection !== 'down' || !isScrolled

    
    return (
        <nav className={`   fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !shouldShow ? '-translate-y-full' : 'translate-y-0'
      } ${
        isScrolled
          ? 'bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}>
            <div className={`container mx-auto px-4 flex justify-between items-center`}>
                {/* Logo */}
                <div className={`flex items-center`}>
                    <h1 className={`text-2xl font-bold text-white`}>
                        Crypto
                        <span className={`text-crypto-dark-purple`}>
                            Flow
                        </span>
                    </h1>
                </div>
                <NavbarDesktop/>
                
            </div>
        </nav>
    )
}

export default Navbar