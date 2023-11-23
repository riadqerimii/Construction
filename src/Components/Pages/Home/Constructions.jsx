import React, { useEffect } from "react";

import { Button, Card, Col, Row } from "react-bootstrap";

import AOS from "aos";
import "aos/dist/aos.css";

import imgone from "../Img/constructions-1.jpg";
import imgtwo from "../Img/constructions-2.jpg";
import imgthree from "../Img/constructions-3.jpg";
import imgfour from "../Img/constructions-4.jpg";
import { useNavigate } from "react-router-dom";

function Constructions() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/projects");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="container section-header text-center">
      <h2 className=" construction-header pt-5" data-aos="fade-up">
        Constructions
      </h2>
      <p data-aos="fade-up">
        Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro
        nihil id ratione ea sunt quis dolorem dolore earum
      </p>

      <Row className="pt-5 ">
        <Col lg={6} md={6} sm={12}>
          <Card className="rounded-0" data-aos="fade-up">
            <Row>
              <Col xs={12} lg={6}>
                <Card.Img
                  variant="top"
                  src={imgone}
                  alt="Card Image"
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0",
                  }}
                />
              </Col>
              <Col xs={12} lg={6}>
                <Card.Body className="p-3 text-start">
                  <Card.Title className="py-3">
                    <h4>Eligendi omnis sunt veritatis</h4>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Fuga in dolorum et iste et culpa. Commodi possimus
                      nesciunt modi voluptatem placeat deleniti adipisci. Cum
                      delectus doloribus non veritatis. Officia temporibus illo
                      magnam. Dolor eos et.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col lg={6} md={6} sm={12}>
          <Card className="rounded-0" data-aos="fade-up">
            <Row>
              <Col xs={12} lg={6}>
                <Card.Img
                  variant="top"
                  src={imgtwo}
                  alt="Card Image"
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0",
                  }}
                />
              </Col>
              <Col xs={12} lg={6}>
                <Card.Body className="p-3 text-start">
                  <Card.Title className="py-3">
                    <h4>Possimus ut sed velit assumenda</h4>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Sunt deserunt maiores voluptatem autem est rerum
                      perferendis rerum blanditiis. Est laboriosam qui iste
                      numquam laboriosam voluptatem architecto. Est laudantium
                      sunt at quas aut hic. Eum dignissimos.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Second Row */}
      <Row className="py-5 mb-5">
        {/* Third Card */}
        <Col lg={6} md={6} sm={12}>
          <Card className="rounded-0" data-aos="fade-up">
            <Row>
              <Col xs={12} lg={6}>
                <Card.Img
                  variant="top"
                  src={imgthree}
                  alt="Card Image"
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0",
                  }}
                />
              </Col>
              <Col xs={12} lg={6}>
                <Card.Body className="p-3 text-start">
                  <Card.Title className="py-3">
                    <h4>Error beatae dolor inventore aut</h4>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim
                      molestiae facilis numquam quae quaerat ipsam omnis. Neque
                      debitis ipsum at architecto officia laboriosam odit. Ut
                      sunt temporibus nulla culpa.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Fourth Card */}
        <Col lg={6} md={6} sm={12}>
          <Card className="rounded-0" data-aos="fade-up">
            <Row>
              <Col xs={12} lg={6}>
                <Card.Img
                  variant="top"
                  src={imgfour}
                  alt="Card Image"
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0",
                  }}
                />
              </Col>
              <Col xs={12} lg={6}>
                <Card.Body className="p-3 text-start ">
                  <Card.Title className="py-3">
                    <h4>Expedita voluptas ut ut nesciunt</h4>
                  </Card.Title>
                  <Card.Text>
                    <p>
                      Aut est quidem doloremque voluptatem magnam quis excepturi
                      vero quia. Eum eos doloremque architecto illo at beatae
                      dolore. Fugiat suscipit et sint ratione dolores. Aut
                      aliquid ea dolores libero nobis.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <div>
        <Button
          style={{
            backgroundColor: "#feb900",
            border: "none",
            padding: "0.8rem 2rem",
            color: "#fff",
            fontSize: "1.2rem",
          }}
          className="btn  rounded-0"
          onClick={handleButtonClick}
        >
          More projects
        </Button>
      </div>
    </section>
  );
}

export default Constructions;
