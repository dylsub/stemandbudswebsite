import Hero from "./components/Hero";
import AboutNational from "./components/AboutNational";
import Gallery from "./components/Gallery";
import AboutRegional from "./components/AboutRegional";
import './App.css';

function App() {
  return (
    <div className="app">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Kanit:wght@100;200;300;400;500;600;700&display=swap');
      </style>
      <Hero></Hero>
      <AboutNational></AboutNational>
      <Gallery></Gallery>
      <AboutRegional></AboutRegional>
    </div>
  );
}

export default App;
