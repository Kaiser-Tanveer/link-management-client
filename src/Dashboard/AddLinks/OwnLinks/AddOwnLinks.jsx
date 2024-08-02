import React, { useState } from 'react';
import OwnLinkModal from './OwnLinkModal';

const AddOwnLinks = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='w-full'>
            <h2 className='text-xl font-semibold'>Add own links</h2>
            <div className='bg-white mt-4 gap-6'>
                <button onClick={() => setOpen(true)} className='border border-orange-500 text-orange-500 rounded-[7px] px-2 py-1'>
                    Click to add
                </button>
            </div>
            {
                open &&
                <OwnLinkModal
                    setOpen={setOpen}
                />
            }
        </div>
    );
};

export default AddOwnLinks;