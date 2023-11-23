import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import featuresone from "../Img/features-1.jpg";
import featuretwo from "../Img/features-2.jpg";
import featurethree from "../Img/features-3.jpg";
import featurefour from "../Img/features-4.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

function Features() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <section className="features">
      <Container className="container pb-5">
        <ul className="  pt-5 nav row g-4 d-flex">
          <li className={` nav-item col-3  ${activeTab === 1 && "active"}`}>
            <div
              className="nav-link-links  "
              onClick={() => handleTabClick(1)}
              data-bs-toggle="tab"
              data-bs-target="#tab-1"
            >
              <h4 className="text-center">Modisit</h4>
            </div>
          </li>
          <li className={`nav-item col-3 ${activeTab === 2 && "active"}`}>
            <div
              className="nav-link-links"
              onClick={() => handleTabClick(2)}
              data-bs-toggle="tab"
              data-bs-target="#tab-2"
            >
              <h4 className="text-center">Praesenti</h4>
            </div>
          </li>
          <li className={`nav-item col-3 ${activeTab === 3 && "active"}`}>
            <div
              className="nav-link-links"
              onClick={() => handleTabClick(3)}
              data-bs-toggle="tab"
              data-bs-target="#tab-3"
            >
              <h4 className="text-center">Explica</h4>
            </div>
          </li>
          <li className={`nav-item col-3  ${activeTab === 4 && "active"}`}>
            <div
              className="nav-link-links"
              onClick={() => handleTabClick(4)}
              data-bs-toggle="tab"
              data-bs-target="#tab-4"
            >
              <h4 className="text-center">Nostrum</h4>
            </div>
          </li>
        </ul>

        <div className="tab-content pt-5">
          <div
            className={`tab-pane ${activeTab === 1 && "active show"}`}
            id="tab-1"
          >
            <Row>
              <Col
                className="pt-5"
                lg={6}
                order={{ xs: 2, lg: 1 }}
                mt={{ xs: 3, lg: 0 }}
                d-flex
                flex-column
                justify-content-center
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>Voluptatem dignissimos provident</h3>
                <div className="border-bot"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="p-0">
                  <li>
                    <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                </ul>
              </Col>
              <Col
                lg={6}
                order={{ xs: 1, lg: 2 }}
                text-center
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img className="w-100  h-100" src={featuresone} alt="" />
              </Col>
            </Row>
          </div>

          <div
            className={`tab-pane ${activeTab === 2 && "active show"}`}
            id="tab-2"
          >
            <Row>
              <Col
                className="pt-5"
                lg={6}
                order={{ xs: 2, lg: 1 }}
                mt={{ xs: 3, lg: 0 }}
                d-flex
                flex-column
                justify-content-center
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>Voluptatibus commodi accusamu</h3>
                <div className="border-bot"></div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="p-0">
                  <li>
                    <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                </ul>
              </Col>
              <Col
                lg={6}
                order={{ xs: 1, lg: 2 }}
                text-center
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img className="w-100 h-100" src={featuretwo} alt="" />
              </Col>
            </Row>
          </div>

          <div
            className={`tab-pane ${activeTab === 3 && "active show"}`}
            id="tab-3"
          >
            <Row>
              <Col
                className="pt-5"
                lg={6}
                order={{ xs: 2, lg: 1 }}
                mt={{ xs: 3, lg: 0 }}
                d-flex
                flex-column
                justify-content-center
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>Neque exercitationem debitis</h3>
                <div className="border-bot"></div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="p-0">
                  <li>
                    <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                </ul>
              </Col>
              <Col
                lg={6}
                order={{ xs: 1, lg: 2 }}
                text-center
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img className="w-100  h-100" src={featurethree} alt="" />
              </Col>
            </Row>
          </div>
          <div
            className={`tab-pane ${activeTab === 4 && "active show"}`}
            id="tab-4"
          >
            <Row>
              <Col
                className="pt-5"
                lg={6}
                order={{ xs: 2, lg: 1 }}
                mt={{ xs: 3, lg: 0 }}
                d-flex
                flex-column
                justify-content-center
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>Neque exercitationem debitis</h3>
                <div className="border-bot "></div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="p-0">
                  <li>
                    <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                </ul>
              </Col>
              <Col
                lg={6}
                order={{ xs: 1, lg: 2 }}
                text-center
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img className="w-100  h-100" src={featurefour} alt="" />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Features;
