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
    <div>
      <button onClick={toggleSleepAwake}>
        {isSleep ? 'Switch to Awake' : 'Switch to Sleep'}
      </button>
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SleepInput;
