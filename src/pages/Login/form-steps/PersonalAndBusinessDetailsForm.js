import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { Form, Row, Col, Card } from 'react-bootstrap';

export default function PersonalAndBusinessDetailsForm({ formData, updateFormData }) {
  const [name, setName] = useState(formData.contactDetails.name || "");
  const [phone] = useState(formData.contactDetails.phone || "");
  const [email, setEmail] = useState(formData.contactDetails.email || "");
  const [mpin, setMpin] = useState(formData.contactDetails.mpin || "");
  const [businessName, setBusinessName] = useState(formData.businessDetails.businessName || "");
  const [businessType, setBusinessType] = useState(formData.businessDetails.businessType || "");
  const [address, setAddress] = useState(formData.businessDetails.address || "");
  const [pincode, setPincode] = useState(formData.businessDetails.pincode || "");
  const [ownerPhoto, setOwnerPhoto] = useState(formData.businessDetails.ownerPhoto || null);
  const [shopPhotos, setShopPhotos] = useState(formData.businessDetails.shopPhotos || []);

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    mpin: "",
    businessName: "",
    businessType: "",
    address: "",
    pincode: "",
  });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\d{10}$/.test(phone);
  const validateMpin = (mpin) => /^\d{6}$/.test(mpin);
  const validatePincode = (pincode) => /^\d{6}$/.test(pincode);

  useEffect(() => {
    console.log('MPIN validation:', validateMpin(mpin), 'Value:', mpin);
    console.log('Pincode validation:', validatePincode(pincode), 'Value:', pincode);

    const nameValid = name.trim().length > 0;
    const phoneValid = validatePhone(phone);
    const emailValid = validateEmail(email);
    const mpinValid = validateMpin(mpin);
    const businessNameValid = businessName.trim().length > 0;
    const businessTypeValid = businessType.trim().length > 0;
    const addressValid = address.trim().length > 0;
    const pincodeValid = validatePincode(pincode);

    const isContactValid = nameValid && phoneValid && emailValid && mpinValid;
    const isBusinessValid = businessNameValid && businessTypeValid && addressValid && pincodeValid;

    updateFormData("contactDetails", { 
      name, 
      phone, 
      email, 
      mpin,
      isValid: isContactValid 
    });
    
    updateFormData("businessDetails", {
      businessName,
      businessType,
      address,
      pincode,
      ownerPhoto,
      shopPhotos,
      isValid: isBusinessValid,
    });

    setErrors({
      name: nameValid ? "" : "Name is required",
      phone: phoneValid ? "" : "Valid 10-digit phone number is required",
      email: emailValid ? "" : "Valid email is required",
      mpin: mpinValid ? "" : "MPIN must be exactly 6 digits",
      businessName: businessNameValid ? "" : "Business name is required",
      businessType: businessTypeValid ? "" : "Business type is required",
      address: addressValid ? "" : "Address is required",
      pincode: pincodeValid ? "" : "Pincode must be exactly 6 digits",
    });
  }, [name, phone, email, mpin, businessName, businessType, address, pincode, ownerPhoto, shopPhotos]);

  return (
    <div className="mb-4">
      <Card className="mb-4 border-0 shadow-sm">
        <Card.Header className="bg-light">
          <h3 className="mb-0 fs-5 fw-bold">Contact Details</h3>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group controlId="name">
                <Form.Label>
                  Name <span className="text-danger">*</span>
                </Form.Label>
                <div className="position-relative">
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    isInvalid={!!errors.name}
                  />
                  {!errors.name && name && (
                    <Check className="position-absolute end-0 top-50 translate-middle-y me-2" size={16} />
                  )}
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group controlId="phone">
                <Form.Label>
                  Phone Number <span className="text-danger">*</span>
                </Form.Label>
                <div className="position-relative">
                  <Form.Control
                    type="text"
                    value={phone}
                    readOnly
                    placeholder="Verified mobile number"
                    className="bg-light"
                  />
                  {!errors.phone && phone && (
                    <Check className="position-absolute end-0 top-50 translate-middle-y me-2" size={16} />
                  )}
                </div>
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group controlId="email">
                <Form.Label>
                  Email <span className="text-danger">*</span>
                </Form.Label>
                <div className="position-relative">
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    isInvalid={!!errors.email}
                  />
                  {!errors.email && email && (
                    <Check className="position-absolute end-0 top-50 translate-middle-y me-2" size={16} />
                  )}
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group controlId="mpin">
                <Form.Label>
                  MPIN (6 digits) <span className="text-danger">*</span>
                </Form.Label>
                <div className="position-relative">
                  <Form.Control
                    type="password"
                    value={mpin}
                    onChange={(e) => setMpin(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    placeholder="Enter 6-digit MPIN"
                    maxLength={6}
                    isInvalid={!!errors.mpin}
                  />
                  {!errors.mpin && mpin.length === 6 && (
                    <Check className="position-absolute end-0 top-50 translate-middle-y me-2" size={16} />
                  )}
                  <Form.Control.Feedback type="invalid">
                    {errors.mpin}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mb-4 border-0 shadow-sm">
        <Card.Header className="bg-light">
          <h3 className="mb-0 fs-5 fw-bold">Business Details</h3>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group controlId="businessName">
                <Form.Label>
                  Business Name <span className="text-danger">*</span>
                </Form.Label>
                <div className="position-relative">
                  <Form.Control
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Enter business name"
                    isInvalid={!!errors.businessName}
                  />
                  {!errors.businessName && businessName && (
                    <Check className="position-absolute end-0 top-50 translate-middle-y me-2" size={16} />
                  )}
                  <Form.Control.Feedback type="invalid">
                    {errors.businessName}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group controlId="businessType">
                <Form.Label>
                  Business Type <span className="text-danger">*</span>
                </Form.Label>
                <Form.Select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  isInvalid={!!errors.businessType}
                >
                  <option value="">Select business type</option>
                  <option value="Retail">Retail</option>
                  <option value="Wholesale">Wholesale</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Service">Service</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.businessType}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group controlId="pincode">
                <Form.Label>
                  Pincode <span className="text-danger">*</span>
                </Form.Label>
                <div className="position-relative">
                  <Form.Control
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    placeholder="Enter 6-digit pincode"
                    maxLength={6}
                    isInvalid={!!errors.pincode}
                  />
                  {!errors.pincode && pincode.length === 6 && (
                    <Check className="position-absolute end-0 top-50 translate-middle-y me-2" size={16} />
                  )}
                  <Form.Control.Feedback type="invalid">
                    {errors.pincode}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>

            <Col md={12} className="mb-3">
              <Form.Group controlId="address">
                <Form.Label>
                  Address <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter full business address"
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="border-0 shadow-sm">
        <Card.Header className="bg-light">
          <h3 className="mb-0 fs-5 fw-bold">Document Uploads</h3>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group controlId="ownerPhoto">
                <Form.Label>Owner Photo</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setOwnerPhoto(file);
                  }}
                />
                {ownerPhoto && (
                  <Form.Text className="text-muted">
                    Selected: {ownerPhoto.name}
                  </Form.Text>
                )}
              </Form.Group>
            </Col>

            <Col md={6} className="mb-3">
              <Form.Group controlId="shopPhotos">
                <Form.Label>Shop Photos (you can upload multiple)</Form.Label>
                <Form.Control
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files) {
                      setShopPhotos(Array.from(files));
                    }
                  }}
                />
                {shopPhotos.length > 0 && (
                  <ul className="mt-2 ps-3">
                    {shopPhotos.map((f, i) => (
                      <li key={i} className="small text-muted">{f.name}</li>
                    ))}
                  </ul>
                )}
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}