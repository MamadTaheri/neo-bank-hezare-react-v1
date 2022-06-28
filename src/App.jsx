import React from "react";
import Navbar from "./UI/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AccountServices from "./pages/AccountServices";
import CardServices from "./pages/CardServices";
import PrintFish from "./pages/PrintFish";

const App = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<AccountServices />} />
        <Route path="/card" element={<CardServices />} />
        <Route path="/fish" element={<PrintFish />} />
      </Routes>
    </div>
  );
};

export default App;
