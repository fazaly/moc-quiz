import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

export const QuizContext = createContext([]); 

const Root = () => {
    const courses = useLoaderData();

    return (
        <QuizContext.Provider value={courses}>
            <Header></Header>
            <Outlet></Outlet>
        </QuizContext.Provider>
    );
};

export default Root;