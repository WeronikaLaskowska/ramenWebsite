import React from "react";
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Chef from "./components/Chef"
import Footer from "./components/Footer";
import Reservation from "./components/Reservation";
import { GlobalStyle } from "./globalStyles";
import {menuPositions} from "./components/Menu/data"


function App() {
  return (
  <>
      <GlobalStyle />
      <Hero />
      <Menu menu={menuPositions} /> 
      <Chef />
      <Reservation/>
      <Footer/>
   </>
  );
}

export default App;
