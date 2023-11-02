import React, { useState } from 'react';
import Task from './Task';
import Button from '../Button';
import '../../styles/Day.css';
import DayExpanded from '../DayExpanded/DayExpanded';

const Day = ({ dayName }) => {
    const [tasks, setTasks] = useState([
        { title: 'Task 1', description: 'Description 1', startTime: '10:00 AM', endTime: '11:00 AM' },
    ]);

    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const totalDuration = tasks.reduce((acc, task) => {
        const start = new Date(`1970-01-01 ${task.startTime}`);
        const end = new Date(`1970-01-01 ${task.endTime}`);
        return acc + (end - start);
    }, 0);
    const hours = Math.floor(totalDuration / 3600000);
    const minutes = (totalDuration % 3600000) / 60000;


    return (
        <div className={`col-md-4 ${isSelected ? 'selected-day' : ''}`} onClick={onDayClick}>
        <div className="card">
                <div className="card-header">
                    {dayName}
                    <span className="summary">
                        {tasks.length} tasks, {hours}h {minutes}min
                    </span>
                </div>
                <div className="card-body">
                    {tasks.map((task, index) => (
                        <Task key={index} {...task} onRemove={() => removeTask(index)} />
                    ))}
                    <Button text={isExpanded ? "Collapse" : "Expand"} onClick={handleExpandClick} />
                    {isExpanded && <DayExpanded onAddTask={addTask} />}
                </div>
            </div>
        </div>
    );
};

export default Day;
