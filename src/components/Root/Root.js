import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

export const QuizContext = createContext([]); 

const Root = () => {
    return (
        <QuizContext.Provider>
            <Header></Header>
            <Outlet></Outlet>
        </QuizContext.Provider>
    );
};

export default Root;