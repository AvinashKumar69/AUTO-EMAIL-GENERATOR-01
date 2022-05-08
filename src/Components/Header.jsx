import React from "react";
import '../Styles/Header.css';


const Header = () => {

    return (
        <div className='flex flex-row items-center justify-evenly py-5 m-5 font-mono rounded-full bg-white text-2xl text-black font-bold'>
            <h3 className="xyzabc-half-border sm:text-xl xs:text-sm">
                Email Template Generator
            </h3>
            <button className="xyzabc-half-border text-2xl sm:text-xl xs:text-sm text-black font-bold" type="button">
                Log In
            </button>
        </div>
    )
}

export default Header;