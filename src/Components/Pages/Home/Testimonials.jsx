import React, { useEffect } from "react";
import Slider from "react-slick";
import { Card, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import team1 from "../Img/testimonials/testimonials-1.jpg";
import team2 from "../Img/testimonials/testimonials-2.jpg";
import team3 from "../Img/testimonials/testimonials-3.jpg";
import team4 from "../Img/testimonials/testimonials-4.jpg";

export default function Testimonials() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const testimonialsData = [
    {
      image: team1,
      name: "John Doe",
      role: "CEO",
      stars: 5,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image: team2,
      name: "Saul Godman",
      role: "Ceo - Founder",
      stars: 5,
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      image: team3,
      name: "Jane Smith",
      role: "Designer",
      stars: 4,
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      image: team4,
      name: "Jane Smith",
      role: "Designer",
      stars: 4,
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1.6,
    slidesToScroll: 1.5,
    responsive: [
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="  m-0 p-0 text-center">{dots}</ul>
      </div>
    ),
  };

  return (
    <section className="testimonials pb-5">
      <Container className="pt-5 mt-5">
        <div className="section-header py-5">
          <h2 className="text-center pt-5 pb-2 our-header" data-aos="fade-up">
            Testimonials
          </h2>
          <p className="text-center">
            Voluptatem quibusdam ut ullam perferendis repellat non ut
            consequuntur est eveniet deleniti fignissimos eos quam
          </p>
        </div>
        <Slider {...settings} className="pb-3">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="px-5 pb-5">
              <Card className="card-1 p-5 ">
                <img src={testimonial.image} alt="" />
                <h3 className="text-start">{testimonial.name}</h3>
                <h4 className="text-start">{testimonial.role}</h4>
                <div className="d-flex py-3">
                  {[...Array(testimonial.stars)].map((_, starIndex) => (
                    <FontAwesomeIcon
                      key={starIndex}
                      icon={faStar}
                      style={{ color: "#feb900" }}
                    />
                  ))}
                </div>
                <p>
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    style={{ color: "#feb900" }}
                  />
                  {testimonial.quote}
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    style={{ color: "#feb900" }}
                  />
                </p>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
}
