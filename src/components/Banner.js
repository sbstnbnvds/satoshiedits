import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import Slideshow from "./slideshow/Slideshow";

export const Banner = () => {


  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div>
                <h1>Satoshi Edits</h1>
                  <p>Satoshi Edits is a video editing service helping companies and projects create exceptional videos. Our our quality editing services help improve your business video portfolio and improve your businesses visibility and reputation.</p>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <Slideshow/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
