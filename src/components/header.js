import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from './scroller'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this);
  }

  render() {
    return (
      <>
        <Navbar className="navbar navbar-expand-lg navbar-light fixed-top py-3"
                id="mainNav"
                expand="lg"
                collapseOnSelect={true}>
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" h
               ref="#page-top"
               onClick={Scroller.handleAnchorScroll}>
              British Kitties
            </a>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy className="navbar-nav"
                           items={["about", "gallery", "faq", "contact"]}
                           currentClassName="active"
                           rootEl={"#mainNav"}
                           offset={-75}>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"}
                              href="#about"
                              onClick={Scroller.handleAnchorScroll}>
                      About
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"}
                              href="#gallery"
                              onClick={Scroller.handleAnchorScroll}>
                      Gallery
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"}
                              href="#faq"
                              onClick={Scroller.handleAnchorScroll}>
                      FAQ
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link className={"js-scroll-trigger"}
                              href="#contact"
                              onClick={Scroller.handleAnchorScroll}>
                      Contact
                    </Nav.Link>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5">
                  Pure breed british kitties born and raised with love in Brooklyn, NY.
                </p>
                <a className="btn btn-primary btn-xl js-scroll-trigger"
                   href="#about"
                   onClick={Scroller.handleAnchorScroll}>
                    About us
                </a>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
