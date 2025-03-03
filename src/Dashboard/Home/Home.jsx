import React from 'react';
import AddSocialLinks from '../AddLinks/Social/AddSocialLinks';
import AddOwnLinks from '../AddLinks/OwnLinks/AddOwnLinks';
import MySocialLinks from '../AddedLinks/MySocialLinks';

const Home = () => {
    return (
        <div className=''>
            <div className='flex items-start justify-between'>
            <div className='w-[49%] h-72 bg-white rounded-[7px] shadow-sm border border-white hover:border-orange-200 duration-500 p-3'>
                <AddSocialLinks/>
            </div>
            <div className='w-[49%] h-72 bg-white rounded-[7px] shadow-sm border border-white hover:border-orange-200 duration-500 p-3'>
                <AddOwnLinks/>
            </div>
            </div>
            <div className='w-full flex items-center justify-between my-6'>
            <div className='w-[49%] bg-white rounded-[7px] shadow-sm border border-white hover:border-orange-200 duration-500 p-3'>
                <MySocialLinks/>
                <div></div>
            </div>
            <div className='w-[49%] bg-white rounded-[7px] shadow-sm border border-white hover:border-orange-200 duration-500 p-3'>
                <MySocialLinks/>
            </div>
            </div>
        </div>
    );
};

export default Home;