import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const TopicDetails = () => {
    const topics = useLoaderData();
    // console.log(topics);
    return (
        <div>
            {
                topics.data.questions.map(topic => <Topics
                key={topic.id}
                topic={topic}
                ></Topics>)
            }
        </div>
    );
};

export default TopicDetails;