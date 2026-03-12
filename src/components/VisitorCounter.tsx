import React, { useState, useEffect } from 'react';

export const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // A simple counter that increments every few seconds to simulate new visitors
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <h4 className="text-lg font-display font-bold mb-2">Visitor Count</h4>
      <p className="text-3xl font-bold text-accent">{count.toLocaleString()}</p>
    </div>
  );
};