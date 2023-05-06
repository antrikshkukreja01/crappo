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

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Check />
      <Box />
      <Trade />
    </>
  );
}

export default App;
