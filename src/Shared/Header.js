import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import { HiUserCircle } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Header = () => {
    const [profile, setProfile] = useState(false);
    return (
        <>
        <div onClick={() => profile && setProfile(false)} className='hidden md:block bg-orange-500 py-1 text-white px-2'>
            <Link className='items-center justify-end'><HiUserCircle onClick={() => setProfile(!profile)} className='text-4xl mr-2'/></Link>
        </div>
        {
            profile &&
            <div className='absolute right-4 w-32 border border-orange-200 shadow-md p-2 rounded-[7px] flex flex-col items-start justify-start bg-white z-[100]'>
            <Link className='flex items-center justify-start h-10 hover:bg-orange-200 w-full px-2 rounded-[7px]'><FaUserAlt className='text-xl mr-2 rounded-full border p-[2px]'/> <span>Profile</span></Link>
            <Link className='flex items-center justify-start h-10 hover:bg-orange-200 w-full px-2 rounded-[7px]'><HiOutlineLogout className='text-xl mr-2'/> <span>Logout</span></Link>
            </div>
        }
        </>
    );
};

export default Header;