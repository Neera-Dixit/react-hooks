import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setLight] = useState(false);
  const [mousePosition, setMousePosition] = useState({x: null, y: null});
  const [status, setStatus] = useState(navigator.onLine);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  const toggleLight = () => {
    setLight(isOn => !isOn);
  };
  
  const updateMousePosition = (event) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY           
    })
  }
  
  const handleOnline = () => {
    setStatus(true)
  }
  
  const handleOffline = () => {
    setStatus(false)
  }
  
  useEffect(() => {
    document.title = `clicked ${count} times`;     
    window.addEventListener('mousemove', updateMousePosition); 
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
    }
  },
    [count] // causes to behave like willmount and unmount method
  );

  return (
    <>
      <h1>Hook</h1>
      <h2>Counter</h2>
      <button onClick={handleClick}>
        I was clicked {count} times
      </button>

      <h2>Toggle Light</h2>

      <div style={{
        width: '50px',
        height: '50px',
        backgroundColor: isOn ? 'red' : 'yellow'
      }}
      onClick={toggleLight}
      />

      <h2>Mouse Position</h2>
        X : {mousePosition.x}

        Y: {mousePosition.y}

      <h2>Network Status</h2>
      YOU ARE { status ? 'ONLINE' : 'OFFLINE'}
    </>
  )
}

export default App;
