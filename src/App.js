import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NowDetail from "./NowDetail";
import PrevDetail from "./PrevDetail";
import Map from "./Map";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/NowDetail" element={<NowDetail />} />
      <Route path="/PrevDetail" element={<PrevDetail />} />
      <Route path="/Map/:index" element={<Map />} />
    </Routes>
  );
}

export default App;
