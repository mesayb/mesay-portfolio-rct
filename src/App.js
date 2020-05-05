import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav />
      <Header />
      <AboutMe />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
