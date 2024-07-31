import React from 'react';
import Sidebar from '../Shared/Sidebar';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

const DashboardLayout = () => {
    return (
        <div className=''>
            <Header/>
            <main className='flex items-center h-[90vh]'>
            <div className='w-[15%] bg-white h-full border-r border-orange-200'>
                <Sidebar/>
            </div>
            <div className='w-[85%] bg-slate-100 h-full p-4'>
                <Outlet/>
            </div>
            </main>
            <Footer/>
        </div>
    );
};

export default DashboardLayout;