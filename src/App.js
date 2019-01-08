import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/mainPage/Header";
import MainContent from "./components/mainPage/MainContent";
import Footer from "./components/mainPage/Footer";
import AboutContent from "./components/aboutPage/AboutContent";
import Contact from "./components/contactPage/Contact";
import Gallery from "./components/galleryPage/Gallery";
import Navbar from "./components/mainPage/Navbar";
import images from "./assets/images";
// clanci
import politikaLogo from "./assets/images/politika-logo.jpg";
import artInfoLogo from "./assets/images/artinfo-logo.png";
import eZemunLogo from "./assets/images/e-zemun-logo.jpg";
import info from "./assets/images/info-1.jpg";

let dropsText = (
  <div className="drops--text">
    <h1>-kapi u fokusu-</h1>
    <h4>
      "kapi u fokusu" -izloz ba umetnickih fotografija- galerija "stara
      kapetanija" avgust/septembar 2012.godine
    </h4>
    <h4>
      delic atmosfere sa otvaranja izlozbe mozete pogledati na sledecem linku:
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://youtu.be/XoYAdZ-1NrQ"
      >
        kapi u fokusu
      </a>
    </h4>
    <h4>clanci:</h4>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="http://www.politika.rs/sr/clanak/231451/Kapi-u-fokusu"
    >
      <img src={politikaLogo} />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="http://www.artinfo.co.rs/ceo_profil.php?korisnik_id=1710#info_79"
    >
      <img src={artInfoLogo} />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="http://e-zemun.rs/vesti/zemun_vesti/dnevne-vesti/stara-kapetanija-izlozba-fotografija-kapi-u-fokusu/"
    >
      <img src={eZemunLogo} />
    </a>
    <img style={{ marginBottom: "0px" }} src={info} />
    <h4 style={{ marginBottom: "0px" }}>izlozene fotografije</h4>
  </div>
);

let drops = () => {
  return <Gallery haveText={true} data={images.drops} text={dropsText} />;
};

let sky = () => {
  return <Gallery data={images.sky} />;
};

let animals = () => {
  return <Gallery data={images.animals} />;
};

let beograd = () => {
  return <Gallery data={images.belgrade} />;
};

let rovinj = () => {
  return <Gallery data={images.rovinj} />;
};

let uzici = () => {
  return <Gallery data={images.uzici} />;
};

let venecija = () => {
  return <Gallery data={images.venecija} />;
};

let zlatibor = () => {
  return <Gallery data={images.zlatibor} />;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuVisible: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({ menuVisible: !this.state.menuVisible });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header onMenuClick={this.toggleMenu} />
          <Navbar menuVisible={this.state.menuVisible} />
          <Route exact path="/" component={MainContent} />
          <Route path="/about" component={AboutContent} />
          <Route exact path="/gallery/exhibitions" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/gallery/sky" component={sky} />
          <Route exact path="/gallery/animals" component={animals} />
          <Route exact path="/gallery/drops" component={drops} />
          <Route exact path="/gallery/cities/beograd" component={beograd} />
          <Route exact path="/gallery/cities/rovinj" component={rovinj} />
          <Route exact path="/gallery/cities/uzici" component={uzici} />
          <Route exact path="/gallery/cities/venecija" component={venecija} />
          <Route exact path="/gallery/cities/zlatibor" component={zlatibor} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
