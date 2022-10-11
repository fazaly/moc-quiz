import React from 'react';

const Courses = ({course}) => {
    const {id, name, logo} = course;
    return (
        <div>
            
            <div className='bg-[#F6F8FA] p-6 rounded shadow-lg'>
                <img
                    className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
                    src={logo}
                    alt=''
                />
                <div className="flex flex-wrap justify-between items-center">
                    <div className="space-x-2">
                        <p className='text-gray-700 hover:text-emerald-500 text-[25px] font-bold'>{name}</p>
                    </div>
                    <div className="flex space-x-2 text-sm">
                        <button type="button" className="flex items-center text-white font-bold text-[20px] bg-gray-600 hover:bg-gray-800 rounded-md p-3 space-x-1.5">
                            Start Practice
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;