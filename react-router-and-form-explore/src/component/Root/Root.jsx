import React from 'react';
import { Outlet } from 'react-router';
import Home from '../home/Home';
import Blog from '../Blog/Blog';
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Blog/>
        </div>
    );
};

export default Root;