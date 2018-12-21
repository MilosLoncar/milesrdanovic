import React, { Component } from "react";
import Background from "../../assets/images/main-image.jpg";
import H3Components from "../H3Components";

let backgroundImage = {
  width: "100%",
  height: "610px",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "center"
};

class MainContent extends Component {
  render() {
    return (
      <section className="main--content" style={backgroundImage}>
        <div className="main--text">
          <h1>Dobrodošli / Welcome</h1>
          <H3Components
            lang="serb"
            text="Zdravo svima! Dobrodošli na moj sajt. Nadam se da ćete uživati..."
          />
          <H3Components
            lang="eng"
            text="Hello everyone! Welcome to my website. I hope you'll enjoy it..."
          />
        </div>
      </section>
    );
  }
}

export default MainContent;
