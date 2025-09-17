import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Calender: React.FC = () => {
  const [value, setValue] = useState(new Date());
  return (
    <div>
      <p>{value.toLocaleDateString('en-US', { weekday: 'long' })}</p>
      <p>
        {value.toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>

      <Calendar onChange={setValue} value={value} />
    </div>
  );
};

export default Calender;
