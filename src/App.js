import NavigationBar from "./components/NavigationBar/NavigationBar";
import Hero from "./components/hero/Hero";
import './style/style.css'
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="hero">
      <Hero />
      </div>
    </div>
  );
}

export default App;
