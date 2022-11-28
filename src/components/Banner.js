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
                  <p>Satoshi Edits is the perfect solution for anyone looking to create a stand-out video. Our top quality video editing services will help improve you business video portfolio, making your company more succesful and noticed.</p>
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
