import React from "react";
import Navbars from "./components/Navbar";
import HomePage from "./components/Home/Home";
import About from "./components/About/About";
import Experience from "./components/Experince/Experince";
import Services from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import CustomFooter from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
    
    <Navbars />
    <HomePage />
    <About/>
    <Experience/>
    <Services/>
    <Contact/>
    <CustomFooter/>

    
    </>

  );
}
