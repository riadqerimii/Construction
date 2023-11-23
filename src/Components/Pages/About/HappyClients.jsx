// StatsCounter.js

import React, { useState, useEffect } from "react";
import AOS from "aos";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faHeadphones,
  faUsers,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const nextCount = prevCount + 15;
        return nextCount <= end ? nextCount : prevCount;
      });
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [end]);

  return <span className="purecounter">{count}</span>;
};

const StatsCounter = () => {
  return (
    <section id="stats-counter" className="stats-counter section-bg">
      <div className="container">
        <div className="row  text-center pt-5 my-5 ">
          <div className="col-lg-3 col-md-6  p-2 justify-content-center  d-flex m-auto shadow-sm  ">
            <p className="m-5" data-aos="fade-up">
              <FontAwesomeIcon
                icon={faSmile}
                style={{
                  width: "50px",
                  height: "50px",
                  justifyContent: "center",
                  margin: "auto",
                  display: "flex",
                  flex: "column",
                  textAlign: "center",
                  paddingTop: "20px",
                  color: " #feb900",
                }}
              />
            </p>
            <div
              className="pt-5"
              style={{
                textAlign: "center",
                fontSize: "32px",
                color: "#feb900  ",
              }}
            >
              <Counter end={225} />
              <p
                className="pt-2"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#161616",
                }}
              >
                Happy Clients
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6  p-2 justify-content-center  d-flex m-auto  shadow ">
            <p className="m-5" data-aos="fade-up">
              <FontAwesomeIcon
                icon={faBook}
                style={{
                  width: "50px",
                  height: "50px",
                  justifyContent: "center",
                  margin: "auto",
                  display: "flex",
                  flex: "column",
                  textAlign: "center",
                  paddingTop: "20px",
                  color: " #feb900",
                }}
              />
            </p>
            <div
              className="pt-5"
              style={{
                textAlign: "center",
                fontSize: "32px",
                color: "#feb900  ",
              }}
            >
              <Counter end={521} />
              <p
                className="pt-2"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#161616",
                }}
              >
                Projects
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6  p-2 justify-content-center  d-flex m-auto  shadow-sm ">
            <p className="m-5" data-aos="fade-up">
              <FontAwesomeIcon
                icon={faHeadphones}
                style={{
                  width: "50px",
                  height: "50px",
                  justifyContent: "center",
                  margin: "auto",
                  display: "flex",
                  flex: "column",
                  textAlign: "center",
                  paddingTop: "20px",
                  color: " #feb900",
                }}
              />
            </p>
            <div
              className="pt-5"
              style={{
                textAlign: "center",
                fontSize: "32px",
                color: "#feb900  ",
              }}
            >
              <Counter end={1463} />
              <p
                className="pt-2"
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "#161616",
                }}
              >
                Hours of Support
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 p-2 justify-content-center  d-flex m-auto  shadow ">
            <p className="m-5" data-aos="fade-up">
              <FontAwesomeIcon
                icon={faUsers}
                style={{
                  width: "50px",
                  height: "50px",
                  justifyContent: "center",
                  margin: "auto",
                  display: "flex",
                  flex: "column",
                  textAlign: "center",
                  paddingTop: "20px",
                  color: " #feb900",
                }}
              />
            </p>
            <div
              className="pt-5"
              style={{
                textAlign: "center",
                fontSize: "32px",
                color: "#feb900  ",
              }}
            >
              <Counter end={15} />
              <p
                className="pt-2"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#161616",
                }}
              >
                Hard Workers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
