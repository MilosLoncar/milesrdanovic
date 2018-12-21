import React, { Component } from "react";
// import Slider from './components/galleryPage/Slider';
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

import data from "./images";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImage: 0,
      isOpen: false
    };
  }

  handleImageOpen = e => {
    this.setState({ activeImage: e.target.id, isOpen: true });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <div className="image-container">
          {data.map((image, key) => {
            return (
              <img
                className="single--image"
                onClick={this.handleImageOpen}
                id={key}
                key={key}
                src={image}
              />
            );
          })}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={data[this.state.activeImage]}
            nextSrc={data[(this.state.activeImage + 1) % data.length]}
            prevSrc={
              data[(this.state.activeImage + data.length - 1) % data.length]
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                activeImage:
                  (this.state.activeImage + data.length - 1) % data.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                activeImage: (this.state.activeImage + 1) % data.length
              })
            }
          />
        )}
      </div>
    );
  }
}

export default Gallery;
