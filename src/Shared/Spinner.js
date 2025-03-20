import React from 'react';
import { Blocks } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-[85vh] bg-white">
            <Blocks
                height="180"
                width="180"
                color={["#f97316"]}
                ariaLabel="blocks-loading"
                wrapperClass="blocks-wrapper"
                visible={true}
            />
        </div>
    );
};

export default Spinner;