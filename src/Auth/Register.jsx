import React from 'react';

const Register = () => {
    return (
        <div className='pt-[8vh]'>
            <div className='h-[80vh] w-80 bg-white rounded-md border border-orange-200 mx-auto px-4'>
        <h2 className='mt-10 font-bold text-4xl text-orange-500 text-center'>Sign Up</h2>
            <form action="" className='w-[80%] mt-12 flex flex-col mx-auto'>
            <div className='pb-5'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="">Enter Your Mail</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Username"/>
            </div>
            <div className='pb-5'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="">Select Your Profile</label>
                <input class="shadow appearance-none border rounded w-full pb-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="profile" type="file" placeholder="Username"/>
            </div>
            <div className='pb-5'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="">Enter Your Password</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
            </div>
            <div>
                <input type="submit" className='m-6 bg-orange-500 w-full text-white font-semibold h-10 rounded-[7px] mx-auto' />
            </div>
            </form>
        </div>
        </div>
    );
};

export default Register;