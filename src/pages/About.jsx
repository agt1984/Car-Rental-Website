import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMenbers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Comprometidos a llevarte a donde Sea
                </h2>

                <p className="section__description">
                  En nuestra empresa, estamos comprometidos a llevarte a donde
                  sea con el máximo confort y seguridad. Nos esforzamos por
                  ofrecer un servicio de transporte que no solo cumpla, sino que
                  supere tus expectativas, garantizando puntualidad, eficiencia
                  y una experiencia de viaje placentera. Ya sea que necesites
                  desplazarte por negocios, placer o cualquier otra razón,
                  nuestro equipo de profesionales dedicados está listo para
                  asistir en cada paso del camino. Con nosotros, tu destino está
                  asegurado, y cada viaje se convierte en una oportunidad para
                  brindarte lo mejor
                </p>

                <p className="section__description">
                  No temas, no te llevaremos a terrenos solos en donde te haremos cosas inpènsables, ni tampoco venderemos tus organos.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Necesitas Ayuda?</h6>
                    <h4>+00123456789</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
