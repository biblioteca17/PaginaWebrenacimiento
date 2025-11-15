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

  return (
    <div>
      {/* Slideshow */}
      <section className="slideshow-section">
        <h2 className="slideshow-title">Galería de Nuestra Escuela</h2>
        <div className="slideshow-container">
          <div className="slide">
            <img
              src={slides[currentSlide]}
              alt={`Foto ${currentSlide + 1} de Renacimiento School`}
              className="slide-image"
            />
          </div>
        </div>
        <div className="slideshow-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Slideshow;
