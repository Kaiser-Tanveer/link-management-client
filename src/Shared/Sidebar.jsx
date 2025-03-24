import React from 'react';
import { FaLink } from 'react-icons/fa6';
import { MdDashboard } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className=''>
            <aside className='mx-4 my-5'>
                <Link to={"/dashboard"} className='text-left flex items-center h-10 hover:bg-orange-100 px-4 rounded-[7px] duration-500 text-orange-500'>
                <MdDashboard className='mr-2 text-md'/>
                <span>Dashboard</span>
                </Link>
                <Link className='text-left flex items-center h-10 hover:bg-orange-100 px-4 rounded-[7px] duration-500 text-orange-500'>
                    <FaLink className='mr-2 text-md'/>
                    <span>My Links</span>
                </Link>
            </aside>
        </div>
    );
};

export default Sidebar;