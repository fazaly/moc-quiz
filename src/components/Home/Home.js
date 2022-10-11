import React, { useContext } from 'react';
import Courses from '../../Courses/Courses';
import { QuizContext } from '../Root/Root';

const Home = () => {
    const courses = useContext(QuizContext);

    // const handleAddToTopics = () => {

    // }
    // console.log(courses);
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                    <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                        <div className="flex space-x-2 sm:space-x-4">
                            <div className="space-y-2">
                                <p className="text-lg font-medium text-gray-600 leading-snug">"I've always struggled with learning JavaScript. I've taken many courses but MOC-Quiz's course was the one which stuck. Studying JavaScript as well as React and CSS on MOC-Quiz gave me the skills and confidence".</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                        <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                            <img src="https://images.unsplash.com/photo-1585432959315-d9342fd58eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                        </div>
                    </div>
                </div>
            </section>
            <h1 className='pl-12 text-2xl font-bold text-gray-700 mt-5'>All Courses Quiz:</h1>
            <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 p-12 lg:row-gap-8'>
                {
                    courses.data.map(course => <Courses
                    key={course.id}
                    course={course}
                    ></Courses>)
                }
            </div>
        </div>
    );
};

export default Home;