import { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-01-15T12:00:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container" id="Countdown" >
      <h2 className="subtitle">MATRÍCULA EN LÍNEA</h2>
      <h3 className="countdown-title">Tiempo restante para matrícula:</h3>
      <div className="countdown">
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.days}</span>
          <span className="countdown-label">Días</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.hours}</span>
          <span className="countdown-label">Horas</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.minutes}</span>
          <span className="countdown-label">Minutos</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeLeft.seconds}</span>
          <span className="countdown-label">Segundos</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
