import React from "react";
import '../Styles/Header.css';


const Header = () => {

    return (
        <div className='flex flex-row items-center justify-evenly py-5 m-5 font-mono rounded-full bg-black/20 text-2xl text-white font-bold xyzabc'>
            <h3 className="xyzabc-half-border">
                Auto Email Template Generator
            </h3>
            <button className="" type="button">
                Log In
            </button>
        </div>
    )
}

export default Header;