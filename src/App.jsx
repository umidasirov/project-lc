import { Component, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import base from "./API/state";
import HomePage from "./components/Pages/HomePage";
import { Routes,Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Login from "./components/Pages/Login";
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
        <Routes>
          <Route path="/" element={<HomePage base={base} />} />
          <Route path="/courses" element={"s"} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element="page not faund" />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
