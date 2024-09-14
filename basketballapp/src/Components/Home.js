import React from "react";
import Navbar from "./Navbar";
import Video from "./Video";
import Welcome from "./Welcome";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="">
      <h1>Hello!</h1>
      <Navbar />
      <Video />
      <Welcome />
      <Footer />
    </div>
  );
}
