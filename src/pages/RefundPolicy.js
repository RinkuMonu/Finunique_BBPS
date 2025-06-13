import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaMoneyBillWave,
  FaExchangeAlt,
  FaExclamationTriangle,
  FaFileAlt,
  FaClock,
} from "react-icons/fa";

export default function RefundPolicy() {
  return (
    <Container className="py-5 mt-5">
      {/* Header Section with Icon */}
      <Row className="mb-5 text-center">
        <Col>
          <div className="d-flex flex-column align-items-center">
            <div
              className="icon-wrapper rounded-circle p-4 mb-3"
              style={{ color: "orange" }}
            >
              <FaMoneyBillWave size={40} />
            </div>
            <h1 className="display-5 fw-bold text-dark">Refund Policy</h1>
            <p className="lead text-muted">
              Our transparent and fair refund process
            </p>
          </div>
        </Col>
      </Row>

      {/* Policy Items */}
      <Row className="g-4">
        <Col md={6} lg={4}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="p-4">
              <div className="d-flex align-items-start">
                <div className="bg-light-primary  rounded p-3 me-3" style={{ color: "orange" }}>
                  <FaExchangeAlt size={24} />
                </div>
                <div>
                  <h5 className="fw-bold mb-3">Failed Transactions</h5>
                  <p className="text-muted">
                    If the amount is debited from your bank account despite a
                    failed payment transaction, the onus will be on your bank to
                    reverse the amount.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="p-4">
              <div className="d-flex align-items-start">
                <div className="bg-light-primary  rounded p-3 me-3" style={{ color: "orange" }}>
                  <FaExclamationTriangle size={24} />
                </div>
                <div>
                  <h5 className="fw-bold mb-3">Multiple Payments</h5>
                  <p className="text-muted">
                    For duplicate payments received, we may adjust against
                    additional EMI or process refunds within 2-3 days of claim
                    verification.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="p-4">
              <div className="d-flex align-items-start">
                <div className="bg-light-primary  rounded p-3 me-3" style={{ color: "orange" }}>
                  <FaExclamationTriangle size={24} />
                </div>
                <div>
                  <h5 className="fw-bold mb-3">Incorrect Information</h5>
                  <p className="text-muted">
                    We cannot accept liability for payments to incorrect
                    accounts due to wrong information provided or payments
                    refused by your bank.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="p-4">
              <div className="d-flex align-items-start">
                <div className="bg-light-primary  rounded p-3 me-3" style={{ color: "orange" }}>
                  <FaFileAlt size={24} />
                </div>
                <div>
                  <h5 className="fw-bold mb-3">Refund Application</h5>
                  <p className="text-muted">
                    Submit a refund application with transaction details and
                    payment receipt. Manual verification is required for all
                    refund requests.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="p-4">
              <div className="d-flex align-items-start">
                <div className="bg-light-primary  rounded p-3 me-3" style={{ color: "orange" }}>
                  <FaClock size={24} />
                </div>
                <div>
                  <h5 className="fw-bold mb-3">Processing Time</h5>
                  <p className="text-muted">
                    Valid claims are processed within 7 days with confirmation
                    sent to your registered email. Refunds reflect in 3-7
                    banking days.
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Additional Information */}
      <Row className="mt-5">
        <Col>
          <Card className="border-0 bg-light">
            <Card.Body className="p-4">
              <h4 className="fw-bold mb-3 text-dark">Important Notes</h4>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Refunds are processed only to the original payment method
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Service charges (if any) are non-refundable
                </li>
                <li className="mb-2">
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  Please allow full processing time before contacting support
                </li>
                <li>
                  <i className="fas fa-check-circle text-primary me-2"></i>
                  For urgent queries, contact our support team with transaction
                  details
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <style jsx>{`
        .icon-wrapper {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bg-light-primary {
          background-color: rgba(13, 110, 253, 0.1);
        }
        .text-primary {
          color: #0d6efd !important;
        }
        .card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
        }
      `}</style>
    </Container>
  );
}
