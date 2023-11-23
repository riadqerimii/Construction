import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Contact from "./Components/Pages/Contact";
import Projects from "./Components/Pages/Projec/Projects";
import Services from "./Components/Pages/Services/Services";

import Projectone from "./Components/Pages/Home/Fullprojects/Pojectone";
import Projecttwo from "./Components/Pages/Home/Fullprojects/Projecttwo";
import Projectthree from "./Components/Pages/Home/Fullprojects/Projectthree";
import Error from "./Components/Pages/Error";

function App() {
  const pagesWithNavbar = ["/", "/about", "/contact", "/projects", "/services"];
  return (
    <Router>
      <Routes>
        {pagesWithNavbar.map((path) => (
          <Route
            key={path}
            path={path}
            element={
              <>
                <Navbar />
                {path === "/" && <Home />}
                {path === "/about" && <About />}
                {path === "/contact" && <Contact />}
                {path === "/projects" && <Projects />}
                {path === "/services" && <Services />}
              </>
            }
          />
        ))}
        <Route path="/projectone" element={<Projectone />} />
        <Route path="/projecttwo" element={<Projecttwo />} />
        <Route path="/projectthree" element={<Projectthree />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
