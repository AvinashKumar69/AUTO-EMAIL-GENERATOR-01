import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';


function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
