import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Footer from "./Home/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section fluid className="contacts">
      <Container className="d-flex w-100 h-100 align-items-center justify-content-center">
        <div>
          <h1 className="text-center text-white">Contact</h1>
          <br />

          <a className="text-headers" href="/">
            Home
          </a>
          <decoration>Contact</decoration>
        </div>
      </Container>
      <Container
        style={{
          height: "70vh",
        }}
      >
        <Row className="h-100 ">
          <Col lg={6} md={12} className="h-100 py-3 ">
            <div data-aos="fade-in" className="h-100 ">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23577.76775104413!2d21.177625!3d42.380439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13547f09ac615cef%3A0x574342fe7c5a9589!2sARLINDI%20SH.P.K!5e0!3m2!1sen!2sus!4v1700557323359!5m2!1sen!2sus"
                width="100%"
                height="600"
                style={{ border: "0" }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
          <Col lg={6} md={12} className="py-3">
            <div className="card rounded-0 border-0">
              <div className="card-body p-1 m-4 ">
                <span className="get-quote">Get a quote</span>
                <p className="pt-3">
                  Vel nobis odio laboriosam et hic voluptatem. Inventore vitae
                  totam. Rerum repellendus enim linead sero park flows.
                </p>
                <Form>
                  <Form.Group className="mb-2 " controlId="name">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      required
                      className="rounded-0 p-2 my-4"
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="email">
                    <Form.Control
                      type="email"
                      placeholder=" Email"
                      required
                      className="rounded-0 p-2 my-4"
                    />
                  </Form.Group>

                  <Form.Group className="my-4" controlId="phone">
                    <Form.Control
                      type="tel"
                      placeholder=" Phone"
                      required
                      className="rounded-0 p-2 my-4"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="message">
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Enter your message"
                      className="rounded-0 p-2 my-4"
                    />
                  </Form.Group>

                  <Button
                    className=" text-center p-3 px-5 rounded-1 text-white mb-1 d-flex justify-content-center m-auto"
                    variant="warning"
                    type="submit"
                  >
                    Get a quote
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
}

export default Contact;
