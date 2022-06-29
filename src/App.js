import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Program from "./components/Program";
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero></Hero>
      <About></About>
      <Gallery></Gallery>
      <Program></Program>
    </div>
  );
}

export default App;
