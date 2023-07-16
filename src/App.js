import React from "react";

import Banner from "./images/Backsplash.jpg";
import { CssBaseline } from "@mui/material";

import "./styles.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="homePage" style={{ backgroundImage: `url(${Banner})` }}>
      <CssBaseline />
      <Home />
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
