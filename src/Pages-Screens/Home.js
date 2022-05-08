import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";


const Home = () => {

    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <>
            <Particles options={particlesOptions} init={particlesInit} />
            <h1 className="text-3xl text-white font-bold underline">
                Home Page!
            </h1>
        </>
    )
}

export default Home;