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
          <div>
            <nav className="site--nav">
              <div className="bars" onClick={this.props.onMenuClick}>
                <i class="fas fa-bars" />
                <p>menu</p>
              </div>
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
                        <span
                          className="submenu-toggle1"
                          onClick={this.toggleMenu}
                          to=""
                        >
                          Izložbe / Exhibitions
                          <ul className="show--submenu">
                            <li>
                              <Link to="/gallery/drops">
                                Kapi u fokusu / Drops in focus
                              </Link>
                            </li>
                            <li>
                              <Link to="/gallery/focus">
                                U fokusu / In focus
                              </Link>
                            </li>
                          </ul>
                        </span>
                      </li>
                      <li>
                        <span
                          className="submenu-toggle1"
                          onClick={this.toggleMenu}
                          to=""
                        >
                          Gradovi i sela / Cities and villages
                          <ul className="show--submenu">
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
                              <Link to="/gallery/cities/venecija">
                                Venecija
                              </Link>
                            </li>
                            <li>
                              <Link to="/gallery/cities/zlatibor">
                                Zlatibor
                              </Link>
                            </li>
                          </ul>
                        </span>
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
        </div>
      </header>
    );
  }
}

export default Header;
