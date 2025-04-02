import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap';
const WalletTransfer = () => {

    const [formData, setFormData] = useState({
        mobileNumber: '',
        amount: '',
        beneficiaryName: '',
        accountNumber: '',
        ifscCode: ''
      });
    
      const [activeTab, setActiveTab] = useState('wallet');
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
      };
    
      const handleTabChange = (tab) => {
        setActiveTab(tab);
      };
    
      const isWalletFormValid = formData.mobileNumber && formData.amount;
      const isBankFormValid = formData.beneficiaryName && formData.accountNumber && formData.ifscCode && formData.amount;

  return (
    <>

    
<Container className="py-5 marginTop">
      <Row>
        {/* Left Side Content */}
        <Col md={6} className="text-center text-md-start">
          <h2 className="fw-bold" style={{color:"#001e50"}}>
            Wallet Transfer
          </h2>
          <h3>
            Effortless Wallet Transfers: Empowering You to Send, Receive, and Manage Funds with Speed, Security, and Simplicity – Wherever You Go!
          </h3>
        </Col>

        {/* Right Side Form */}
        <Col md={6}>
          <div
            className="p-4 rounded bg-white shadow"
            style={{ maxWidth: "400px", margin: "0 auto" }}
          >
            <Nav variant="tabs" className="mb-3">
              <Nav.Item>
                <Nav.Link
                  active={activeTab === 'wallet'}
                  onClick={() => handleTabChange('wallet')}
                >
                  <i className="bi bi-wallet"></i> Send To Wallet
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={activeTab === 'bank'}
                  onClick={() => handleTabChange('bank')}
                >
                  <i className="bi bi-bank"></i> Send To Bank
                </Nav.Link>
              </Nav.Item>
            </Nav>

            {activeTab === 'wallet' && (
              <Form>
                <Form.Group className="mb-3" controlId="mobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="₹ Enter Amount"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ backgroundColor: "#001e50", color: "white" }}
                  disabled={!isWalletFormValid}
                >
                  Go
                </Button>
              </Form>
            )}

            {activeTab === 'bank' && (
              <Form>
                <Form.Group className="mb-3" controlId="beneficiaryName">
                  <Form.Label>Beneficiary Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name on Bank Account"
                    value={formData.beneficiaryName}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="accountNumber">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Account Number"
                    value={formData.accountNumber}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ifscCode">
                  <Form.Label>IFSC Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="IFSC Code"
                    value={formData.ifscCode}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="₹ Enter Amount"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100"
                  style={{ backgroundColor: "#001e50", color: "white" }}
                  disabled={!isBankFormValid}
                >
                  Confirm
                </Button>
              </Form>
            )}
          </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default WalletTransfer