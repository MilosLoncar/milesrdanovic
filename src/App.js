import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/mainPage/Header";
import MainContent from "./components/mainPage/MainContent";
import Footer from "./components/mainPage/Footer";
import AboutContent from "./components/aboutPage/AboutContent";
import Contact from "./components/contactPage/Contact";
import Gallery from "./components/galleryPage/Gallery";
import Slider from "./components/galleryPage/Slider";
import Parent from "./components/Parent";

let nesto = props => {
  return (
    <Parent {...props}>
      <span>CHILD</span>
      <span>CHILD2</span>
      <span>CHILD3</span>
    </Parent>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={MainContent} />
          <Route path="/about" component={AboutContent} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/gallery/exhibitions" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path="/dev" render={nesto} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
