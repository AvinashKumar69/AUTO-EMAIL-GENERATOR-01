import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import UserInputForm from '../Components/UserInputForm';
import particlesOptions from "../particles.json";


const Home = () => {

    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <>
            {/* <Particles options={particlesOptions} init={particlesInit} /> */}
            <div className=''>
                <UserInputForm />
            </div>
        </>
    )
}

export default Home;