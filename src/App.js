import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Nav from "./components/Nav";
import Audios from "./components/Audio";
import Home from "./components/Home";
import Soura from "./components/Soura";
import Louding from "./components/Louding";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const url = useSelector((state) => state.name.activeAudio);
  const [show, setShow] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 10);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {show && <Louding />}
        <Nav />
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/:id" element={<Soura />}></Route>
        </Routes>
        <Audios data={url}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
