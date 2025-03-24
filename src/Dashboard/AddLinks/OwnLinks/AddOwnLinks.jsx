import React, { useState } from 'react';
import OwnLinkModal from './OwnLinkModal';
import { FaPlusCircle } from 'react-icons/fa';

const AddOwnLinks = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='w-full'>
            <h2 className='text-xl font-semibold text-center'>Add own links</h2>
            <div className='flex justify-center mt-4'>
                <button 
                    onClick={() => setOpen(true)} 
                    className='flex items-center gap-2 border border-orange-500 text-orange-500 rounded-[7px] px-3 py-2'
                >
                    <FaPlusCircle className='text-orange-500 text-xl'/>
                    Click to add
                </button>
            </div>
            {open && <OwnLinkModal setOpen={setOpen} />}
        </div>
    );
};

export default AddOwnLinks;
