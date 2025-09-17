import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.scss';

const Calender: React.FC = () => {
  const [value, setValue] = useState(new Date());
  return (
    <div className="calendar-main">
      <p className="day">
        {value.toLocaleDateString('en-US', { weekday: 'long' })}
      </p>
      <p className="date-today">
        {value.toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>

      <Calendar className="calendar" onChange={setValue} value={value} />
    </div>
  );
};

export default Calender;
