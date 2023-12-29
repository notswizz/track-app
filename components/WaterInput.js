import React, { useState } from 'react';

const WaterInput = () => {
  const [waterCount, setWaterCount] = useState(0);

  const incrementWaterCount = () => {
    setWaterCount(waterCount + 1);
  };

  const saveWaterCount = () => {
    localStorage.setItem('waterCount', waterCount);
    alert(`Saved: You have drunk ${waterCount} bottles of water.`);
  };

  return (
    <div className="max-w-sm mx-auto text-center py-10">
      <button 
        onClick={incrementWaterCount}
        className="text-4xl p-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2"
      >
        🔼
      </button>
      <span className="text-2xl font-semibold mx-2">{waterCount}</span>
      <button 
        onClick={saveWaterCount}
        className="text-lg bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Save
      </button>
    </div>
  );
};

export default WaterInput;
