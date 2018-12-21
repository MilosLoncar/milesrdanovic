import React, { Component } from "react";
import Background from "../../assets/images/main-image.jpg";
import Parent from "../Parent";

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
          <Parent>
            <div>asdadsdsa</div>
          </Parent>
          <h3 className="text--serb">
            Zdravo svima! Dobrodošli na moj sajt. Nadam se da ćete uživati...
          </h3>
          <h3 className="text--eng">
            Hello everyone! Welcome to my website. I hope you'll enjoy it...
          </h3>
        </div>
      </section>
    );
  }
}

export default MainContent;
