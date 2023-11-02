import React from 'react';
import NewTaskForm from './NewTaskForm';
import '../../styles/DayExpanded.css';


const DayExpanded = () => {
    return (
        <div className="day-expanded">
            <h3>Day Details</h3>
            {}
            <NewTaskForm onAddTask={onAddTask} />

        </div>
    );
};

export default DayExpanded;
