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
            <div className='flex items-start justify-between'>
                <div className='w-[49%] h-72 bg-white rounded-[7px] shadow-md border border-white hover:border-orange-200 duration-500 p-3'>
                    <AddSocialLinks/>
                </div>
                <div className='w-[49%] h-72 bg-white rounded-[7px] shadow-md border border-white hover:border-orange-200 duration-500 p-3'>
                    <AddOwnLinks/>
                </div>
            </div>
            <div className='w-full flex items-center justify-between my-6'>
                <div className='w-[49%] h-72 bg-white rounded-[7px] shadow-md border border-white hover:border-orange-200 duration-500 p-3'>
                    <MySocialLinks/>
                </div>
                <div className='w-[49%] h-72 bg-white rounded-[7px] shadow-md border border-white hover:border-orange-200 duration-500 p-3'>
                    <MyOwnLinks/>
                </div>
            </div>
        </div>
    );
};

export default Home;