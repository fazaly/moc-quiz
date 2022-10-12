import React from 'react';
import Option from '../Option/Option';
import './Topics.css';
import { EyeSlashIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-toastify';

const Topics = ({topic}) => {
    const {id, options, correctAnswer, question} = topic;

    const handleCorrectAnswer = (option) => {
        // console.log('clicked');
        if(option === correctAnswer){
            toast.success('Correct Answer', {autoClose : 500})
        }
        else{
            toast.error('Wrong Answer', {autoClose : 500})
        }
    }

    const handleIcon = (id) => {
        toast(`${correctAnswer}`, { autoClose: 1000 })
    }

    return (
        <div className='quiz'>
            <p className='text-center text-2xl mb-6 font-semibold text-gray-600'>{question}</p>
            <p><span onClick={() => handleIcon(id)}><EyeSlashIcon className="h-6 w-6 text-blue-500"/></span></p>
            <div className='m-auto'>
            {
                options.map(option => <Option
                option = {option}
                handleCorrectAnswer={handleCorrectAnswer}
                ></Option>)
            }
            </div>
        </div>
    );
};

export default Topics;