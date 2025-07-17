// src/components/Clock.jsx
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(timer);
  }, []);

  // Format time to HH:MM:SS
  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div style={styles.clockContainer}>
      <h2 style={styles.title}>🕒 Digital Clock</h2>
      <div style={styles.time}>{formatTime(time)}</div>
    </div>
  );
};

const styles = {
  clockContainer: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#1c1c1c',
    color: '#00ffcc',
    fontFamily: 'monospace',
    borderRadius: '10px',
    width: '300px',
    margin: '2rem auto',
    boxShadow: '0 0 20px rgba(0, 255, 204, 0.5)',
  },
  title: {
    marginBottom: '1rem',
  },
  time: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
};

export default Clock;
