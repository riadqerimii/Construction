import React from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Fullprojects.css";
import Footer from "../Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import projectimg1 from "../../Img/Arlindishpk/Projecttwo/Ferizaj-punime-1.jpg";
import projectimg2 from "../../Img/Arlindishpk/Projecttwo/Arlind-shpk-2.jpg";
import projectimg3 from "../../Img/Arlindishpk/Projecttwo/Ferizaj-punime-3.jpg";

import { faShareSquare } from "@fortawesome/free-regular-svg-icons";

const images = [projectimg1, projectimg2, projectimg3];

function ProjectTwo() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <section id="project-one" className="project-one">
      <Container>
        <Row className="py-5 d-flex justify-content-between">
          <Col
            md={4}
            sm={12}
            className="  go-home-button text-start  text-white"
            onClick={handleGoBack}
          >
            &#8592; Kthehu
          </Col>
          <Col md={4} sm={12} className="text-center">
            <h1
              style={{
                fontSize: "40px",
                color: "#fff",
              }}
              className="text-start px-2"
            >
              ARLINDI SH.P.K
            </h1>
          </Col>
          <Col md={4} sm={12} className="text-end text-phone">
            <FontAwesomeIcon
              style={{
                fontSize: "25px",
                marginRight: "10px",
                color: "#fff",
              }}
              icon={faPhone}
            />
            <a href="tel:+383 49 961 853">049 961 853</a>
          </Col>
        </Row>
      </Container>
      <Container className="project-one-post h-100 text-center py-5">
        <Row className="py-5">
          <Col md={6} sm={12}>
            <div className="project1-header text-center text-start">
              <h1>“Përfundimi i punimeve...”</h1>
              <h4 className="py-3">
                Përfundimi i punimeve në minisheshin e ri në qendrën e Ferizajt.
              </h4>
              <button className="btn my-3 button-project">
                <FontAwesomeIcon icon={faShareSquare} />
                Share
              </button>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="project-header-carousel">
              <Carousel interval={null}>
                {images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img src={image} alt={`Slide ${index + 1}`} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </section>
  );
}

export default ProjectTwo;
