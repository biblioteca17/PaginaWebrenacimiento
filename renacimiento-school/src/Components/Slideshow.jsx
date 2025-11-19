import { useState, useEffect } from "react";
// Importar imágenes de la galería
import foto1 from '../assets/Galeria/Inicio.jpg'
import foto2 from '../assets/Galeria/Entrada.jpg'
import foto3 from '../assets/Galeria/Sanvalentine.jpg'
import foto4 from '../assets/Galeria/Feria de ciencias.jpg'
import foto5 from '../assets/Galeria/Viaje.jpg'
import foto6 from '../assets/Galeria/Vocabulary.jpg'
import foto7 from '../assets/Galeria/Spelling Bee.jpg'
import foto8 from '../assets/Galeria/Teatro.jpg'
import foto9 from '../assets/Galeria/Retiro.jpg'
import foto10 from '../assets/Galeria/Gimnaciada.jpg'
import foto11 from '../assets/Galeria/Dia del padre.jpg'
import foto12 from '../assets/Galeria/Defensa de test.jpg'
import foto13 from '../assets/Galeria/Celebracion.jpg'
import foto14 from '../assets/Galeria/15 De septiembre.jpg'
import foto15 from '../assets/Galeria/15 De septiembre3.jpg'

const Slideshow = () => {
  // Array con las imágenes importadas
  const slides = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    foto7,
    foto8,
    foto9,
    foto10,
    foto11,
    foto12,
    foto13,
    foto14,
    foto15,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="slideshow-wrapper">
     {/* Slideshow a pantalla completa */}
      <section className="fullscreen-slideshow">
        <div className="slideshow-container-full">
          <button className="nav-button-full prev" onClick={goToPrevious}>
            &#8249;
          </button>
          
          <div className="slide-full">
            <img
              src={slides[currentSlide]}
              alt={`Foto ${currentSlide + 1} de Renacimiento School`}
              className="slide-image-full"
            />
            <div className="slide-info-overlay">
              <div className="slide-counter-full">
                {(currentSlide + 1).toString().padStart(2, '0')} / {slides.length.toString().padStart(2, '0')}
              </div>
            </div>
          </div>
          
          <button className="nav-button-full next" onClick={goToNext}>
            &#8250;
          </button>
        </div>
        
        <div className="slideshow-controls">
          <div className="dots-container">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot-full ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slideshow;