import { useState, useEffect } from "react";

const Clock = () => {
  const [days, setDays] = useState();
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const destination = new Date("Dec 24, 2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = destination - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 60 * 24)) / (1000 * 60 * 60 * 60)
      );

      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (destination < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  });
  return (
    <div className="clock__wrapper flex items-center justify-center gap-3">
      <div className="clock__data flex items-center gap-3">
        <div className="text-center">
          <h1 className="text-white text-[1.8rem] mb-2">{days}</h1>
          <h5 className="text-white text-[1.2rem]">Days</h5>
        </div>
        <span className="text-white text-[1.5rem]">:</span>
      </div>

      <div className="clock__data flex items-center gap-3">
        <div className="text-center">
          <h1 className="text-white text-[1.8rem] mb-2">{hours}</h1>
          <h5 className="text-white text-[1.2rem]">Hours</h5>
        </div>
        <span className="text-white text-[1.5rem]">:</span>
      </div>

      <div className="clock__data flex items-center gap-3">
        <div className="text-center">
          <h1 className="text-white text-[1.8rem] mb-2">{minutes}</h1>
          <h5 className="text-white text-[1.2rem]">Minutes</h5>
        </div>
        <span className="text-white text-[1.5rem]">:</span>
      </div>

      <div className="clock__data flex items-center gap-3">
        <div className="text-center">
          <h1 className="text-white text-[1.8rem] mb-2">{seconds}</h1>
          <h5 className="text-white text-[1.2rem]">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
