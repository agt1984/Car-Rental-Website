import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">Nosotros</h4>
              <h2 className="section__title">
                Bienvenido a Nuestro Servicio de Alquiles de Coches
              </h2>
              <p className="section__description">
                Bienvenido a nuestro servicio de alquileres de coches
                eléctricos, donde la innovación y la sostenibilidad se fusionan
                para ofrecerte una experiencia de viaje única. Con una amplia
                selección de vehículos eléctricos de alta gama, incluyendo
                marcas líderes como Tesla, Polestar, Nissan LEAF y BMW, te
                proporcionamos acceso a la última tecnología en movilidad
                eléctrica. Nuestra flota está diseñada para satisfacer tus
                necesidades de viaje, ya sea que busques eficiencia energética,
                reducir tu huella de carbono o simplemente experimentar la
                potencia y el silencio de los vehículos eléctricos. Además,
                contamos con una red extensa de estaciones de carga para
                facilitar tus viajes, asegurándote de que nunca quedes sin
                energía. ¡Explora el futuro de la movilidad con nosotros
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Rápido
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Seguro
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Economico
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Verde
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
