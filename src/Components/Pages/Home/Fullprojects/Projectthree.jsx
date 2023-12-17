import React from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Fullprojects.css";
import Footer from "../Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import projectimg1 from "../../Img/Arlindishpk/Projectthree/Shkolla-asfalltim-1.jpg";
import projectimg2 from "../../Img/Arlindishpk/Projectthree/Shkolla-asfalltim-2.jpg";
import projectimg3 from "../../Img/Arlindishpk/Projectthree/Arlind-shpk-3.jpg";

import { faShareSquare } from "@fortawesome/free-regular-svg-icons";

const images = [projectimg1, projectimg2, projectimg3];

function ProjectThree() {
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
            className="  go-home-button text-start  text-white"
            onClick={handleGoBack}
          >
            &#8592; Kthehu
          </Col>
          <Col md={4} className="text-center">
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
          <Col md={4} className="text-end text-phone">
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
              <h1>“𝑨𝒔𝒇𝒂𝒍𝒕𝒊𝒎𝒊 𝒊 𝒓𝒓𝒖𝒈ë𝒗𝒆 𝒏ë: Mirosal, Ferizaj...”</h1>
              <h4 className="py-3">
                Asfaltimi tek shkolla “Ali Hadri” Mirash dhe Asfaltimi tek
                shkolla teknike e mesme “Pjetër Bogdani” Ferizaj.
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

export default ProjectThree;
