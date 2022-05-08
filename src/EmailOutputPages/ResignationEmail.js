import React from 'react';
import { useLocation } from 'react-router-dom';

const ResignationEmail = () => {

    const { state } = useLocation()
    console.log('state logged-->', state);

    return (
        <div>ResignationEmail</div>
    )
}

export default ResignationEmail;