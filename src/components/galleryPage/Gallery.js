import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

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
        {this.props.haveText ? this.props.text : null}
        <div className="image-container">
          {this.props.data.map((image, key) => {
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
            mainSrc={this.props.data[this.state.activeImage]}
            nextSrc={
              this.props.data[
                (this.state.activeImage + 1) % this.props.data.length
              ]
            }
            prevSrc={
              this.props.data[
                (this.state.activeImage + this.props.data.length - 1) %
                  this.props.data.length
              ]
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                activeImage:
                  (this.state.activeImage + this.props.data.length - 1) %
                  this.props.data.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                activeImage:
                  (this.state.activeImage + 1) % this.props.data.length
              })
            }
          />
        )}
      </div>
    );
  }
}

export default Gallery;
