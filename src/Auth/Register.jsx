import React from 'react';

const Register = () => {
    return (
        <div className='h-[80vh] w-[30vw] bg-white rounded-md border hover:border-blue-200 mx-auto px-4'>
        <h2 className='mt-10 font-bold text-4xl text-center'>Sign Up</h2>
            <form action="" className='mt-12'>
            <div className='pb-5'>
                <label htmlFor="">Enter Your Mail</label>
                <br />
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Username"/>
            </div>
            <div className='pb-5'>
                <label htmlFor="">Select Your Profile</label>
                <br />
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="profile" type="file" placeholder="Username"/>
            </div>
            <div className='pb-5'>
                <label htmlFor="">Enter Your Password</label>
                <br />
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Username"/>
            </div>
            </form>
        </div>
    );
};

export default Register;