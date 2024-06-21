import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./page/Home";
import Produto from "./page/Produto";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compras" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
}
