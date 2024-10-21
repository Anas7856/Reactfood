import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aboutpage from "./pages/Aboutpage";
import Menupage from "./pages/Menupage";
import Blogpage from "./pages/Blogpage";
import Erroepage from "./pages/Erroepage";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/menu" element={<Menupage />} />
      <Route path="/blog" element={<Blogpage />} />
      <Route path="*" element={<Erroepage />} />
    </Routes>
  );
};

export default App;
