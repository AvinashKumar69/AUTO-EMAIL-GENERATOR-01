import React from 'react';
import Moment from 'react-moment';
import { useLocation } from 'react-router-dom';

const ResignationEmail = () => {

    const { state } = useLocation()
    console.log('state-->', state);
    const { name, managerName, designation, companyName, resignationDate, nonWorkEmail } = state

    return (
        <div className='flex flex-col border-2 border-indigo-200 shadow-lg text-black m-5 p-5 rounded-lg'>
            <h1 className='text-xl font-semibold'>
                <span className='font-bold'>Email Subject Line:</span> Notice of Resignation | {name}
            </h1>
            <br /><br />

            <p className='text-xl font-medium'>
                Dear {managerName},
                <br /><br />
                Please accept this message as formal notice that I am resigning from the position of <span className='italic font-bold'>{designation}</span> with the <span className='italic font-bold'>{companyName}</span> company <span className='font-bold'>effecctive from <Moment format='YYYY/MM/DD'>{resignationDate}</Moment></span>.
                <br /><br />
                Thank you so much for the opportunity to work in this position. I've greatly enjoyed and appreciated the opportunities & experience I've gained during my tenure in the company, which will certainly help me throughout my career.
                <br /><br />
                I'll do everything possible to wrap up my duties. Please let me know if there's anything else I can do to help during this transition.
                <br /><br />
                I wish you and the company the very best going forward. If you need anything please don't hesitate to reach me at <span className='font-bold'>{nonWorkEmail}</span>.
                <br /><br />
            </p>

            <h1 className='text-xl font-medium'>
                Best Regards,
                <br />
                <span className='font-bold'>{name}</span>
            </h1>
        </div>
    )
}

export default ResignationEmail;