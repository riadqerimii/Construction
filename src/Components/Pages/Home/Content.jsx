import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

function Content() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Container fluid className=" quote">
      <div className="container">
        <Row className="pt-5 mt-5 ">
          <Col md={12} xl={6} className="p-5 m-auto">
            <h3 className="my-5 content" data-aos="fade-up">
              Minus hic non reiciendis ea possimus at quia.
            </h3>
            <div className="div-border2 mb-5"></div>
            <p
              className="pt-3 "
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              Rem id rerum. Debitis deserunt quidem delectus expedita ducimus
              dolor. Aut iusto ipsa. Eos ipsum nobis ipsa soluta itaque
              perspiciatis fuga ipsum perspiciatis. Eum amet fugiat totam nisi
              possimus ut delectus dicta.
            </p>
            <p className="pt-3" data-aos="fade-up">
              Aliquam velit deserunt autem. Inventore et saepe. Tenetur suscipit
              eligendi labore culpa eos. Deserunt porro magni qui necessitatibus
              dolorem at animi cupiditate.
            </p>
          </Col>
          <Col md={12} xl={6} className="card-container p-5 ">
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
      </div>
    </Container>
  );
}

export default Content;
