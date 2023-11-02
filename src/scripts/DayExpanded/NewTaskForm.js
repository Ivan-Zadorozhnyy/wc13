import React, { useState } from 'react';
import '../../styles/NewTaskForm.css';

const NewTaskForm = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [startTime, setStartTime] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            title: taskTitle,
            start: startTime,
            duration: parseInt(duration, 10)
        };
        console.log(newTask);
        setTaskTitle('');
        setStartTime('');
        setDuration('');
    };

    return (
        <form className="new-task-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Task Title</label>
                <input
                    type="text"
                    className="form-control"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Start Time</label>
                <input
                    type="time"
                    className="form-control"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Duration (minutes)</label>
                <input
                    type="number"
                    className="form-control"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Add Task</button>
        </form>
    );
};

export default NewTaskForm;
