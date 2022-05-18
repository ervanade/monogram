import NavigationBar from "./components/NavigationBar/NavigationBar";
import Hero from "./components/hero/Hero";
import About from "./components/About/About";
import Discover from "./components/Discover/Discover";
import Services from "./components/services/Services";
import './style/style.css'
function App() {
  return (
    <div className="App">
      <div className="header">
      <NavigationBar />
      </div>
      <div className="hero">
      <Hero />
      </div>
      <About />
      <Discover />
      <Services />
    </div>
  );
}

export default App;
