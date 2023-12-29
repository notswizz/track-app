import React, { useState } from 'react';

const SleepInput = () => {
  // State to toggle between sleep and awake
  const [isSleep, setIsSleep] = useState(true);

  const toggleSleepAwake = () => {
    setIsSleep(!isSleep);
  };

  const handleSubmit = () => {
    const currentTime = new Date().toLocaleTimeString();
    const sleepStatus = isSleep ? 'Sleeping' : 'Awake';

    // Save to local storage
    localStorage.setItem('sleepData', JSON.stringify({ time: currentTime, status: sleepStatus }));
    alert(`Saved: ${sleepStatus} at ${currentTime}`);
  };

  return (
    <div className="max-w-md mx-auto text-center py-10">
      <button 
        onClick={toggleSleepAwake}
        className={`text-lg font-semibold py-2 px-4 rounded-lg shadow-md mr-4 ${
          isSleep ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-yellow-500 hover:bg-yellow-700 text-white'
        }`}
      >
        {isSleep ? 'Sleep' : 'Awake'}
      </button>
      <button 
        onClick={handleSubmit}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"
      >
        Submit
      </button>
    </div>
  );
};

export default SleepInput;
