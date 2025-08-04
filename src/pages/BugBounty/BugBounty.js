import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card, ListGroup, Badge, Table } from 'react-bootstrap';
  import "./BugBounty.css"
import SEO from '../../components/SEO/SEO';
import { useUser } from '../../context/UserContext';

const BugBountyProgram = () => {
  const {seo} = useUser()
  const [activeTab, setActiveTab] = useState('guidelines');


  const renderContent = () => {
    switch(activeTab) {
      case 'guidelines':
        return (
          <Card className="border-0 shadow-sm h-100">
            <Card.Body>
              <h2 className="mb-4">Guidelines</h2>
              <blockquote className="blockquote mb-4">
                <p>
                  If you believe that you have found security vulnerability or Bug on any ofABDKS's owned Website or Application, 
                  we encourage you to let us know straight away. Our Team will investigate all legitimate reports and do our best 
                  to quickly fix the problem.
                </p>
              </blockquote>

              <h3 className="mt-5 mb-3">Response Targets</h3>
              <p>
               ABDKS will make the best effort to meet the following response targets:
              </p>
              <ListGroup variant="flush" className="mb-4">
                <ListGroup.Item className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill custom-color-icon me-2"></i>
                  <strong>First response</strong>: Within 1 business day
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <i className="bi bi-check-circle-fill custom-color-icon me-2"></i>
                  <strong>Time to triage</strong>: Within 2 business days
                </ListGroup.Item>
              </ListGroup>
              <p className="mb-4">
                We'll try to keep you informed about our progress throughout the process.
              </p>

              <h3 className="mt-5 mb-3">Program Rules</h3>
              <p>
                Make a good faith effort to avoid privacy violations, destruction of data, and interruption or degradation 
                of our service. Only interact with accounts you own or with explicit permission.
              </p>
              
      

              {/* <h3 className="mt-5 mb-3">In Scope</h3>
              <Table bordered className="mt-3">
                <tbody>
                  <tr>
                    <td><strong>Domain</strong></td>
                    <td>*.mobilkwik.com</td>
                  </tr>
                  <tr>
                    <td><strong>Android Apps</strong></td>
                    <td>MobilKwik owned applications</td>
                  </tr>
                </tbody>
              </Table> */}
            </Card.Body>
          </Card>
        );
      case 'hallOfFame':
        return (
          <Card className="border-0 shadow-sm h-100">
            <Card.Body>
              <h2 className="mb-4">Hall of Fame</h2>
              <blockquote className="blockquote mb-4">
                <h5>Disclosure Policy</h5>
                <ul className="mb-0">
                  <li className="mb-2">
                    We acknowledge first reports of unique vulnerabilities only
                  </li>
                  <li className="mb-2">
                    No public disclosure prior to our resolution
                  </li>
                  <li>
                    Improper disclosure may result in legal action
                  </li>
                </ul>
              </blockquote>
              
              <h3 className="mt-5 mb-3">Our Security Heroes</h3>
              <p className="text-muted mb-4">
                Individuals who have responsibly disclosed high severity vulnerabilities:
              </p>
              <Row>
                {['Dinesh Kumar', 'Amit Balotiya', 'Rahul Prajapat', 'Deepak Sharma', 'Kamlesh Meel', 
                  'Rajan Pandey', 'Munesh Kumari', 'Akash Singh', 'Vijay Gupta', 'Adarsh Patel', 
                  'Rajyvardhan Singh', 'Nandini Lodha', 'Rekha Kirad'].map((name, index) => (
                  <Col md={4} key={index} className="mb-3">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-shield-shaded custom-color-icon me-2"></i>
                      <span>{name}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        );
      default:
        return null;
    }
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
     <Container className="py-5">
      {/* Hero Section */}
      <Row className="mb-5">
        <Col md={12} className="text-center pt-5">
          <h1 className=" fw-bold mb-3">Securing Financial Futures, One Bug at a Time.</h1>
          <p className="lead mb-4">
            Keep your money and payments secure with our high quality tech and card protections
          </p>
          <ListGroup horizontal className="justify-content-center mb-4">
            {['Save time', 'Save money', 'Helps you grow'].map((item, index) => (
              <ListGroup.Item key={index} className="border-0 bg-transparent">
                <i className="bi bi-check-circle-fill custom-color-icon me-2"></i>
                {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>

      {/* Main Content with Sidebar */}
      <Row>
        <Col md={3}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-0">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link 
                    eventKey="guidelines"
                    active={activeTab === 'guidelines'} 
                    onClick={() => setActiveTab('guidelines')}
                    className={`py-3 px-4 d-flex align-items-center ${activeTab === 'guidelines' ? 'custom-color text-white' : 'text-dark'}`}
                  >
                    <i className={`bi bi-info-circle me-3 ${activeTab === 'guidelines' ? 'text-white' : 'custom-color-icon'}`}></i> 
                    <span className="fw-medium">Program Details</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    eventKey="hallOfFame"
                    active={activeTab === 'hallOfFame'} 
                    onClick={() => setActiveTab('hallOfFame')}
                    className={`py-3 px-4 d-flex align-items-center ${activeTab === 'hallOfFame' ? 'custom-color text-white' : 'text-dark'}`}
                  >
                    <i className={`bi bi-trophy me-3 ${activeTab === 'hallOfFame' ? 'text-white' : 'custom-color-icon'}`}></i>
                    <span className="fw-medium">Hall of Fame</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={9}>
          {renderContent()}
        </Col>
      </Row>
    </Container>
   </>
  );
};

export default BugBountyProgram;