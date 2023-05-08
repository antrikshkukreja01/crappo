import React, { useEffect } from "react";
import "../src/assets/css/Root.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Check from "./Components/Check";
import Trade from "./Components/Trade";
import Box from "./Components/Box";
import Market from "./Components/Market";
import Detailed from "./Components/Detailed";
import Grow from "./Components/Grow";
import Choose from "./Components/Choose";
import Header from "./Components/Header";
import Nav from "./Components/Nav";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Nav /> <Header />
      <Choose />
      <Check />
      <Box />
      <Trade />
      <Market />
      <Detailed />
      <Grow />
    </>
  );
}

export default App;
