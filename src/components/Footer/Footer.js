
import React from "react";
import "./Footer.css"; // Create a CSS file for the styles or inline styles if preferred
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      {/* Primary Footer Section */}
      <div className="primary-footer">
        <div className="container">
          <div className="row">
            {/* Connect With Us Section */}
            <div className="col-lg-4 col-md-5 mt-6 mt-md-0">
              <h5>Connect With Us</h5>
              <ul className="media-icon list-unstyled">
                <li className="d-flex">
                <img src="/assets/Home/world.png" width={33} alt="location" className="flaticon-facebook-app-symbol" />

                  <p className="mb-0" style={{color:"#fff"}}>
                  Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur Rajasthan, India, 302017
                  </p>
                </li>
                <li>
                <img src="/assets/Home/send-mail.png" width={33} alt="location" className="flaticon-facebook-app-symbol" />

                  <a href="mailto:info@abdks.com">info@abdks.com</a>
                </li>
                <li>
                <img src="/assets/Home/phone-call.png" width={33} alt="location" className="flaticon-facebook-app-symbol" />

                  <a href="tel:++91 72970 26119">+91 72970 26119</a>
                </li>
              </ul>
            </div>

            {/* Other Links Section */}
            <div className="col-lg-4 col-md-8 mt-6 mt-lg-0">
              <div className="row">
                {/* Privacy, Terms, Refund Links */}
                <div className="col-md-6 footer-menu">
                  <h5>Other Links</h5>
                  <ul className="list-unstyled w-100">
                    <li>
                      <Link to={"/privacypolicy"}>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to={"/term"}>Terms Conditions</Link>
                    </li>
                    <li>
                      <Link to={"/RefundPolicy"}>Refund Cancellation</Link>
                    </li>
                  </ul>
                </div>
                {/* Pages Links */}
                <div className="col-md-6 mt-5 mt-md-0 footer-menu">
                  <h5>Pages</h5>
                  <ul className="list-unstyled">
                    <li>
                      <Link to={"/BBPS"}>BBPS</Link>
                    </li>
                    <li>
                      <Link to={"/Services"}>Services</Link>
                    </li>
                    <li>
                      <Link to={"/OurPartner"}>Our Partners</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="col-lg-4 col-md-7 pe-lg-8">
              <h5>Social Media</h5>
              <ul className="list-inline ps-0 ms-0 footer-social">
                <li className="list-inline-item">
                  <a href="#">
                  <i class="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                  <i class="bi bi-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                  <i class="bi bi-twitter-x"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                  <i class="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Footer Section */}
      <div className="secondary-footer">
        <div className="container">
          <div className="copyright">
            <div className="row align-items-center">
              <div className="col-md-12 text-center">
                © 2024 @ABDKS Solutions Private Limited All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Background */}
      <div
        className="dark-bg ht-bg-move"
        style={{
          transformOrigin: "50% 50%",
          transform: "scale(0.95, 1)",
          borderRadius: "30px",
        }}
      ></div>
    </footer>
  );
}

export default Footer;

