import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import imgteam1 from "../Img/team/team-1.jpg";
import imgteam2 from "../Img/team/team-2.jpg";
import imgteam3 from "../Img/team/team-3.jpg";
import imgteam4 from "../Img/team/team-4.jpg";
import imgteam5 from "../Img/team/team-5.jpg";
import imgteam6 from "../Img/team/team-6.jpg";
import { useEffect } from "react";
import AOS from "aos";

const imgTeam = [
  {
    image: imgteam1,
    id: 1,
    name: "Walter White",
    position: "Chief Executive Officer",
    text: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
  },
  {
    image: imgteam2,
    id: 2,
    name: "Sarah Jhonson",
    position: "Product Manager",
    text: "Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut",
  },
  {
    image: imgteam3,
    id: 3,
    name: "William Anderson",
    position: "CTO",
    text: "llum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui",
  },
  {
    image: imgteam4,
    id: 4,
    name: "Amanda Jepson",
    position: "Accountant",
    text: "Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut",
  },
  {
    image: imgteam5,
    id: 5,
    name: "Brian Doe",
    position: "Marketing",
    text: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
  },
  {
    image: imgteam6,
    id: 6,
    name: "Josepha Palas",
    position: "Operation",
    text: "Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut",
  },
];

function Team() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="about-team">
      <div className="section-header pt-5" data-aos="fade-up">
        <h2
          className="text-center pt-5 pb-2 services-header"
          data-aos="fade-up"
        >
          Our Team
        </h2>
        <p className="text-center">
          Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur
          est eveniet deleniti fignissimos eos quam
        </p>
      </div>

      <Container className="py-5">
        <Row>
          {imgTeam.map((teamMember) => (
            <Col key={teamMember.id} xl={4} md={6} sm={12}>
              <Card
                className="cards-team position-relative "
                data-aos="fade-up"
              >
                <Card.Img
                  variant="top"
                  src={teamMember.image}
                  className="rounded-circle d-flex m-auto"
                />

                <Card.Body className="text-center">
                  <Card.Title className="h5">{teamMember.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {teamMember.position}
                  </Card.Subtitle>
                  <Card.Text className="text-muted">
                    {teamMember.text}
                  </Card.Text>
                </Card.Body>

                <div className="social-icons">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Team;
