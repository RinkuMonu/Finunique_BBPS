import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';


const RedeemPayback = () => {
  return (
    <>

    <Container className="py-5 marginTop">
      <Row>
        {/* Left Side Content */}
        <Col md={6} className="text-center text-md-start">
          <h2 className="fw-bold" style={{color:"#001e50"}}>
            The best reward for loyalty? Money.
          </h2>
          <h3>
            Redeem your Payback Points at ABDKS Solutions Private Limited small pvt ltd .!
          </h3>
        </Col>

        {/* Right Side Content */}
        <Col md={6} className="d-flex align-items-center justify-content-center">
        
          <div
            className="p-4 rounded bg-white shadow text-center"
            style={{ maxWidth: "400px" }}
          >
           
            <h3 className='fw-bold' style={{color:"#001e50"}}>Login with phone number linked with PAYBACK </h3>
            
            <Button
              variant="primary"
              className="mt-3 w-100"
              style={{ backgroundColor: "#001e50", color: "white" }}
            >
              Login
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default RedeemPayback