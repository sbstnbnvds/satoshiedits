import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import satoshieditslogo from '../assets/img/satoshieditslogo.svg'
import navIcon1 from "../assets/img/navicons/nav-icon1.svg";
import navIcon2 from "../assets/img/navicons/nav-icon2.svg";
import navIcon3 from "../assets/img/navicons/nav-icon3.svg";
import navIcon4 from "../assets/img/navicons/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={satoshieditslogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.tiktok.com/@satoshi_edits_?_t=8Y18DFs5rlu&_r=1" target="_blank" ><img src={navIcon1} alt="tik tok" /></a>
              {/* <a href="#"><img src={navIcon2} alt="Icon" /></a> */}
              <a href="https://www.instagram.com/satoshi_edits/" target="_blank" ><img src={navIcon3} alt="instagram" /></a>
              <a href="https://twitter.com/SatoshiEdits" target="_blank" ><img src={navIcon4} alt="twitter" /></a>
            </div>
            <p>Copyright &copy; 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
