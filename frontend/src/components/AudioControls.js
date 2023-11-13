import React from 'react';

const AudioControls = () => {
  return (
    <div>
      <button onClick={() => console.log('Play')}>Play</button>
      <button onClick={() => console.log('Pause')}>Pause</button>
    </div>
  );
};

export default AudioControls;
