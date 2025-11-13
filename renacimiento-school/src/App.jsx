import { useState, useEffect } from 'react'
import './App.css'

// Importar imágenes locales
import logo from './assets/Logo/Renacimiento logo.png'
import schoolImage from './assets/Escuela/42.png'

// Importar imágenes de la galería
import foto1 from './assets/Galeria/Inicio.jpg'
import foto2 from './assets/Galeria/Entrada.jpg'
import foto3 from './assets/Galeria/Sanvalentine.jpg'
import foto4 from './assets/Galeria/Feria de ciencias.jpg'
import foto5 from './assets/Galeria/Viaje.jpg'
import foto6 from './assets/Galeria/Vocabulary.jpg'
import foto7 from './assets/Galeria/Spelling Bee.jpg'
import foto8 from './assets/Galeria/Teatro.jpg'
import foto9 from './assets/Galeria/Retiro.jpg'
import foto10 from './assets/Galeria/Gimnaciada.jpg'
import foto11 from './assets/Galeria/Dia del padre.jpg'
import foto12 from './assets/Galeria/Defensa de test.jpg'
import foto13 from './assets/Galeria/Celebracion.jpg'
import foto14 from './assets/Galeria/15 De septiembre.jpg'
import foto15 from './assets/Galeria/15 De septiembre3.jpg'
import CountdownTimer from './componentes/Countdow'

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const targetDate = new Date('2025-02-01T00:00:00')
    const now = new Date()
    const difference = targetDate - now

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Array con las imágenes importadas
  const slides = [
    foto1, foto2, foto3, foto4, foto5,
    foto6, foto7, foto8, foto9, foto10,
    foto11, foto12, foto13, foto14, foto15
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(slideInterval)
  }, [slides.length])

  return (
    <div className="container">
      <header className="header">
  {/* Logo arriba del título */}
  <div className="logo-top">
    <img src={logo} alt="Logo Renacimiento School" />
  </div>
  
  <div className="title-section">
    <h1 className="school-name">RENACIMIENTO SCHOOL</h1>
    <div className="school-image">
      <img src={schoolImage} alt="Renacimiento School" />
    </div>
  </div>
  
  <h2 className="subtitle">MATRÍCULA EN LÍNEA</h2>
  <div>
    <CountdownTimer/>
  </div>
 
</header>

      {/* Sección de Matrícula - MOVIDA ARRIBA de la información */}
      <section className="matricula-section">
        <h2 className="matricula-title">MATRÍCULA EN LÍNEA</h2>
        <p className="matricula-subtitle">EXCLUSIVO ALUMNOS DE EGRESO</p>
        <a href="#" className="edubox">EDUBOX</a>
      </section>
      
      {/* Información de Contacto */}
      <section className="info-section">
        <div className="info-item">
          <h3 className="info-title">Ubicación</h3>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Col.+Mayangle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="info-link"
          >
            <p className="info-content">Col. Mayangle</p>
          </a>
          <p className="info-subtext">Haz click para ver en Google Maps/Waze</p>
        </div>
        
        <div className="info-item">
          <h3 className="info-title">Teléfono</h3>
          <a 
            href="tel:+50422233135" 
            className="info-link"
          >
            <p className="info-content">2223 3135</p>
          </a>
          <p className="info-subtext">Haz click para llamar</p>
        </div>
        
        <div className="info-item">
          <h3 className="info-title">Correo</h3>
          <a 
            href="mailto:administra@renacom" 
            className="info-link"
          >
            <p className="info-content">administra@renacom</p>
          </a>
          <p className="info-subtext">Haz click para enviar correo</p>
        </div>
      </section>

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
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>
      
      <footer className="footer">
        <p>© Renacimiento school 2025</p>
      </footer>
    </div>
  )
}

export default App