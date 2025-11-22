import React from "react";
import logo from '../../../assets/logo.png'
import { Link } from "react-router";

const TechPortalLogo = () => {
    return (
        <Link to='/'>
            <div className="flex items-center">
                <img className="w-10 h-auto mb-2" src={logo} alt="" />
                <p className="text-2xl ml-2 font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">TechEvoPortal</p>
            </div>
        </Link>
    );
};

export default TechPortalLogo;