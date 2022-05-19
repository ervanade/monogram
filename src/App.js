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
function App() {
  return (
    <div className="App">
      {/* <div className="header">
      <NavigationBar />
      </div> */}
      <Navbar />
      <div className="hero">
      <Hero />
      </div>
      <About />
      <Discover />
      <Services />
      <Whyus />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
