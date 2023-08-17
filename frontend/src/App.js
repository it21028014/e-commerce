import React from "react";
// import data from "./data";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Amazon</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slung" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
