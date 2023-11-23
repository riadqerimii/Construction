import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import image1 from "../Img/Arlindishpk/Projectone/Arlindi-shpk-1.jpg";
import image2 from "../Img/Arlindishpk/Projecttwo/Arlind-shpk-2.jpg";
import image3 from "../Img/Arlindishpk/Projectthree/Arlind-shpk-3.jpg";

function Carouselhome() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const carouselItems = [
    {
      image: image1,
      id: 1,
      buttonText: "Shiko me shume",
      buttonLink: "/projectone",
      text: "“𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐢𝐧 𝐩𝐫𝐨𝐠𝐫𝐞𝐬𝐬...”",
      description: " K𝐨𝐦𝐮𝐧𝐚 “𝐅𝐞𝐫𝐢𝐳𝐚𝐣”...",
    },
    {
      image: image2,
      id: 2,
      buttonText: "View Projects",
      buttonLink: "/projecttwo",
      text: "“Përfundimi i punimeve...”",
      description: " Në qendrën e ”Ferizajt..”",
    },
    {
      image: image3,
      id: 3,
      buttonText: "Contact Us",
      buttonLink: "/projectthree",
      text: "“Asfaltimi...”",
      description: " tek shkolla “Ali Hadri” Mirash...",
    },
  ];

  const handleButtonClick = (buttonLink) => {
    navigate(buttonLink);
  };

  return (
    <div id="hero" className="hero  position-relative">
      <Carousel id="hero-carousel" interval={5000}>
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id} style={{ height: "100vh" }}>
            <div className="img-overlay"></div>
            <img
              src={item.image}
              alt={`Slide ${item.id}`}
              className="d-block w-100 img-carousel-hero"
            />
            <div className="text-container container">
              <h2
                className=" text-start   hero-h2-text p-1"
                data-aos="fade-down"
              >
                {item.text}
              </h2>
              <p className="text-start px-2">{item.description}</p>
              <button
                data-aos="fade-up"
                onClick={() => handleButtonClick(item.buttonLink)}
                className="btn mt-5   button-started"
              >
                {item.buttonText}
              </button>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Carouselhome;
