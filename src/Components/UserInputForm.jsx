import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const UserInputForm = () => {


    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [managerName, setManagerName] = useState('')
    const [designation, setDesignation] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [resignationDate, setResignationDate] = useState()
    const [nonWorkEmail, setNonWorkEmail] = useState('')


    const submitHandler = () => {

        // const inputForm = (!name || !managerName || !designation || !companyName || !resignationDate || !nonWorkEmail)
        // alert('Please Fill All the Details!')

        if (name && managerName && designation && companyName && resignationDate && nonWorkEmail) {
            let formId = 1
            navigate(`/${formId}`, { state: { name, managerName, designation, companyName, resignationDate, nonWorkEmail } })
        }
    }


    return (
        <form className='mx-20 xs:mx-2'>
            <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-black">Your Full Name</label>
                <input type="text" id="your-name" aria-describedby="helper-text-explanation" className="bg-gray-50 border-2 text-black text-sm rounded-lg block w-full p-2.5 required" placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-black">Your Reporting Manager's Name</label>
                <input type="text" id="reporting-manager-name" aria-describedby="helper-text-explanation" className="bg-gray-50 border-2 text-black text-sm rounded-lg block w-full p-2.5" placeholder="Your Reporting's Manager Full Name"
                    value={managerName}
                    onChange={(e) => setManagerName(e.target.value)}
                />
            </div>

            <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-black">Current Designation</label>
                <input type="text" id="current-designation" aria-describedby="helper-text-explanation" className="bg-gray-50 border-2 text-black text-sm rounded-lg block w-full p-2.5" placeholder="Your Current Designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                />
            </div>

            <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-black">Current Company</label>
                <input type="text" id="current-company" aria-describedby="helper-text-explanation" className="bg-gray-50 border-2 text-black text-sm rounded-lg block w-full p-2.5" placeholder="Your Current Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                />
            </div>

            <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="date" className="block mb-2 text-sm font-medium text-black">Resignation Date</label>
                <input type="date" id="resignation-date" aria-describedby="helper-text-explanation" className="bg-gray-50 border-2 text-black text-sm rounded-lg block w-full p-2.5" placeholder="Date of Resignation"
                    value={resignationDate}
                    onChange={(e) => setResignationDate(e.target.value)}
                />
            </div>

            <div className="relative z-0 w-full mb-6 group">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Personal Email</label>
                <input type="email" id="personal-email" aria-describedby="helper-text-explanation" className="bg-gray-50 border-2 text-black text-sm rounded-lg block w-full p-2.5" placeholder="Personal Email to mention to Stay in Touch in Furture"
                    value={nonWorkEmail}
                    onChange={(e) => setNonWorkEmail(e.target.value)}
                />
            </div>

            <button type="submit" className="text-white bg-blue-700 font-medium rounded-lg w-auto px-5 py-2.5 text-center"
                onClick={submitHandler}
            >
                Generate Sample Email
            </button>
        </form>
    )
}

export default UserInputForm;