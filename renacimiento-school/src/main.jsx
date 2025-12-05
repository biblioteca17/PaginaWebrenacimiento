import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/download.css'
import './styles/countdown.css'
import './styles/edubox.css'
import './styles/footer.css'
import './styles/infoSection.css'
import './styles/Banner.css'
import './styles/navbar.css'
import './styles/slideshow.css'
import './App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
