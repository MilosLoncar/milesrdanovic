import React, { Component } from 'react';
// import { Button } from 'semantic-ui-react';
// import { Icon } from 'semantic-ui-react';


class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="social--icons">
        <div className="fb">
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/srdanovic.mile"><i className="fab fa-facebook-f"></i></a>
        </div>
        <div className="insta">
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/miledjavo/"><i className="fab fa-instagram"></i></a>
        </div>
        </div>
      </section>
    );
  }
}
  
  
  export default Footer;