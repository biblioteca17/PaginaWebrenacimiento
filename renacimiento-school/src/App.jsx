
import Navbar from './Layout/Navbar'
import Banner from './Layout/Banner'
import Countdown from './Components/Countdown'
import InfoSection from './Components/InfoSection'
import Edubox from './Components/Edubox'
import Downloads from './Components/Downloads'
import Slideshow from './Components/Slideshow'
import Footer from './Layout/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Countdown/>
      <InfoSection />
      <Edubox />
      <Downloads />
      <Slideshow />
      <Footer />
    </>
  )
}

export default App