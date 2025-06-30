import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center my-5">Sitemap</h1>

      <Row className="g-4 shadow p-3 rounded bg-white">
        {/* Recharge/Bills Column */}
        <Col md={3}>
          <div className="border-bottom pb-2 mb-3">
            <h3 className="h5 fw-semibold">Recharge/Bills</h3>
          </div>
          <ul className="list-unstyled">
            {['Mobile', 'DTH', 'Datacard', 'Landline', 'Electricity', 'Insurance', 'Gas'].map(item => (
              <li key={item} className="mb-2">
                <Link to="/recharge" className="text-decoration-none text-dark custom-color-hover">{item}</Link>
              </li>
            ))}
            <li className="mb-2">
              <Link to="/transfer-to-bank" className="text-decoration-none text-dark custom-color-hover">Transfer Money</Link>
            </li>
            <li className="mb-2">
              <Link to="/wallet-transfer" className="text-decoration-none text-dark custom-color-hover">Send to wallet</Link>
            </li>
          </ul>
        </Col>

        {/* Offers Column */}
        <Col md={3}>
          <div className="border-bottom pb-2 mb-3">
            <h3 className="h5 fw-semibold">Offers</h3>
          </div>
          <ul className="list-unstyled">
            {['Offers', 'Recharge/Bills', 'Grocery', 'Travel', 'Food', 'Press'].map((item, index) => (
              <li key={index} className="mb-2">
                <Link to="/" className="text-decoration-none text-dark custom-color-hover">{item}</Link>
              </li>
            ))}
          </ul>
        </Col>

        {/* Terms and Conditions Column */}
        <Col md={3}>
          <div className="border-bottom pb-2 mb-3">
            <h3 className="h5 fw-semibold">Terms and Conditions</h3>
          </div>
          <ul className="list-unstyled">
            {['Terms and Conditions', 'T&C - Users', 'T&C - Merchants', 'T&C - Offers'].map((item, index) => (
              <li key={index} className="mb-2">
                <Link to="/term" className="text-decoration-none text-dark custom-color-hover">{item}</Link>
              </li>
            ))}
            <li className="mb-2">
              <Link to="/" className="text-decoration-none text-dark custom-color-hover">Others</Link>
            </li>
            <li className="mb-2">
              <Link to="/blog" className="text-decoration-none text-dark custom-color-hover">Blog</Link>
            </li>
            <li className="mb-2">
              <Link to="/" className="text-decoration-none text-dark custom-color-hover">Refer and Earn</Link>
            </li>
            <li className="mb-2">
              <Link to="/" className="text-decoration-none text-dark custom-color-hover">Apps</Link>
            </li>
            <li className="mb-2">
              <Link to="/" className="text-decoration-none text-dark custom-color-hover">Addcash</Link>
            </li>
          </ul>
        </Col>

        {/* Company & Policy Column */}
        <Col md={3}>
          <div className="border-bottom pb-2 mb-3">
            <h3 className="h5 fw-semibold">Company & Policy</h3>
          </div>
          <ul className="list-unstyled">
            <li className="mb-2">
              <Link to="/ContactUs" className="text-decoration-none text-dark custom-color-hover">Contact Us</Link>
            </li>
            <li className="mb-2">
              <Link to="/AboutUs" className="text-decoration-none text-dark custom-color-hover">About us</Link>
            </li>
            <li className="mb-2">
              <Link to="/" className="text-decoration-none text-dark custom-color-hover">Career</Link>
            </li>
            <li className="mb-2">
              <Link to="/privacypolicy" className="text-decoration-none text-dark custom-color-hover">Privacy Policy</Link>
            </li>
            <li className="mb-2">
              <Link to="/RefundPolicy" className="text-decoration-none text-dark custom-color-hover">Refund Policy</Link>
            </li>
            <li className="mb-2">
              <Link to="/" className="text-decoration-none text-dark custom-color-hover">Grievance Policy</Link>
            </li>
            <li className="mb-2">
              <Link to="/ContactUs" className="text-decoration-none text-dark custom-color-hover">Help</Link>
            </li>
          </ul>
        </Col>
      </Row>

    
    </Container>
  );
};

export default Sitemap;
