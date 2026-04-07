import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
    const navigation=useNavigation();
    const isNavigation=Boolean(navigation.location);

    return (
        <div>
            <Navbar />
            <div>
                {
                    isNavigation && <span className="loading loading-bars loading-xl flex justify-center items-center mt-5 mx-auto"></span>
                }

                <Outlet />
            </div>
            <Footer/>
        </div>
    );
};

export default Root;