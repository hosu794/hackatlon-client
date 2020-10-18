import React from "react";
import "./App.css";
import Header from "./components/layout/Header"
import About from "./components/layout/About"
import Kategorie from "./components/layout/Kategorie"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Kategorie />
      <Footer />
    </div>
  );
}

export default App;
