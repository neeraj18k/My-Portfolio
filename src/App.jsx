import { Fragment } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import ParticlesBackground from "./ParticlesBackground";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education";
import CertificationsWorkshops from "./components/CertificationsWorkshops";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      {/* Fixed navbar + global particle layer */}
      <Navbar />
      <ParticlesBackground />

      {/* Home section with its own background */}
      <Home />

      {/* Rest of site wrapped in circuit background */}
      <div className="animated-bg">
        <About />
        <Skills />
        <Hobbies />
        <PersonalDetails />
        <Education />
        <CertificationsWorkshops />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
