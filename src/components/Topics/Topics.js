import React from 'react';
import Option from '../Option/Option';
import './Topics.css';

const Topics = ({topic}) => {
    const {id, options, correctAnswer, question} = topic;
    return (
        <div className='quiz'>
            <p className='text-center text-2xl mb-6 font-semibold text-gray-600'>{question}</p>
            <div className='m-auto'>
                
            {
                options.map(option => <Option
                option = {option}
                ></Option>)
            }
            </div>
        </div>
    );
};

export default Topics;