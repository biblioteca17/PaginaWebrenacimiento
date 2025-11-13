import { useState, useEffect } from 'react';

function CountdownTimer() {
  // Configura tu fecha objetivo aquí
  const targetDate = new Date('2025-11-17T23:59:59'); // Cambia por tu fecha
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      if (timeDifference < 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeDifference % (1000 * 60)) / 1000)
      });
    };

    // Actualizar inmediatamente y luego cada segundo
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    // Limpiar intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown-container">
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
}

export default CountdownTimer;