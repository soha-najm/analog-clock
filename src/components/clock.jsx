import { useEffect, useState } from "react";
import "../components/clock.css";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const secondsRotation = (time.getSeconds() / 60) * 360;
  const minutesRotation =
    ((time.getMinutes() + time.getSeconds() / 60) / 60) * 360;
  const hoursRotation =
    (((time.getHours() % 12) + time.getMinutes() / 60) / 12) * 360;

  return (
    <div className="clock">
      <div
        className="hand second"
        style={{
          // transform: `translate(-50%,-100%) rotate(${secondsRotation}deg) `,
          '--rotation':`${secondsRotation}deg `
        }}
      ></div>
      <div
        className="hand minute"
        style={{
          // transform: `translate(-50%,-100%) rotate(${minutesRotation}deg)`,
          '--rotation': `${minutesRotation}deg`
        }}
      ></div>
      <div
        className="hand hour"
        style={{
          // transform: `translate(-50%,-100%) rotate(${hoursRotation}deg) `,
          '--rotation':`${hoursRotation}deg `
        }}
      ></div>
    </div>
  );
}

export default Clock;
