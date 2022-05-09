import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import UserInputForm from '../UserInputForms/ResignationForm';
import particlesOptions from "../particles.json";
import img1 from '../Assets/undraw_data_input.svg';


const Home = () => {

    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <>
            {/* <Particles options={particlesOptions} init={particlesInit} /> */}
            <div className='flex flex-row items-center justify-between m-5 sm:flex-col sm:space-y-6 xs:flex-col xs:space-y-6'>
                <UserInputForm />
                <img className='' src={img1} />
            </div>
        </>
    )
}

export default Home;