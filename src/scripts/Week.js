import React from 'react';
import Day from './Day/Day';
import '../styles/Week.css';


const Week = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const [selectedDay, setSelectedDay] = useState(null);

    const handleDayClick = (index) => {
        setSelectedDay(index);
    };

    {days.map((day, index) => (
        <Day
            key={index}
            dayName={day}
            isSelected={selectedDay === index}
            onDayClick={() => handleDayClick(index)}
        />
    ))}

    {selectedDay !== null && <DayExpanded day={days[selectedDay]} />}

    return (
        <div className="container">
            <h1 className="text-center my-4">Week Planner</h1>
            <div className="row">
                {days.map((day, index) => (
                    <Day key={index} dayName={day} />
                ))}
            </div>
        </div>
    );
};

export default Week;
