/* eslint-disable jsx-a11y/anchor-is-valid */
// Import necessary modules
import React from "react";
import {Row,Col,Card,Form,Button,Nav,Tab,Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PaymentMode.css";
import { useLocation } from "react-router-dom";

function PaymentMode() {

  const location = useLocation();
  const { amount, mobileNumber } = location.state || {};

  const handleOnSubmit =(e)=>{
    e.preventDefault()
    console.log("Payment Mode selected");
  }
  return (
    <div className="p-4" style={{ marginTop: "120px", paddingBottom: "20px" }}>
      <Row>
        {/* Right Section (Placed at top on mobile/tablet view) */}
        <Col lg={4} md={12} sm={12} className="mb-4 order-1 order-lg-2">
          <Card className="border rounded shadow">
            <Card.Body>
              <div className="col-md-12">
                <h4 className="fw-bold" style={{color:"black"}}>Mobile Recharge - {mobileNumber}</h4>
              </div>
              <div className="d-flex justify-content-between">
                <div>Total amount to be paid</div>
                <div className="fw-bold">₹{amount}</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>To be paid from wallet</div>
                <div className="fw-bold">₹0</div>
              </div>
            </Card.Body>
            <div className="d-flex justify-content-between px-3 paybalance text-center w-100 py-4 fw-bold">
              <div>Pay Balance Amount</div>
              <div>₹{amount}</div>
            </div>
          </Card>
          <div className="mt-4 p-3 border rounded accept shadow">
            <h4 className="mb-2 fw-bold" style={{color:"#1854AE"}}>We Accept</h4>
            <div className="payment-methods d-flex flex-wrap gap-2">
              <Image
                src="https://d28wu8o6itv89t.cloudfront.net/images/Visadebitcardpng-1599584312349.png"
                alt="Payment Methods"
                height={20}
              />
              <Image
                src="https://e7.pngegg.com/pngimages/212/797/png-clipart-mastercard-logo-credit-card-maestro-payment-card-mastercard-text-orange-thumbnail.png"
                alt="Payment Methods"
                height={20}
              />
              <Image
                src="https://w7.pngwing.com/pngs/789/19/png-transparent-maestro-mastercard-debit-card-logo-cirrus-mastercard-text-trademark-logo.png"
                alt="Payment Methods"
                height={20}
              />
              <Image
                src="https://static.businessworld.in/American-Express-Color_20241008185737_original_image_48.webp"
                alt="Payment Methods"
                height={20}
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/1200px-RuPay.svg.png"
                alt="Payment Methods"
                height={20}
              />
              <Image
                src="https://www.pymnts.com/wp-content/uploads/2014/03/Discover-logo-e1416429693676.jpg"
                alt="Payment Methods"
                height={20}
              />
            </div>
            <h4 className="mt-3 fw-bold" style={{color:"#1854AE"}}>Trusted By</h4>
            <div className="payment-methods d-flex flex-wrap gap-2">
              <Image
                src="https://static-00.iconduck.com/assets.00/payment-visa-verified-icon-2048x878-1oes6l3d.png"
                alt="Trusted Logos"
                height={30}
              />
              <Image
                src="https://banner2.cleanpng.com/20181125/vak/kisspng-3-d-secure-mastercard-american-express-visa-credit-fels-denver-mints-ing-sm-1713918323391.webp"
                alt="Trusted Logos"
                height={20}
              />
              <Image
                src="https://getlogovector.com/wp-content/uploads/2019/10/pci-dss-compliant-logo-vector.png"
                alt="Trusted Logos"
                height={20}
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/1200px-RuPay.svg.png"
                alt="Trusted Logos"
                height={20}
              />
            </div>
          </div>
        </Col>

        {/* Left Section */}
        
          <h3 className="mb-4 fw-bold" style={{color:"#001e50"}}>Select a Payment Mode</h3>
        <Col lg={8} md={12} sm={12} className="mb-4 order-2 order-lg-1">
          <div className="border p-4 rounded shadow">
            <Tab.Container defaultActiveKey="debit">
              <Nav variant="tabs" className="mb-4">
                <Nav.Item>
                  <Nav.Link eventKey="debit">Debit Cards</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="credit">Credit Cards</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                {/* Debit Cards Tab */}
                <Tab.Pane eventKey="debit">
                  <Form>
                    <Form.Group className="mb-3" controlId="debitCardNumber">
                      <Form.Label>Enter Card Details</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Credit / Debit Card Number"
                      />
                    </Form.Group>
                    <Row>
                      <Col md={4} sm={6} xs={12} className="mb-3">
                        <Form.Group controlId="debitExpiryMonth">
                          <Form.Label>Expiry Month</Form.Label>
                          <Form.Select>
                            <option value="">MM</option>
                            {[...Array(12)].map((_, i) => (
                              <option key={i} value={i + 1}>
                                {String(i + 1).padStart(2, "0")}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={4} sm={6} xs={12} className="mb-3">
                        <Form.Group controlId="debitExpiryYear">
                          <Form.Label>Expiry Year</Form.Label>
                          <Form.Select>
                            <option value="">YY</option>
                            {[...Array(12)].map((_, i) => (
                              <option
                                key={i}
                                value={new Date().getFullYear() + i}
                                
                              >
                                {new Date().getFullYear() + i}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={4} sm={12} xs={12} className="mb-3">
                        <Form.Group controlId="debitCvv">
                          <Form.Label>CVV</Form.Label>
                          <Form.Control type="password" placeholder="CVV" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button variant="primary" type="submit" onClick={handleOnSubmit} className="w-100 py-2" style={{backgroundColor:"#001e50"}}>
                      Proceed to Pay ₹{amount}
                    </Button>
                  </Form>
                  <a href="#" className="d-block mt-3 text-decoration-none">
                    Apply a Coupon Code
                  </a>
                </Tab.Pane>

                {/* Credit Cards Tab */}
                <Tab.Pane eventKey="credit">
                  <Form>
                    <Form.Group className="mb-3" controlId="creditCardNumber">
                      <Form.Label>Enter Card Details</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Credit / Debit Card Number"
                      />
                    </Form.Group>
                    <Row>
                      <Col md={4} sm={6} xs={12} className="mb-3">
                        <Form.Group controlId="creditExpiryMonth">
                          <Form.Label>Expiry Month</Form.Label>
                          <Form.Select>
                            <option value="">MM</option>
                            {[...Array(12)].map((_, i) => (
                              <option key={i} value={i + 1}>
                                {String(i + 1).padStart(2, "0")}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={4} sm={6} xs={12} className="mb-3">
                        <Form.Group controlId="creditExpiryYear">
                          <Form.Label>Expiry Year</Form.Label>
                          <Form.Select>
                            <option value="">YY</option>
                            {[...Array(12)].map((_, i) => (
                              <option
                                key={i}
                                value={new Date().getFullYear() + i}
                              >
                                {new Date().getFullYear() + i}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={4} sm={12} xs={12} className="mb-3">
                        <Form.Group controlId="creditCvv">
                          <Form.Label>CVV</Form.Label>
                          <Form.Control type="password" placeholder="CVV" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button variant="primary" type="submit" className="w-100 py-2" style={{backgroundColor:"#001e50"}}>
                      Proceed to Pay ₹{amount}
                    </Button>
                  </Form>
                  <a href="#" className="d-block mt-3 text-decoration-none">
                    Apply a Coupon Code
                  </a>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default PaymentMode;
