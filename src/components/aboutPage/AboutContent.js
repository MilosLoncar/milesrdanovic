import React, { Component } from 'react';
import aboutBackground from '../../assets/images/about-image.jpg';

let aboutImage = {
  width: "100%",
  height: "435px",
  backgroundImage: `url(${aboutBackground})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: 'contain'
};

class AboutContent extends Component {
  render() {
    return (
      <section className="about">
        <div className="img--holder"  style={ aboutImage }>
        </div>
        <div className="text--holder">
          <h1>O meni</h1>
          <h4>
            Rođen sam 1937.godine u Beogradu.
          <h4>Prve korake u fotografiji sam napravio još davne 1955.godine. 
            Od tada do danas prošao sam sve njene faze, analogne i digitalne. 
            Fotografija je moja velika strast i način života.</h4> 
          <h4>Pretežno fotografišem gradove, prirodu, portrete i događaje.  
            Volim izazove, putovanja na kojima ne propuštam priliku da fotografišem nešto novo i drugačije.</h4>
            U ovom predstavljanju, želim da Vam se zahvalim sto ste posetili moj sajt i nadam se da Vam se moj rad dopada.
          </h4>
        </div>
      </section>
    )
  }
}

export default AboutContent;
