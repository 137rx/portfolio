import React from 'react';
import Nav from "./Nav.js"
import Banner from "./Banner.js"
import About from "./About.js"
import Projects from "./Projects.js"
import Contact from "./Contact.js"
import Footer from "./Footer.js"
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner/>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
