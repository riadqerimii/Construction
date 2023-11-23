import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Home/Footer";
import Blog from "./Blog";
// import ServicesProject from "./ServicesProject";

function Projects() {
  return (
    <section fluid className="projects">
      <Container className="d-flex w-100 h-100 align-items-center justify-content-center">
        <div>
          <h1 className="text-center text-white">Projects</h1>
          <br />

          <a className="text-headers" href="/Home">
            Home
          </a>
          <decoration>Projects</decoration>
        </div>
      </Container>
      {/* <ServicesProject />  */}
      <Blog />
      <Footer />
    </section>
  );
}

export default Projects;
