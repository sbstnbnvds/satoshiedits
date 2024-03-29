import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import satoshieditslogo from '../assets/img/satoshieditslogo.svg'
import navIcon1 from '../assets/img/navicons/nav-icon1.svg';
import navIcon2 from '../assets/img/navicons/nav-icon2.svg';
import navIcon3 from '../assets/img/navicons/nav-icon3.svg';
import navIcon4 from '../assets/img/navicons/nav-icon4.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={satoshieditslogo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? (<svg xmlns="http://www.w3.org/2000/svg" height="2rem" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#e84247">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" height="2rem" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgba(29, 29, 29, 1)">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}                        
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#why-us" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Why Us</Nav.Link>
              {/* <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link> */}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.tiktok.com/@satoshi_edits_?_t=8Y18DFs5rlu&_r=1" target="_blank" ><img src={navIcon1} alt="tik tok" /></a>
                {/* <a href="#" target="_blank"><img src={navIcon2} alt="" /></a> */}
                <a href="https://www.instagram.com/satoshi_edits/" target="_blank" ><img src={navIcon3} alt="instagram" /></a>
                <a href="https://twitter.com/SatoshiEdits" target="_blank" ><img src={navIcon4} alt="twitter" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
