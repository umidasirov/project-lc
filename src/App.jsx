import { useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import OurInstructor from "./components/homepage-components/Our-instructor/OurInstructor";
import base from "./API/state";
import HomePage from "./components/Pages/HomePage";
import { Routes,Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      once: false, // Анимация проигрывается только один раз
    });
  }, []);
  return (
    <div className="App">
      <Nav /> 
      <div className="pages">
        <Routes className='content-all'>
          <Route path="/" element={<HomePage base={base}/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
