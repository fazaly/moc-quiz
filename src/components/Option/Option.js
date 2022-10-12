import React from 'react';

const Option = ({option, handleCorrectAnswer}) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-1 md:w-full'>
            <button
                onClick={() => handleCorrectAnswer(option)}
                type='button' 
                className='px-8 block m-auto mt-4 py-3 font-semibold rounded-full bg-[#B7C4CF] text-gray-900 hover:bg-[#182747] hover:text-white'>
                <p>{option}</p>
            </button>
        </div>
    );
};

export default Option;