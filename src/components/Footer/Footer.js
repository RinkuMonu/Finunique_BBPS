import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

function Footer() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-dark text-white position-relative pt-5 pb-3 overflow-hidden">
      {/* Dark Background Shape */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-secondary opacity-10"
        style={{
          borderRadius: "30px",
          transform: "scale(0.95, 1)",
          zIndex: -1,
        }}
      ></div>

      {/* Primary Footer Content */}
      <Container className="position-relative">
        <Row className="g-4">
          {/* Contact Information */}
          <Col lg={4} md={6}>
            <h5 className="text-uppercase fw-bold mb-4">Connect With Us</h5>
            <ListGroup variant="flush" className="bg-transparent">
              <ListGroupItem className="bg-transparent text-white border-secondary d-flex align-items-start px-0 py-2">
                <div className="me-3 mt-1">
                  <img src="/assets/Home/world.png" width="24" alt="Location" />
                </div>
                <div>
                  <p className="mb-0 small">
                    Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer,
                    Jagatpura, Jaipur Rajasthan, India, 302017
                  </p>
                </div>
              </ListGroupItem>

              <ListGroupItem className="bg-transparent text-white border-secondary d-flex align-items-start px-0 py-2">
                <div className="me-3 mt-1">
                  <img
                    src="/assets/Home/send-mail.png"
                    width="24"
                    alt="Email"
                  />
                </div>
                <div>
                  <a
                    href="mailto:info@abdks.com"
                    className="text-white text-decoration-none small"
                  >
                    info@abdks.com
                  </a>
                </div>
              </ListGroupItem>

              <ListGroupItem className="bg-transparent text-white border-secondary d-flex align-items-start px-0 py-2">
                <div className="me-3 mt-1">
                  <img
                    src="/assets/Home/phone-call.png"
                    width="24"
                    alt="Phone"
                  />
                </div>
                <div>
                  <a
                    href="tel:01414511098"
                    className="text-white text-decoration-none small"
                  >
                    01414511098
                  </a>
                </div>
              </ListGroupItem>
            </ListGroup>
          </Col>

          {/* Quick Links */}
          <Col lg={4} md={6}>
            <Row>
              <Col md={6}>
                <h5 className="text-uppercase fw-bold mb-4">Other Links</h5>
                <ListGroup variant="flush" className="bg-transparent">
                  <ListGroupItem className="bg-transparent text-white border-secondary px-0 py-1">
                    <Link
                      to="/privacypolicy"
                      className="text-white text-decoration-none small"
                      onClick={goTop}
                    >
                      Privacy Policy
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent text-white border-secondary px-0 py-1">
                    <Link
                      to="/term"
                      className="text-white text-decoration-none small"
                      onClick={goTop}
                    >
                      Terms Conditions
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent text-white border-secondary px-0 py-1">
                    <Link
                      to="/RefundPolicy"
                      className="text-white text-decoration-none small"
                      onClick={goTop}
                    >
                      Refund Cancellation
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent text-white border-secondary px-0 py-1">
                    <Link
                      to="/contentPolicy"
                      className="text-white text-decoration-none small"
                      onClick={goTop}
                    >
                      Content Policy
                    </Link>
                  </ListGroupItem>
                </ListGroup>
              </Col>

              <Col md={6} className="mt-4 mt-md-0">
                <h5 className="text-uppercase fw-bold mb-4">Pages</h5>
                <ListGroup variant="flush" className="bg-transparent">
                  <ListGroupItem className="bg-transparent text-white border-secondary px-0 py-1">
                    <Link
                      to="/BBPS"
                      className="text-white text-decoration-none small"
                      onClick={goTop}
                    >
                      BBPS
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent text-white border-secondary px-0 py-1">
                    <Link
                      to="/Services"
                      className="text-white text-decoration-none small"
                      onClick={goTop}
                    >
                      Services
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent text-white border-secondary px-0 py-1">
                    <Link
                      to="/OurPartner"
                      className="text-white text-decoration-none small"
                      onClick={goTop}
                    >
                      Our Partners
                    </Link>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </Col>

          {/* Social Media */}
          <Col lg={4} md={6} className="mt-4 mt-lg-0">
            <h5 className="text-uppercase fw-bold mb-4">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white fs-4">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="text-white fs-4">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>

            {/* Newsletter Subscription (Optional) */}
            <div className="mt-4">
              <h6 className="text-uppercase fw-bold mb-3">
                Subscribe to Newsletter
              </h6>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  placeholder="Your email"
                  aria-label="Your email"
                />
                <button className="btn btn-primary btn-sm" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Copyright Section */}
      <Container>
        <Row className="mt-4 pt-3 border-top border-secondary">
          <Col className="text-center">
            <p className="mb-0 small">
              © {new Date().getFullYear()} ABDKS Solutions Private Limited. All
              rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
