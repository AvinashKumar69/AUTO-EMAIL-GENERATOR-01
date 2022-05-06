import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <>
            <Particles options={particlesOptions} init={particlesInit} />
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </>
    );
}

export default App;
