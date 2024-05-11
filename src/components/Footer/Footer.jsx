import React from 'react'

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "Nosotros",
  },
  {
    path: "#",
    display: "Politica de Privacidad",
  },
  {
    path: "/cars",
    display: "Vehículos",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contacto",
  },
];


const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    E-Fast <br />{" "}
                    <spam style={{ fontSize: "17.5px" }}>
                      Numero 1 en alquiler de coches electricos
                    </spam>
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              En e-fast somos especialistas en alquiler de vehículos eléctricos.
              Descubre la comodidad y rapidez que ofrecemos a nuestros clientes.
              Ven a conocernos y disfruta de nuestra gama de vehículos
              eléctricos.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Navegacion Rápida</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Ven a conocernos en:</h5>
              <p className="office__info">Av. de Sarrià, 150 08017 Barcelona</p>
              <p className="office__info">Telefono: +664155888</p>

              <p className="office__info">Email: info@e-fast.com</p>

              <p className="office__info">
                Horario comercial: <br />{" "}
                <spam style={{ fontSize: "14.5px" }}>
                  <b>Lunes a Viernes:</b> 09:00 – 14:00 y 16:00 – 20:00
                </spam>{" "}
                <br />{" "}
                <spam style={{ fontSize: "14.5px" }}>
                  <b>Sabados:</b> 10:00 a 13:00
                </spam>
                <br />{" "}
                <spam style={{ fontSize: "14.5px" }}>
                  <b>Domingos:</b> cerrado
                </spam>
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Noticias</h5>
              <p className="section__description">Subscribete para nuestras noticias</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                .:Frater aGt:. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer