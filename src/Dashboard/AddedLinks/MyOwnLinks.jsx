import React from 'react';
import { FaLink } from 'react-icons/fa';

const MyOwnLinks = () => {
    return (
        <div>
        <h2 className='text-xl font-semibold text-center'>My Own links</h2>
            <ol className='list'>
                <li className='flex items-center gap-2 link-hover cursor-pointer'><FaLink/> www.facebook.com/kt</li>
                <li className='flex items-center gap-2 link-hover cursor-pointer'><FaLink/>www.facebook.com/kt</li>
                <li className='flex items-center gap-2 link-hover cursor-pointer'><FaLink/>www.facebook.com/kt</li>
                <li className='flex items-center gap-2 link-hover cursor-pointer'><FaLink/>www.facebook.com/kt</li>
            </ol>
        </div>
    );
};

export default MyOwnLinks;