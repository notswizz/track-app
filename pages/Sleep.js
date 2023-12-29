import React from 'react';
import NavBar from '../components/NavBar'; // Import NavBar component
import SleepInput from '../components/SleepInput'; // Assuming the SleepInput component is in the components folder

const Sleep = () => {
  return (
    <div>
      <NavBar /> {/* Include NavBar at the top */}
      <h1>Sleep Tracker</h1>
      <SleepInput />
    </div>
  );
};

export default Sleep;
