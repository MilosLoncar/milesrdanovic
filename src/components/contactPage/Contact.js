import React, { Component } from 'react';
import contactBackground from '../../assets/images/contact-image.jpg';
import phoneLogo from '../../assets/images/phone-logo.jpg';
import emailLogo from '../../assets/images/email-logo.png';
import skypeLogo from '../../assets/images/skype-logo.png';
import facebookLogo from '../../assets/images/facebook-logo.png';
import instagramLogo from '../../assets/images/instagram-logo.jpg';

let contactImage = {
  width: "100%",
  height: "435px",
  backgroundImage: `url(${contactBackground})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <div className="contact--image" style={contactImage}></div>
        <div className="contact--info">
          <h1>Kontakt</h1>
          <div className="contact--logo">
            <img src={phoneLogo} width="72" height="72" alt="phone" />
            <span>Telefon <strong> +381 63 7117871</strong></span>
          </div>
          <div className="contact--logo">
            <img src={emailLogo} width="72" height="72" alt="email" />
            <span>Email <strong><a target="_blank" rel="noopener noreferrer" href="mailto:srdanovicmile@gmail.com"> srdanovicmile@gmail.com</a></strong></span>
          </div>
          <div className="contact--logo">
            <img src={skypeLogo} width="72" height="72" alt="skype" />
            <span><strong> mile.srdanovic</strong></span>
          </div>
          <div className="contact--logo">
            <img src={facebookLogo} width="72" height="72" alt="facebook" />
            <span><strong><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/srdanovic.mile" >www.facebook.com/srdanovic.mile</a></strong></span>
          </div>
          <div className="contact--logo">
            <img src={instagramLogo} width="72" height="72" alt="instagram" />
            <span><strong><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/miledjavo/" >www.instagram.com/miledjavo/</a></strong></span>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;
