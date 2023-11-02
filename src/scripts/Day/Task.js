import React from 'react';
import '../../styles/Task.css';


const Task = ({ title, description, startTime, endTime }) => {
    return (
        <div className="task">
            <h5>{title}</h5>
            <p>{description}</p>
            <p>{startTime} - {endTime}</p>
        </div>
    );
};

export default Task;
