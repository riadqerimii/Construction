import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const ScrollButton = () => {
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const showButtonThreshold = 500;

      setButtonVisible(scrollPosition > showButtonThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      variant="primary"
      onClick={scrollToTop}
      className="button-fixed"
      style={{
        background: "#feb900",
        width: "40px",
        height: "40px",
        display: buttonVisible ? "block" : "none",
        position: "fixed",
        bottom: "25px",
        border: "none",
        right: "25px",
        zIndex: 999,
        color: "#000",
      }}
    >
      &#8593;
    </Button>
  );
};

export default ScrollButton;
