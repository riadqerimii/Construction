import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import AOS from "aos";
import "aos/dist/aos.css";
import { faMountain } from "@fortawesome/free-solid-svg-icons";

import image5 from "../Img/alt-services.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Altservices() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="alt-service pb-5" id="alt-service">
      <div className="container">
        <Row className="pt-5 pb-5">
          <Col xl={6} md={12} sm={12} className="px-5 pt-5">
            <img className="img-services" src={image5} alt="" />
          </Col>
          <Col xl={6} md={12} sm={12} className="text-in-card pt-5 ">
            <h3 className=" pb-3">
              Enim quis est voluptatibus aliquid consequatur fugiat
            </h3>
            <span className="border-card"></span>
            <p className="py-3">
              Esse voluptas cumque vel exercitationem. Reiciendis est hic
              accusamus. Non ipsam et sed minima temporibus laudantium. Soluta
              voluptate sed facere corporis dolores excepturi
            </p>
            <div className="px-5">
              <div className="icon-box  ">
                <FontAwesomeIcon icon={faMountain} className="box-icon pt-5 " />
                <h4 className="px-5">Lorem Ipsum</h4>
              </div>
              <p className="px-5">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
              </p>

              <div className="icon-box ">
                <FontAwesomeIcon
                  icon={faMountain}
                  className=" box-icon pt-5 "
                />

                <div>
                  <h4 className="px-5">Nemo Enim</h4>
                </div>
              </div>
              <p className="px-5">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p>

              <div className="icon-box  ">
                <FontAwesomeIcon
                  icon={faMountain}
                  className=" box-icon pt-5 "
                />

                <div>
                  <h4 className="px-5">Dine Pad</h4>
                </div>
              </div>
              <p className="px-5">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p>

              <div className="icon-box ">
                <FontAwesomeIcon
                  icon={faMountain}
                  className=" box-icon pt-5 "
                />

                <div>
                  <h4 className="px-5">Tride clov</h4>
                </div>
              </div>
              <p className="px-5">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Altservices;
