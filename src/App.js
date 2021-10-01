import React, { useEffect } from "react";
import Hero from "./components/Hero"
import Menu from "./components/Menu";
import Chef from "./components/Chef";
import Footer from "./components/Footer";
import Reservation from "./components/Reservation";
import { GlobalStyle } from "./globalStyles";
import {menuPositions} from "./components/Menu/data";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
   Aos.init({duration:2000});
   Aos.refresh();
 
  }, []);

  return (
  <>
      <GlobalStyle />
      <Hero />
      <Menu menu={menuPositions} /> 
      <Chef  />
      <Reservation />
      <Footer/>
   </>
  );
}

export default App;
