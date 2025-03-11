import React from 'react';
import { FaLink } from 'react-icons/fa';

const MySocialLinks = () => {
    return (
        <div>
        <h2 className='text-xl font-semibold text-center'>My Social Links</h2>
            <ol>
                <li className='flex items-center gap-2 link-hover cursor-pointer'><FaLink/> www.facebook.com/kt</li>
                <li className='flex items-center gap-2 link-hover cursor-pointer'><FaLink/>www.facebook.com/kt</li>
                <li className='flex items-center gap-2 link-hover cursor-pointer'><FaLink/>www.facebook.com/kt</li>
                <li className='flex items-center gap-2 link-hover cursor-pointer'><FaLink/>www.facebook.com/kt</li>
            </ol>
        </div>
    );
};

export default MySocialLinks;