import React, { useState, useEffect } from 'react';

const CountBox = ({initialValue,targetValue,text }) => {

        const [count, setCount] = useState(initialValue);
        const duration = 3500; // 3.5 seconds
     
        useEffect(() => {
            let startValue = initialValue;
            const interval = Math.floor(
                duration / (targetValue - initialValue));
     
            const counter = setInterval(() => {
                startValue += 1;
                setCount(startValue);
                if (startValue >= targetValue) {
                    clearInterval(counter);
                }
            }, interval);
     
            return () => {
                clearInterval(counter);
            };
        }, [targetValue, initialValue]);

  return (
    <div className="count-outer count-box">
      <span className="num">{count}</span>
      <span className="count-text">{text}</span>
    </div>
  );
};

export default CountBox;
