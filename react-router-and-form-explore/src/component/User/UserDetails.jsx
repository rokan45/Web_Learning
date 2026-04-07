import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const userData=useLoaderData();
    // console.log(userData);
    const {name,username,address,email,phone,website}=userData
    const navigate=useNavigate()

    const handleNavigate=()=>{
        navigate('/users')
    }

    return (
        <div className='p-10'>
            <div className=" items-center text-center border border-amber-500 p-10">
                <h2 className="text-white">{name}</h2>
                <h1>{username}</h1>
                <p>{email}</p>
                <div className='flex justify-center items-center gap-5 mt-3'>
                    <h2>Contact: </h2>
                    <span className='bg-gray-300'>{phone}</span>
                    <span>{website}</span>
                </div>
                <div className='flex justify-center items-center gap-4'><h3 className='text-sm'>Address:</h3>
                    <h3>{address.city}</h3>
                    <h3>{address.street}</h3>
                </div>
                <div className=" flex justify-center items-center gap-5 mt-5 mr-5">
                    <button className="btn btn-primary">Accept</button>
                    <button onClick={handleNavigate} className="btn">Back</button>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;