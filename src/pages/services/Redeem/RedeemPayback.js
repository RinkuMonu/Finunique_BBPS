import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import SEO from "../../../components/SEO/SEO";
import { useUser } from "../../../context/UserContext";

const RedeemPayback = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const {seo} = useUser()
  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Proceed with redemption logic (API call or navigation)
    console.log("Submitting phone number:", phoneNumber);
  };

  return (
    <>
     <SEO
        meta_title={seo?.meta_title}
        meta_description={seo?.meta_description}
        meta_keywords={seo?.meta_keywords}
        og_title={seo?.og_title}
        og_description={seo?.og_description}
        og_type={seo?.og_type}
        og_url={seo?.og_url}
        og_image={seo?.og_image}
        og_site_name={seo?.og_site_name}
        canonical_tag={seo?.canonical_tag}
      />
      <Container className="py-5 mt-5">
      <Row className="align-items-center">
        {/* Left Side Content */}
        <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
          <h2 className="fw-bold" style={{ color: "#001e50" }}>
            The best reward for loyalty? Money.
          </h2>
          <h4 className="mt-3">
            Redeem Your Payback Points Instantly with ABDKS Solutions Private Ltd.
          </h4>
          <p className="mt-3 fs-5 text-muted">
            Turn your unused PAYBACK points into real cash or discounts in
            seconds. With ABDKS, loyalty truly pays off — securely, instantly,
            and effortlessly.
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <img
              src="/assets/Gas Bill Solution.svg"
              alt="piped gas"
              height="250"
              className="item-center pipegasSideImg"
            />
          </div>
        </Col>

        {/* Right Side Login Box */}
        <Col md={6} className="d-flex justify-content-center">
          <div
            className="p-4 rounded-4 bg-white shadow-sm w-100"
            style={{ maxWidth: "420px" }}
          >
            <h5
              className="text-center mb-4 fw-semibold"
              style={{ color: "#001e50" }}
            >
              Enter Mobile Number Linked to Your PAYBACK Account
            </h5>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formPhoneNumber">
                <Form.Control
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Enter 10-digit mobile number"
                  className="py-2"
                  value={phoneNumber}
                  onChange={handleChange}
                  maxLength="10"
                />
                {error && (
                  <div className="text-danger mt-2 small">{error}</div>
                )}
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="mt-3 w-100 py-2 fw-semibold"
                style={{ backgroundColor: "#001e50", border: "none" }}
              >
                Proceed to Redeem
              </Button>
            </Form>

            <p className="mt-3 text-muted small text-center">
              We'll verify your number and fetch your available PAYBACK points.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default RedeemPayback;
