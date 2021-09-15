import React from "react";
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Chef from "./components/Chef"
import Footer from "./components/Footer";
import Reservation from "./components/Reservation";
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from "./globalStyles";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Menu />
      <Chef />
      <Reservation/>
      <Footer/>
    </Router>
  );
}

export default App;
