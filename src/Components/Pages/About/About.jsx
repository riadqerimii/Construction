import React, { useEffect } from "react";
import "./About.css";
import { Container } from "react-bootstrap";
import Testimonials from "../Home/Testimonials";
import Footer from "../Home/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

import Team from "./Team";
import AboutWork from "./AboutWork";
import StatsCounter from "./HappyClients";
import OurStory from "./OurStory";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section fluid className="about">
      <Container className="d-flex w-100 h-100 align-items-center justify-content-center">
        <div>
          <h1 className="text-center text-white">About</h1>
          <br />
          <a className="text-headers" href="/Home">
            Home
          </a>
          <decoration>About</decoration>
        </div>
      </Container>
      <OurStory />
      <StatsCounter />
      <AboutWork />
      <Testimonials />
      <Team />
      <Footer />
    </section>
  );
}

export default About;
