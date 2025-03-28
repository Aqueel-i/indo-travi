import './App.css'
import Header from "./components/Header";
import BestLocation from "./components/BestLocation";
import HowItWorks from './components/HowItWorks';
import TourPackages from "./components/TourPackages";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
import Footer from "./components/Footer";


function App() {

  return (
    <div>
      <Header />
      <BestLocation />
      <HowItWorks />
      <TourPackages />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
