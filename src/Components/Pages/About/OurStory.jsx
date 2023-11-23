import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutimg from "../Img/about.jpg";

import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import AOS from "aos";

function OurStory() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const youtubeLink = "https://www.youtube.com/your_video_id_here";
  return (
    <section>
      <Container className="pt-5">
        <Row className="our-story position-relative pt-5">
          <Col lg={7} md={12} className=" img-col" data-aos="fade-up">
            <img src={aboutimg} alt="About" />
          </Col>
          <Col
            lg={7}
            md={12}
            className="position-relative text-col px-5 "
            data-aos="fade-up"
          >
            <h2 className="pt-5 m-5 about-h2">Consequatur eius et magnam</h2>
            <div className="text-content bg-light p-5 ml-5 ">
              <h4 className="about-h4">EST 1988</h4>
              <h3 className="about-h3">Our Story</h3>
              <p className="p-2">
                Inventore aliquam beatae at et id alias. Ipsa dolores amet
                consequuntur minima quia maxime autem. Quidem id sed ratione.
                Tenetur provident autem in reiciendis rerum at dolor. Aliquam
                consectetur laudantium temporibus dicta minus dolor.
              </p>
              <FontAwesomeIcon
                style={{
                  color: "#feb900",
                  fontSize: "20px",
                  paddingRight: "5px",
                }}
                icon={faCheckDouble}
              />
              <span>Ullamco laboris nisi ut aliquip ex ea commo</span>
              <br />
              <FontAwesomeIcon
                style={{
                  color: "#feb900",
                  fontSize: "20px",

                  paddingRight: "5px",
                }}
                icon={faCheckDouble}
              />
              <span>Ullamco laboris nisi ut aliquip ex ea commo</span>
              <br />
              <FontAwesomeIcon
                style={{
                  color: "#feb900",
                  fontSize: "20px",
                  paddingRight: "5px",
                }}
                icon={faCheckDouble}
              />
              <span>Ullamco laboris nisi ut aliquip ex ea commo</span>
              <br />
              <p className="pt-4">
                Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non
                nesciunt suscipit repellendus porro in quo eveniet. Molestias in
                maxime doloremque.
              </p>
              <a
                style={{
                  fontSize: "32px",
                  color: "#feb900",
                  textDecoration: "none",
                }}
                href={youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  style={{
                    marginRight: "10px",
                  }}
                  icon={faCirclePlay}
                />
                Watch Video
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OurStory;
