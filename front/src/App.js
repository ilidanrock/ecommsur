import React from "react";
import {Home} from './Pages/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "../../front/src/Pages/Detail/Detail";

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  return (
    <BrowserRouter>
      <div style={{ textAlign: "center" }}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<Detail/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
