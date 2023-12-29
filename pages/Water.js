import React from 'react';
import NavBar from '../components/NavBar'; 
import WaterInput from '../components/WaterInput'; // Adjust the path as per your project structure

const Water = () => {
  return (
    <div>
        <NavBar /> 
      <h1>Water Intake Tracker</h1>
      <WaterInput />
    </div>
  );
};

export default Water;
