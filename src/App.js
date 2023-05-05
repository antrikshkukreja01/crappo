import React, { useEffect } from "react";
import "../src/assets/css/Root.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Check from "./Components/Check";
import Trade from "./Components/Trade";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Check />
      <Trade />
    </>
  );
}

export default App;
