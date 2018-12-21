import React, { Component } from 'react'

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }


  goToPrevSlide = () => {

  }

  goToNextSlide = () => {
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    // ovo nece ici ako je uslov gore zadovoljen
    this.setState(prevState => ({
      curentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }


  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  
  render() {
    return (
      <div className="slider">
        <div className="slider-wrapper" style={{
          transform: `translateX(${this.state.translateValue}px)`,
          transition: 'transform ease-out 0.45s'
        }}>
        


        {
          this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))
        }
        
        </div>


        
        <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        <RightArrow goToNextSlide={this.goToNextSlide} />
        
      </div>
    )
  }
}

const Slide = ({image}) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide" style={styles}></div>
}


const RightArrow = (props) => {
  return (
    <div className="nextArrow">
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );
}

const LeftArrow = (props) => {
  return (
    <div className="backArrow">
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default Slider;

  

