import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import NasaPhoto from "./NasaPhoto";
import Footer from "./Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/" component={Home} />
        <Route path="/nasaphoto" component={NasaPhoto} />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
