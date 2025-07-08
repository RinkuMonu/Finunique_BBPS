import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import axios from "axios";

function Footer() {
  const [socialLinks, setSocialLinks] = useState([]);
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
console.log(socialLinks,"Social media link")
 useEffect(() => {
  const fetchSocialLinks = async () => {
    try {
      const response = await axios.get(
        "https://cms.sevenunique.com/apis/social-media/get-social-accounts.php?website_id=5",
        {
          headers: {
            Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
          },
        }
      );

      // With axios, the data is directly available in response.data
      const result = response.data;
      if (result.status === "success") {
        const activeLinks = result.data.filter(
          (item) => item.status === "Active"
        );
        setSocialLinks(activeLinks);
      } else {
        console.error("Failed to load social media links.");
      }
    } catch (error) {
      console.error("Error fetching social links:", error);
    }
  };

  fetchSocialLinks();
}, []);

  return (
    <footer className="bg-black text-white position-relative pt-5 pb-3 overflow-hidden">
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
            <h5 className="text-uppercase fw-bold mb-4 text-white">
              Connect With Us
            </h5>
            <ListGroup variant="flush" className="bg-transparent">
              <ListGroupItem className="bg-transparent text-white border-0 d-flex align-items-start px-0 py-2">
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

              <ListGroupItem className="bg-transparent text-white border-0 d-flex align-items-start px-0 py-2">
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

              <ListGroupItem className="bg-transparent text-white border-0 d-flex align-items-start px-0 py-2">
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
                    0141-4511098
                  </a>
                </div>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg={4} md={6}>
            <Row>
              <Col md={6}>
                <h5 className="text-uppercase fw-bold mb-4 text-white">
                  Company
                </h5>
                <ListGroup variant="flush" className="bg-transparent">
                  <ListGroupItem className="bg-transparent text-white border-0 px-0 py-1">
                    <Link
                      to="/aboutus"
                      className="text-white text-decoration-none small"
                      onClick={goTop}
                    >
                      About
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent text-white border-0 px-0 py-1">
                    <Link
                      to="/blog"
                      className="text-white text-decoration-none small"
                      onClick={goTop}
                    >
                      Blog
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent text-white border-0 px-0 py-1">
                    <Link
                      to="/ContactUs"
                      className="text-white text-decoration-none small"
                      onClick={goTop}
                    >
                      Contact
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent text-white border-0 px-0 py-1">
                    <Link
                      to="/sitemap"
                      className="text-white text-decoration-none small"
                      onClick={goTop}
                    >
                      Sitemap
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent text-white border-0 px-0 py-1">
                    <Link
                      to="/bug-bounty"
                      className="text-white text-decoration-none small"
                      onClick={goTop}
                    >
                      Bug bounty
                    </Link>
                  </ListGroupItem>
                </ListGroup>
              </Col>
              <Col md={6}>
                <h5 className="text-uppercase fw-bold mb-4 text-white">
                  Help & Support
                </h5>
                <ListGroup variant="flush" className="bg-transparent">
                  <ListGroupItem className="bg-transparent text-white border-0 px-0 py-1">
                    <Link
                      to="/"
                      className="text-white text-decoration-none small"
                      onClick={goTop}
                    >
                      Home
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent text-white border-0 px-0 py-1">
                    <Link
                      to="/recharge"
                      className="text-white text-decoration-none small"
                      onClick={goTop}
                    >
                      Recharge & Bill Pay
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent text-white border-0 px-0 py-1">
                    <Link
                      to="/transfer-to-bank"
                      className="text-white text-decoration-none small"
                      onClick={goTop}
                    >
                      Transfer To Bank
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent text-white border-0 px-0 py-1">
                    <Link
                      to="/redeem-payback-points"
                      className="text-white text-decoration-none small"
                      onClick={goTop}
                    >
                      Redeem Payback Points
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent text-white border-0 px-0 py-1">
                    <Link
                      to="/wallet-transfer"
                      className="text-white text-decoration-none small"
                      onClick={goTop}
                    >
                      Wallet Transfer
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent text-white border-0 px-0 py-1">
                    <Link
                      to="/createaccount"
                      className="text-white text-decoration-none small"
                      onClick={goTop}
                    >
                      Become a Partner
                    </Link>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </Col>
          {/* Quick Links */}

          {/* Social Media */}
          <Col lg={4} md={6} className="mt-4">
            <h5 className="text-uppercase fw-bold mb-4 text-white">ABDKS</h5>
            <p>
              {" "}
              ABDKS is authorized to provide essential utility services
              including but not limited to electricity, water, gas, mobile
              recharge, DTH, and other bill payments. ABDKS is also an
              integrated service provider under the BBPS framework, offering
              secure, seamless, and interoperable bill payment
              solutions across India.
            </p>
            {/* <div className="d-flex gap-3">
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
            </div> */}

            {/* Newsletter Subscription (Optional) */}
            {/* <div className="mt-4">
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
            </div> */}
          </Col>
        </Row>
      </Container>
      {/* Copyright Section */}
      <Container>
        <Row className="mt-4 pt-3 border-top border-0 align-items-center">
          {/* Left Side: Copyright and Policy Links */}
          <Col md={8} className="text-md-start text-center">
            <p className="mb-0 small">
              © {new Date().getFullYear()} ABDKS Solutions Private Limited. All
              rights reserved.
            </p>
            <ListGroup
              variant="flush"
              className="bg-transparent d-flex flex-row gap-2 flex-wrap mt-1 justify-content-md-start justify-content-center"
            >
              {[
                { to: "/privacypolicy", label: "Privacy Policy" },
                { to: "/term", label: "Terms Conditions" },
                { to: "/RefundPolicy", label: "Refund Cancellation" },
                { to: "/contentPolicy", label: "Content Policy" },
              ].map((item, idx, arr) => (
                <ListGroupItem
                  key={item.to}
                  className="bg-transparent text-white border-0 px-1 py-0"
                >
                  <Link
                    to={item.to}
                    className="text-white text-decoration-none small"
                    onClick={goTop}
                  >
                    {item.label}
                  </Link>
                  {idx < arr.length - 1 && <span className="px-1">|</span>}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* Right Side: Social Media Icons */}
          <Col md={4} className="text-md-end text-center mt-3 mt-md-0">
            <div>Connect With US</div>
            <div className="d-flex justify-content-md-end justify-content-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.account_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white fs-5"
                  title={item.platform_name}
                >
                  <span dangerouslySetInnerHTML={{ __html: item.icon_class }} />
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
