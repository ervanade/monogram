// import NavigationBar from "./components/NavigationBar/NavigationBar";
import Hero from "./components/hero/Hero";
import About from "./components/About/About";
import Discover from "./components/Discover/Discover";
import Services from "./components/services/Services";
import Navbar from "./components/Navbar/Navbar"
import './style/style.css'
import Whyus from "./components/whyus/Whyus";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactGA from 'react-ga';

function App() {
  const TRACKING_ID = process.env.REACT_APP_TRACKING_ID; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <div className="hero">
      <Hero />
      </div>
      <div data-aos="fade-up">
      <About />
      </div>
        
      <Discover />
      <Services />
      <Whyus />
      <Contact />
      <div data-aos="fade-up">

      <Footer />
      </div>
    </div>
  );
}

export default App;
