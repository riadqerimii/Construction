import React from "react";
import Carouselhome from "./Carouselhome";
import "./Home.css";
import Content from "./Content";
import Constructions from "./Constructions";
import Services from "./Services";
import Altservices from "./Altservices";
import Features from "./Features";
import Ourprojects from "./Ourprojects";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import ScrollButton from "./Scrollbutton";

function Home() {
  return (
    <section id="home">
      <Carouselhome />
      <Constructions />
      <Ourprojects />
      <Content />
      <Services />
      <Altservices />
      <Features />
      <Testimonials />
      <Footer />
      <ScrollButton />
    </section>
  );
}

export default Home;
