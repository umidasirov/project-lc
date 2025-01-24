import "./Results.css"
import React, { useEffect, useRef } from 'react';
import { CountUp } from 'countup.js';
export default function Results(props) {
  return (
    <div className={`counter ${props.color}`}>
        <h5>
            <Counter start={0} end={props.number} duration={5} decimals={1} /> {!props.percent ? "K" : "%"}
        </h5>
        <p className="text-result">
            {props.description}
        </p>
    </div>
  )
}
const Counter = ({ start, end, duration, decimals = 2 }) => {
    const counterRef = useRef(null);
  
    useEffect(() => {
      const countUp = new CountUp(counterRef.current, end, {
        startVal: start,
        duration: duration,
        decimalPlaces: decimals, // Количество знаков после запятой
      });
  
      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    }, [start, end, duration, decimals]);
  
    return <span ref={counterRef}>{start.toFixed(decimals)}</span>;
  };