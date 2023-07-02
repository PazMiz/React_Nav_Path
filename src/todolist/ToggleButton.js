import React, { useState } from 'react';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: '24px', color: '#333' }}>Toggle Button</h1>
      <button
        style={{
          backgroundColor: isOn ? '#007bff' : '#dc3545',
          color: '#fff',
          border: 'none',
          padding: '8px 16px',
          cursor: 'pointer',
        }}
        onClick={toggle}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default ToggleButton;
