import React from "react";
import { Container } from "react-bootstrap";

import Footer from "./Home/Footer";

function Blog() {
  return (
    <section fluid className="blog">
      <Container className="d-flex w-100 h-100 align-items-center justify-content-center">
        <div>
          <h1 className="text-center text-white">Blog</h1>
          <br />

          <a className="text-headers" href="/Home">
            Home
          </a>
          <decoration>Blog</decoration>
        </div>
      </Container>
      <Footer />
    </section>
  );
}

export default Blog;
