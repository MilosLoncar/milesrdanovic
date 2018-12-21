import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <header>
        <div className="site--header">
          <div className="site--title">
            <h1>Mile Srdanović</h1>
          </div>
          <nav className="site--nav">
            <ul>
              <li>
                <Link to="/">Dobrodošli / Welcome</Link>
              </li>
              <li>
                <Link to="/about">O meni / About Me </Link>
              </li>
              <li>
                <span
                  className="submenu-toggle"
                  onClick={this.toggleMenu}
                  to="/Gallery"
                >
                  Galerija / Gallery
                  <ul className="show--menu">
                    <li>
                      <Link to="/gallery/exhibitions">
                        Izložbe / Exhibitions
                      </Link>
                    </li>
                    <li>
                      <Link to="/gallery/cities">
                        Gradovi i sela / Cities and villages
                      </Link>
                    </li>
                    <li>
                      <Link to="/gallery/animals">Životinje / Animals</Link>
                    </li>
                    <li>
                      <Link to="/gallery/sky">Nebo / Sky</Link>
                    </li>
                  </ul>
                </span>
              </li>
              <li>
                <Link to="/contact">Kontakt / Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
