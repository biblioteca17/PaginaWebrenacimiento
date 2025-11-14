import { useState, useEffect } from 'react'
import './App.css'

// Importar imágenes locales
import logo from './assets/Logo/RenacimientoLogo.png'
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

import Carrousel from './Components/Carrousel'
import Contact from './Components/Contact'
import Countdown from './Components/Countdown'
import Edubox from './Components/Edubox'
import Banner from './Layout/Banner'
import Footer from './Layout/Footer'
import Navbar from './Layout/Navbar'

function App() {
  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  // function calculateTimeLeft() {
  //   const targetDate = new Date('2025-02-01T00:00:00')
  //   const now = new Date()
  //   const difference = targetDate - now

  //   if (difference <= 0) {
  //     return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  //   }

  //   return {
  //     days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //     hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //     minutes: Math.floor((difference / (1000 * 60)) % 60),
  //     seconds: Math.floor((difference / 1000) % 60)
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(calculateTimeLeft())
  //   }, 1000)

  //   return () => clearInterval(timer)
  // }, [])

  // Array con las imágenes importadas
  // const slides = [
  //   foto1, foto2, foto3, foto4, foto5,
  //   foto6, foto7, foto8, foto9, foto10,
  //   foto11, foto12, foto13, foto14, foto15
  // ]

  // const [currentSlide, setCurrentSlide] = useState(0)

  // useEffect(() => {
  //   const slideInterval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length)
  //   }, 3000)

  //   return () => clearInterval(slideInterval)
  // }, [slides.length])

  return (
    <>
      <Navbar />
      <Banner />
      <Countdown/>
      <Edubox />
      <Carrousel />
      <Contact />
      <Footer />
    </>
  )
}

export default App