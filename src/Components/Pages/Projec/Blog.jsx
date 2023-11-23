import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { faFolder } from "@fortawesome/free-solid-svg-icons";

// Inside your component

import imageblog1 from "../Img/blog/blog-1.jpg";
import imageblog2 from "../Img/blog/blog-2.jpg";
import imageblog3 from "../Img/blog/blog-3.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

function Blog() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="blog">
      <Container>
        <div className="section-header py-5">
          <h2 className="text-center pt-5 pb-2 our-header" data-aos="fade-up">
            Recent Blog Posts
          </h2>
          <p className="text-center">
            Voluptatem quibusdam ut ullam perferendis repellat non ut
            consequuntur est eveniet deleniti fignissimos eos quam
          </p>
        </div>

        <Row className="blog-img pb-5">
          <Col md={6} xl={4}>
            <Card className=" card-blog rounded-0" data-aos="fade-up">
              <img src={imageblog1} alt="img" />
              <span className="span-1">December12</span>
              <Card.Body>
                <h3 className="p-2">
                  Quia assumenda est et veritati tirana ploder
                </h3>
              </Card.Body>
              <Card.Text className="d-flex px-3">
                <FontAwesomeIcon
                  style={{
                    color: "#feb900",
                    paddingTop: "5px",
                    marginLeft: "2px",
                  }}
                  icon={faUser}
                  className="px-1"
                />
                <p className="pb-1 px-2">Julia Parker</p>
                <span className="px-3">/</span>
                <FontAwesomeIcon
                  style={{
                    color: "#feb900",
                    paddingTop: "5px",
                    marginLeft: "2px",
                  }}
                  icon={faFolder}
                />
                <p className="pb-1 mx-2">Politics</p>
              </Card.Text>
              <div className="link-blog px-4 mb-4">
                <hr />
                <a href="/">
                  Read more
                  <span className="arrow px-1">&#8594;</span>
                </a>
              </div>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card className=" card-blog rounded-0" data-aos="fade-up">
              <img src={imageblog2} alt="img" />
              <span className="span-2">July5</span>
              <Card.Body>
                <h3 className="p-2">
                  Et repellendus molestiae qui est sed omnis
                </h3>
              </Card.Body>
              <Card.Text className="d-flex px-3 ">
                <FontAwesomeIcon
                  style={{
                    color: "#feb900",
                    paddingTop: "5px",
                    marginLeft: "2px",
                  }}
                  icon={faUser}
                  className="px-1"
                />
                <p className="pb-1 px-">Maria Douglas</p>
                <span className="px-3">/</span>
                <FontAwesomeIcon
                  style={{
                    color: "#feb900",
                    paddingTop: "5px",
                    marginLeft: "2px",
                  }}
                  icon={faFolder}
                />
                <p className="pb-1 mx-2">Sports</p>
              </Card.Text>
              <div className="link-blog px-4 mb-4">
                <hr />

                <a href="/">
                  Read more
                  <span className="arrow px-1">&#8594;</span>
                </a>
              </div>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card className=" card-blog rounded-0" data-aos="fade-up">
              <img src={imageblog3} alt="img" />
              <span className="span-3">September05</span>
              <Card.Body>
                <h3 className="p-2">
                  Quia assumenda est et veritati tirana ploder
                </h3>
              </Card.Body>
              <Card.Text className="d-flex px-3">
                <FontAwesomeIcon
                  style={{
                    color: "#feb900",
                    paddingTop: "5px",
                    marginLeft: "2px",
                  }}
                  icon={faUser}
                  className="px-1"
                />
                <p className="pb-1 px-2">Lisa Hunter</p>
                <span className="px-3">/</span>
                <FontAwesomeIcon
                  style={{
                    color: "#feb900",
                    paddingTop: "5px",
                    marginLeft: "2px",
                  }}
                  icon={faFolder}
                />
                <p className="pb-1 mx-2">Economics</p>
              </Card.Text>
              <div className="link-blog px-4 mb-4">
                <hr />

                <a href="/">
                  Read more
                  <span className="arrow px-1">&#8594;</span>
                </a>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Blog;
