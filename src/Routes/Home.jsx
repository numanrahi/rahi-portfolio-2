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
      {/* <Navbar /> */}
      <Banner />
      <About id="home-section" />
      <Social />
      <Skills id="skills-section" />
      <Services />
      <Projects id="projects-section" />
      <Contact id="contact-section" />
      <Footer/>
    </div>
  );
};

export default Home;
