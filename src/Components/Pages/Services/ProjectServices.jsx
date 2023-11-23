import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowUpFromGroundWater,
  faMountain,
  faCompassDrafting,
  faTrowelBricks,
  faHelmetSafety,
} from "@fortawesome/free-solid-svg-icons";

function ProjectServices() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="section-services" id="section-services">
      <Container className="py-5">
        <Row>
          <Col xl={4} md={6} sm={12} className="mb-4" data-aos="fade-up">
            <div className="service-item position-relative">
              <div className="icon">
                <FontAwesomeIcon className="i" icon={faMountain} />
              </div>
              <h3>Nesciunt Mete</h3>
              <p>
                Provident nihil minus qui consequatur non omnis maiores. Eos
                accusantium minus dolores iure perferendis tempore et
                consequatur.
              </p>
              <a
                href="service-details.html"
                className="readmore stretched-link"
              >
                Learn more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </Col>
          <Col xl={4} md={6} sm={12} className="mb-4" data-aos="fade-up">
            <div className="service-item position-relative">
              <div className="icon">
                <FontAwesomeIcon
                  className="i"
                  icon={faArrowUpFromGroundWater}
                />
              </div>
              <h3>Nesciunt Mete</h3>
              <p>
                Provident nihil minus qui consequatur non omnis maiores. Eos
                accusantium minus dolores iure perferendis tempore et
                consequatur.
              </p>
              <a
                href="service-details.html"
                className="readmore stretched-link"
              >
                Learn more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </Col>
          <Col xl={4} md={6} sm={12} className="mb-4" data-aos="fade-up">
            <div className="service-item position-relative">
              <div className="icon">
                <FontAwesomeIcon className="i" icon={faCompassDrafting} />
              </div>
              <h3>Nesciunt Mete</h3>
              <p>
                Provident nihil minus qui consequatur non omnis maiores. Eos
                accusantium minus dolores iure perferendis tempore et
                consequatur.
              </p>
              <a
                href="service-details.html"
                className="readmore stretched-link"
              >
                Learn more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </Col>
          <Col xl={4} md={6} sm={12} className="mb-4" data-aos="fade-up">
            <div className="service-item position-relative">
              <div className="icon">
                <FontAwesomeIcon className="i" icon={faTrowelBricks} />
              </div>
              <h3>Nesciunt Mete</h3>
              <p>
                Provident nihil minus qui consequatur non omnis maiores. Eos
                accusantium minus dolores iure perferendis tempore et
                consequatur.
              </p>
              <a
                href="service-details.html"
                className="readmore stretched-link"
              >
                Learn more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </Col>
          <Col xl={4} md={6} sm={12} className="mb-4" data-aos="fade-up">
            <div className="service-item position-relative">
              <div className="icon">
                <FontAwesomeIcon className="i" icon={faHelmetSafety} />
              </div>
              <h3>Nesciunt Mete</h3>
              <p>
                Provident nihil minus qui consequatur non omnis maiores. Eos
                accusantium minus dolores iure perferendis tempore et
                consequatur.
              </p>
              <a
                href="service-details.html"
                className="readmore stretched-link"
              >
                Learn more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </Col>
          <Col xl={4} md={6} sm={12} className="mb-4" data-aos="fade-up">
            <div className="service-item position-relative">
              <div className="icon">
                <FontAwesomeIcon
                  className="i"
                  icon={faArrowUpFromGroundWater}
                />
              </div>
              <h3>Nesciunt Mete</h3>
              <p>
                Provident nihil minus qui consequatur non omnis maiores. Eos
                accusantium minus dolores iure perferendis tempore et
                consequatur.
              </p>
              <a
                href="service-details.html"
                className="readmore stretched-link"
              >
                Learn more <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProjectServices;
