import React, { useEffect, useState } from 'react';
import AddSocialLinks from '../AddLinks/Social/AddSocialLinks';
import AddOwnLinks from '../AddLinks/OwnLinks/AddOwnLinks';
import MySocialLinks from '../AddedLinks/MySocialLinks';
import MyOwnLinks from '../AddedLinks/MyOwnLinks';
import Spinner from '../../Shared/Spinner';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Spinner />;
    }
    return (
        <div className='h-[85vh] overflow-y-auto'>
            <div className='w-full md:flex md:items-start md:justify-between'>
                <div className='md:w-[49%] h-72 bg-white rounded-[7px] shadow-md border border-white hover:border-orange-200 duration-500 p-3 overflow-auto'>
                    <AddSocialLinks/>
                </div>
                <div className='md:w-[49%] h-72 bg-white rounded-[7px] shadow-md border border-white hover:border-orange-200 duration-500 py-3 px-6 overflow-auto mt-6 md:mt-0'>
                    <MySocialLinks/>
                </div>
            </div>
            <div className='w-full md:flex md:items-center md:justify-between my-6'>
            <div className='md:w-[49%] h-72 bg-white rounded-[7px] shadow-md border border-white hover:border-orange-200 duration-500 py-3 px-6 overflow-auto'>
                    <AddOwnLinks/>
                </div>
                <div className='md:w-[49%] h-72 bg-white rounded-[7px] shadow-md border border-white hover:border-orange-200 duration-500 py-3 px-6 overflow-auto mt-6 md:mt-0'>
                    <MyOwnLinks/>
                </div>
            </div>
        </div>
    );
};

export default Home;