//import logo from "./logo.svg";
import React from "react";
import "./styles.css";
import Navbar from "./Components/Navbar";
import Video from "./Components/Video";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import "./App.css";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Video />
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;
