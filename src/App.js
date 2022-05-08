import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import ResignationEmail from './EmailOutputPages/ResignationEmail';
import Home from './Pages/Home';


function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/:id' element={<ResignationEmail />} />
            </Routes>
        </>
    );
}

export default App;
