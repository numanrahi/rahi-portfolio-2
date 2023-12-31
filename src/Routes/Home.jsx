import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import About from "../Components/About/About";
import Social from "../Components/Social/Social";
import Skills from "../Components/Skills/Skills";
import Services from "../Components/Services/Services";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#C4C4C4", overflow: "hidden" }}>
      <Banner />
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <About />
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Skills />
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Services />
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Projects />
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
