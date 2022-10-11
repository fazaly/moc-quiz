import React from 'react';

const Option = ({option}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-1 md:w-full'>
            <button type='button' className='px-8 block m-auto mt-4 py-3 font-semibold rounded-full bg-[#256D85] text-gray-900 hover:bg-[#182747] hover:text-white'>
                <p>{option}</p>
            </button>
        </div>
    );
};

export default Option;