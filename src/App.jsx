import { useEffect } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Rootlayout from "./components/layout/Rootlayout";
import { Route, Routes } from "react-router-dom";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Rootlayout/>}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
