import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.menuVisible) {
      return (
        <div>
          <nav className="site--nav--slide">
            <ul>
              <li>
                <Link to="/">Dobrodošli / Welcome</Link>
              </li>
              <li>
                <Link to="/about">O meni / About Me</Link>
              </li>
              <li>
                Galerija / Gallery
                <ul>
                  <li>
                    Izložbe / Exhibitions
                    <ul>
                      <li>
                        <Link to="/gallery/drops">
                          Kapi u fokusu / Drops in focus
                        </Link>
                      </li>
                      <li>
                        <Link to="/gallery/focus">U fokusu / In focus</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Gradovi i sela / Cities and villages
                    <ul>
                      <li>
                        <Link to="/gallery/cities/beograd">Beograd</Link>
                      </li>
                      <li>
                        <Link to="/gallery/cities/rovinj">Rovinj</Link>
                      </li>
                      <li>
                        <Link to="/gallery/cities/uzici">Užici</Link>
                      </li>
                      <li>
                        <Link to="/gallery/cities/venecija">Venecija</Link>
                      </li>
                      <li>
                        <Link to="/gallery/cities/zlatibor">Zlatibor</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/gallery/animals">Životinje / Animals</Link>
                  </li>
                  <li>
                    <Link to="/gallery/sky">Nebo / Sky</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Kontakt / Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Navbar;
