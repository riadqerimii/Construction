import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section fluid id="footer" className="footer ">
      <Container className="  container-footer  ">
        <Row className="">
          <Col lg={4} md={6} className="pt-5">
            <h1 className="text-white upconstruction">UpConstruction</h1>
            <p className="text-white pt-5">
              A108 Adam Street <br />
              NY 535022, USA
              <br />
              <br />
              <strong>Phone</strong> +1 5589 55488 55 <br />
              <strong>Email</strong>info@example.com <br />
            </p>
            <div className="social-links d-flex gap-2 pt-5">
              <FontAwesomeIcon
                className="p-2 icons"
                icon={faTwitter}
                size="2x"
                style={{
                  color: "white",
                }}
              />
              <FontAwesomeIcon
                className="p-2 icons"
                icon={faInstagram}
                size="2x"
                style={{
                  color: "white",
                }}
              />
              <FontAwesomeIcon
                className="p-2 icons "
                icon={faFacebook}
                size="2x"
                style={{
                  color: "white",
                }}
              />
              <FontAwesomeIcon
                className=" icons p-2"
                icon={faLinkedin}
                size="2x"
                style={{
                  color: "white",
                }}
              />
            </div>
          </Col>
          <Col lg={2} md={3} className="footer-links pt-5">
            <h4 className="text-white pt-2 ">Useful Links</h4>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/About">About us</a>
            </li>
            <li>
              <a href="/Services">Services</a>
            </li>
            <li>
              <a href="#.">Terms of services</a>
            </li>
            <li>
              <a href="/.">Privacy policy</a>
            </li>
          </Col>
          <Col lg={2} md={3} className="footer-links pt-5">
            <h4 className="text-white pt-2 ">Our Services</h4>
            <li>
              <a href="/">Web Design</a>
            </li>
            <li>
              <a href="/">Web Development</a>
            </li>
            <li>
              <a href="/">Product Management</a>
            </li>
            <li>
              <a href="/">Marketing</a>
            </li>
            <li>
              <a href="/">Graphic Design</a>
            </li>
          </Col>
          <Col lg={2} md={3} className="footer-links pt-5">
            <h4 className="text-white pt-2 ">Hic solutasetp</h4>
            <li>
              <a href="/">Molestiae accusamus iure</a>
            </li>
            <li>
              <a href="/About">Excepturi dignissimos</a>
            </li>
            <li>
              <a href="/Services">Suscipit distinctio</a>
            </li>
            <li>
              <a href="/">Dilecta</a>
            </li>
            <li>
              <a href="/">Sit quas consectetur</a>
            </li>
          </Col>
          <Col lg={2} md={3} className="footer-links pt-5">
            <h4 className="text-white pt-2 ">Nobis illum</h4>
            <li>
              <a href="/">Ipsam</a>
            </li>
            <li>
              <a href="/">Nobis illum</a>
            </li>
            <li>
              <a href="/">Ipsam</a>
            </li>
            <li>
              <a href="/">Terms Nobis</a>
            </li>
            <li>
              <a href="/">Nobis policy</a>
            </li>
          </Col>
        </Row>
        <hr className="text-white mt-5" />
        <div className="footer-legal text-center text-white ">
          © Copyright
          <strong>UpConstruction</strong>.All Rights Reserved <br />
          Designed by ....
        </div>
      </Container>
    </section>
  );
}

export default Footer;
