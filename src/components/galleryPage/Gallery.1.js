import React, { Component } from "react";
import galleryBackground from "../../assets/images/gallery-image.jpg";
import { Link } from "react-router-dom";

let galleryImage = {
  width: "100%",
  height: "435px",
  backgroundImage: `url(${galleryBackground})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

class Gallery extends Component {
  render() {
    return (
      <section className="gallery">
        <div className="ballery--background" style={galleryImage} />
        <div className="gallery--info">
          <h1>Galerija</h1>
          <h3>
            <Link to="">Izložbe</Link>
          </h3>
          <h3>
            <Link to="">Gradovi i sela</Link>
          </h3>
          <h3>
            <Link to="">Životinje</Link>
          </h3>
          <h3>
            <Link to="">Nebo</Link>
          </h3>
        </div>
      </section>
    );
  }
}

export default Gallery;
