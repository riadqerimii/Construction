import React, { useEffect, useState } from "react";
import AOS from "aos";

import { Col, Container, Row } from "react-bootstrap";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import projectData from "./Dataprojects";
import {
  faLink,
  faMagnifyingGlassPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Ourprojects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const tabsContent = projectData;

  const [activeTab, setActiveTab] = useState(1);
  const [clickedImage, setClickedImage] = useState(null);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const handleFullCarouselClick = (images) => {
    setClickedImage(images);
    setIsCarouselOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeCarousel = () => {
    setClickedImage(null);
    setIsCarouselOpen(false);
    document.body.style.overflow = "auto";
  };

  // const handleAnotherPageClick = () => {
  //   console.log("Navigate to another page");
  //   // Handle the navigation to another page here
  // };

  return (
    <section className="section-our-project">
      <div className="section-header pt-5">
        <h2
          className="text-center pt-5 pb-2 services-header"
          data-aos="fade-up"
        >
          Our Projects
        </h2>
        <p className="text-center">
          Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur
          est eveniet deleniti fignissimos eos quam
        </p>
      </div>
      <Container>
        <Row>
          <Col md={12} className="py-5 justify-content-center d-flex">
            {Object.keys(tabsContent).map((tabNumber) => (
              <li
                key={tabNumber}
                className={`nav-item ${
                  activeTab === tabNumber ? "active" : ""
                }`}
              >
                <div onClick={() => setActiveTab(tabNumber)} className="m-2">
                  <h5>{tabsContent[tabNumber].title}</h5>
                </div>
              </li>
            ))}
          </Col>
        </Row>
        <div
          className={`tab-pane ${activeTab === 1 && "active show"}`}
          id={`tab-${activeTab}`}
        >
          <Row>
            {tabsContent[activeTab].images.map((image, index) => (
              <Col key={index} className="my-2" md={4} sm={6}>
                <div className="image-container">
                  <img className="w-100 h-100" src={image} alt="" />
                  <div
                    className="overlay-links"
                    onClick={() =>
                      handleFullCarouselClick(tabsContent[activeTab].images)
                    }
                  >
                    <div className="overlay-links">
                      <a href="#full-carousel-section" className="hover-link">
                        <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                      </a>
                      <a
                        href={tabsContent[activeTab].link}
                        className="details-link"
                      >
                        <FontAwesomeIcon icon={faLink} />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        {isCarouselOpen && (
          <div
            id="full-carousel-section"
            className="full-width-carousel active"
          >
            <Gallery
              items={clickedImage.map((image, index) => ({
                original: image,
              }))}
              showBullets={false}
              showFullscreenButton={false}
              showPlayButton={false}
              styles={{
                gallery: { background: "transparent" },
              }}
              renderCustomControls={() => (
                <button
                  className="close-carousel"
                  onClick={() => closeCarousel()}
                >
                  &times;
                </button>
              )}
            />
          </div>
        )}
      </Container>
    </section>
  );
}

export default Ourprojects;
