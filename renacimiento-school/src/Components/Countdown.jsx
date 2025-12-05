import { useState, useEffect } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-12-13T12:00:00"); //Año Mes Dia Horas 
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
    <div className="countdown-section" id="Countdown">
      <h2 className="countdown-subtitle">MATRÍCULA EN LÍNEA</h2>
      <h3 className="countdown-heading">Tiempo restante para matrícula</h3>

      <div className="countdown-wrapper">
        <div className="countdown-box">
          <span className="countdown-number">{timeLeft.days}</span>
          <span className="countdown-label">Días</span>
        </div>

        <div className="countdown-box">
          <span className="countdown-number">{timeLeft.hours}</span>
          <span className="countdown-label">Horas</span>
        </div>

        <div className="countdown-box">
          <span className="countdown-number">{timeLeft.minutes}</span>
          <span className="countdown-label">Minutos</span>
        </div>

        <div className="countdown-box">
          <span className="countdown-number">{timeLeft.seconds}</span>
          <span className="countdown-label">Segundos</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
