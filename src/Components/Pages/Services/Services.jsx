import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Home/Footer";
import ProjectServices from "./ProjectServices";
import TextServices from "./TextServices";
import TestimonialServices from "./TestimonialServices";
import WorkServices from "./WorkServices";
function Services() {
  return (
    <section fluid className="services">
      <Container className="d-flex w-100 h-100 align-items-center justify-content-center">
        <div>
          <h1 className="text-center text-white">Services</h1>
          <br />

          <a className="text-headers" href="/Home">
            Home
          </a>
          <decoration>Services</decoration>
        </div>
      </Container>
      <ProjectServices />
      <TextServices />
      <TestimonialServices />
      <WorkServices />
      <Footer />
    </section>
  );
}

export default Services;
