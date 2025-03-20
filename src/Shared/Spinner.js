import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-[85vh] bg-white">
            <InfinitySpin
            visible={true}
            width="200"
            color="#f97316"
            ariaLabel="infinity-spin-loading"
            />
        </div>
    );
};

export default Spinner;