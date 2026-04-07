import React from 'react';
import { Link, useLoaderData } from 'react-router';

const User = () => {

    const users = useLoaderData();
    
    return (
        <div className='grid grid-cols-3 gap-4 p-5'>
            {
                users.map((user, index) => <div key={index} className="card border-2 border-amber-100">
                    <div className="card-body items-center text-center">
                        <h2 className="text-white">{user.name}</h2>
                        <p>{user.email}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to={`/user/${user.id}`}>Show Details</Link></button>
                            <button className="btn btn-ghost">Remove</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default User;