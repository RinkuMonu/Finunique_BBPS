import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import OperatorSelection from "./OperatorSelection";
import BillDetailsSection from "./BillDetailsSection";
import PaymentStatusSection from "./PaymentStatusSection";
import OperatorSelection1 from "./OperatorSelection1";
import { Container, Row, Col, Modal } from "react-bootstrap";
import {
  FaMobileAlt,
  FaMoneyBillWave,
  FaWifi,
  FaLightbulb,
  FaReceipt,
  FaShieldAlt,
  FaTint,
  FaSatelliteDish,
  FaPhone,
  FaTv,
  FaCar,
  FaGasPump,
  FaCreditCard,
  FaUniversity,
} from "react-icons/fa";
import { MdDataUsage } from "react-icons/md";
import axiosInstance from "../../components/services/AxiosInstance";
import MobileRechargeUI from "./Mobile_Recharge/MobileRechargeUI";

import Broadband from "./Broadband/Broadband";
import ElectricityBillPayment from "./ElectricityBillPayment/ElectricityBillPayment";
import PipedGas from "./PipedGas/PipedGas";
import Insurance from "./Insurance/Insurance";
import Water from "./Water/Water";
import DTHRecharge from "./DTH_Recharge/DTHRecharge";
import Landline from "./Landline/Landline";
import { Cable } from "lucide-react";
import TrafficChallan from "./TrafficChallan/TrafficChallan";
import LpgBooking from "./LpgBooking/LpgBooking";
import DataCardRecharge from "./DataCard/DataCardRecharge";

import Emi1 from "./EMI/Emi1";
import Broadband1 from "./Broadband/Broadband1";
import ElectricityBillPayment1 from "./ElectricityBillPayment/ElectricityBillPayment1";
import PipedGas1 from "./PipedGas/PipedGas1";
import Insurance1 from "./Insurance/Insurance1";
import Water1 from "./Water/Water1";
import Cable1 from "./Cable/Cable1";
import LpgBooking1 from "./LpgBooking/LpgBooking1";
import Municipality1 from "./Municipality/Municipality1";
import Landline1 from "./Landline/Landline1";
import Fastag1 from "./Fastag/Fastag1";

import PostpaidRecharge1 from "./Postpaid/PostpaidRecharge1";
import DatacardPostpaidRecharge from "./DatacardPostpaid/DatacardPostpaidRecharge";
import DatacardPrepaidRecharge from "./DatacardPrepaid/DatacardPrepaidRecharge";

const BillPaymentSystem = () => {
  // API endpoints
  const OPERATORS_API = "/v1/s3/bill/operators";
  const DETAILS_API = "/v1/s3/bill/details";
  const PAYMENT_API = "/v1/s3/bill/pay";
  const STATUS_API = "/v1/s3/bill/status";

  // Stepper state
  const [step, setStep] = useState(1);
  const steps = [
    { id: 1, name: "Choose Operator" },
    { id: 2, name: "Bill Details" },
    { id: 3, name: "Payment" },
    { id: 4, name: "Status" },
  ];

  // State variables
  const [selectedCategory, setSelectedCategory] = useState("Postpaid");
  const [operators, setOperators] = useState([]);
  const [selectedOperator, setSelectedOperator] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [billDetails, setBillDetails] = useState(null);
  const [mpin, setMpin] = useState("");
  const [referenceId] = useState(Math.floor(1000000 + Math.random() * 9000000));
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [statusCheckLoading, setStatusCheckLoading] = useState(false);
  const [inputError, setInputError] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [moreItems, setMoreItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Menu items data
  const allItems = [
    // { name: "PREPAID", icon: <FaMobileAlt size={24} /> },
    { name: "Postpaid", icon: <FaMobileAlt size={24} /> },
    // { name: "POST PAID", icon: <FaMobileAlt size={24} /> },
    // { name: "POSTPAID", icon: <FaMobileAlt size={24} /> },
    { name: "DTH", icon: <FaSatelliteDish size={24} /> },
    { name: "EMI", icon: <FaMoneyBillWave size={24} /> },
    { name: "Broadband", icon: <FaWifi size={24} /> },
    { name: "Electricity", icon: <FaLightbulb size={24} /> },
    // { name: "BILL PAYMENT", icon: <FaReceipt size={24} /> },
    { name: "Gas", icon: <FaGasPump size={24} /> },
    { name: "Insurance", icon: <FaShieldAlt size={24} /> },
    { name: "Water", icon: <FaTint size={24} /> },
    { name: "Landline", icon: <FaPhone size={24} /> },
    { name: "Cable", icon: <FaTv size={24} /> },
    { name: "Fastag", icon: <FaCar size={24} /> },
    { name: "LPG", icon: <FaGasPump size={24} /> },
    // { name: "Bill Pay", icon: <FaCreditCard size={24} /> },
    { name: "BroadBand", icon: <FaWifi size={24} /> },
    { name: "Datacard Prepaid", icon: <MdDataUsage size={24} /> },
    { name: "Datacard Postpaid", icon: <MdDataUsage size={24} /> },
    { name: "Municipality", icon: <FaUniversity size={24} /> },
  ];

  // Component mapping
  const categoryComponents = {
    // "PREPAID": MobileRechargeUI,
    "Postpaid": PostpaidRecharge1,
    // "POST PAID": MobileRechargeUI,
    // "POSTPAID": MobileRechargeUI,
    "EMI": Emi1,
    "Broadband": Broadband1,
    "Electricity": ElectricityBillPayment1,
    "BILL PAYMENT": ElectricityBillPayment,
    "Gas": PipedGas1,
    "Insurance": Insurance1,
    "Water": Water1,
    "DTH": DTHRecharge,
    "Landline": Landline1,
    "Cable": Cable1,
    "Fastag": Fastag1,
    "LPG": LpgBooking1,
    "Bill Pay": ElectricityBillPayment,
    "BroadBand": Broadband,
    "Datacard Prepaid": DatacardPrepaidRecharge,
    "Datacard Postpaid": DatacardPostpaidRecharge,
    "Municipality": Municipality1
  };

  // Initialize menu items based on screen size
  useEffect(() => {
    const updateMenuItems = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
        setMenuItems([
          ...allItems.slice(0, 3),
          { name: "More", icon: `+${allItems.length - 3}` },
        ]);
        setMoreItems(allItems.slice(3));
      } else {
        setIsMobile(false);
        setMenuItems([
          ...allItems.slice(0, 9),
          { name: "More", icon: `+${allItems.length - 9}` },
        ]);
        setMoreItems(allItems.slice(9));
      }
    };

    updateMenuItems();
    window.addEventListener("resize", updateMenuItems);
    return () => window.removeEventListener("resize", updateMenuItems);
  }, []);

  // Update More count dynamically
  useEffect(() => {
    setMenuItems((prevMenuItems) => {
      if (prevMenuItems.some(item => item.name === "More")) {
        return [
          ...prevMenuItems.slice(0, -1),
          { name: "More", icon: `+${moreItems.length}` },
        ];
      }
      return prevMenuItems;
    });
  }, [moreItems]);

  // Handle menu item click
  const handleMenuClick = (menu) => {
    if (menu === "More") {
      setShowModal(true);
    } else {
      setSelectedCategory(menu);
      setStep(1);
      // Reset relevant states when changing category
      setSelectedOperator("");
      setAccountNumber("");
      setBillDetails(null);
    }
  };

  // Handle more item click from modal
  const handleMoreItemClick = (menu) => {
    const selectedModalItemIndex = moreItems.findIndex(
      (item) => item.name === menu
    );

    if (selectedModalItemIndex !== -1) {
      const selectedModalItem = moreItems[selectedModalItemIndex];
      const lastVisibleItem = menuItems[menuItems.length - 2];

      // Update the navbar menu items
      setMenuItems((prevMenuItems) => [
        ...prevMenuItems.slice(0, -2),
        { name: selectedModalItem.name, icon: selectedModalItem.icon },
        { name: "More", icon: `+${moreItems.length - 1}` },
      ]);

      // Update the modal items
      setMoreItems((prevMoreItems) => [
        ...prevMoreItems.filter((item) => item.name !== menu),
        { name: lastVisibleItem.name, icon: lastVisibleItem.icon },
      ]);

      setSelectedCategory(menu);
      setShowModal(false);
      setStep(1);
      // Reset relevant states when changing category
      setSelectedOperator("");
      setAccountNumber("");
      setBillDetails(null);
    }
  };

  // Check payment status
  const checkPaymentStatus = async (refId) => {
    try {
      setStatusCheckLoading(true);
      const response = await axiosInstance.post(STATUS_API, {
        referenceid: refId,
      });

      if (response.data && response.data.status === "success") {
        setPaymentStatus(response.data);

        if (response.data.data.data.status === "0") {
          showSuccessAlert("Transaction successful!");
        } else if (response.data.data.data.refunded === "1") {
          showSuccessAlert(response.data.message || "Transaction refunded");
        } else {
          showSuccessAlert(response.data.message || "Payment status checked");
        }
      } else {
        showErrorAlert(
          response.data?.message || "Failed to check payment status"
        );
      }
    } catch (err) {
      console.error("Payment status error:", err);
      showErrorAlert("Failed to check payment status");
    } finally {
      setStatusCheckLoading(false);
    }
  };

  // Validate input against operator's regex
  const validateInput = (value) => {
    if (!selectedOperator || !value) return true;

    const operator = operators.find((op) => op.id === selectedOperator);
    if (!operator?.regex) return true;

    try {
      const regexPattern = operator.regex.replace(/\\/g, "\\");
      const regex = new RegExp(regexPattern);
      return regex.test(value);
    } catch (err) {
      console.error("Invalid regex pattern:", operator.regex);
      return true;
    }
  };

  // Handle account number change with validation
  const handleAccountNumberChange = (e) => {
    const value = e.target.value;
    setAccountNumber(value);

    if (selectedOperator && value) {
      const operator = operators.find((op) => op.id === selectedOperator);
      if (operator?.regex) {
        const isValid = validateInput(value);
        if (!isValid) {
          setInputError(
            `Please enter a valid ${operator.displayname || "account number"}`
          );
        } else {
          setInputError("");
        }
      } else {
        setInputError("");
      }
    } else {
      setInputError("");
    }
  };

  // Fetch operators when category is selected
  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);
      axiosInstance
        .get(OPERATORS_API)
        .then((response) => {
          const filteredOperators = response.data.data.filter(
            (operator) =>
              operator.category.toLowerCase() ===
              selectedCategory.toLowerCase().replace(" ", "")
          );
          setOperators(filteredOperators);
          setLoading(false);
        })
        .catch((err) => {
          showErrorAlert("Failed to fetch operators");
          setLoading(false);
        });
    }
  }, [selectedCategory]);

  // Reset account number and errors when operator changes
  useEffect(() => {
    setAccountNumber("");
    setInputError("");
  }, [selectedOperator]);

  // Fetch bill details
  const fetchBillDetails = () => {
    if (!selectedOperator || !accountNumber) {
      showErrorAlert("Please select an operator and enter account number");
      return;
    }

    const operator = operators.find((op) => op.id === selectedOperator);
    if (operator?.regex && !validateInput(accountNumber)) {
      showErrorAlert(
        `Please enter a valid ${operator.displayname || "account number"}`
      );
      return;
    }

    setLoading(true);
    axiosInstance
      .post(DETAILS_API, {
        operator: selectedOperator,
        canumber: accountNumber,
      })
      .then((response) => {
        setBillDetails(response.data);
        setLoading(false);
        showSuccessAlert("Bill details fetched successfully!");
        setStep(2);
      })
      .catch((err) => {
        showErrorAlert("Failed to fetch bill details");
        setLoading(false);
      });
  };

  // Process payment
  const processPayment = () => {
    if (!mpin || !billDetails) {
      showErrorAlert("Please enter MPIN and fetch bill details first");
      return;
    }

    setLoading(true);
    axiosInstance
      .post(PAYMENT_API, {
        operator: selectedOperator,
        canumber: accountNumber,
        amount: billDetails.amount.toString(),
        referenceid: referenceId,
        latitude: "1.25787874",
        longitude: "1.75784512",
        bill_fetch: billDetails.bill_fetch,
        mpin: mpin,
      })
      .then((response) => {
        showSuccessAlert("Payment processed successfully! Checking status...");
        setLoading(false);
        checkPaymentStatus(referenceId);
        setStep(4);
      })
      .catch((err) => {
        showErrorAlert("Payment failed. Please try again.");
        setLoading(false);
      });
  };

  // Alert functions
  const showSuccessAlert = (message) => {
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: message,
      timer: 3000,
      showConfirmButton: false,
    });
  };

  const showErrorAlert = (message) => {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: message,
      confirmButtonColor: "#3085d6",
    });
  };

  // Stepper component
  const Stepper = () => {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between relative">
          {steps.map((stepItem) => (
            <div key={stepItem.id} className="flex flex-col items-center z-10">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  stepItem.id <= step
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {stepItem.id}
              </div>
              <span
                className={`mt-2 text-sm font-medium ${
                  stepItem.id <= step ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {stepItem.name}
              </span>
            </div>
          ))}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{
                width: `${((step - 1) / (steps.length - 1)) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-8 pt-0 px-4">
      {/* Icon-based Menu Navigation */}
      <nav className="py-4 bg-light border-bottom" style={{ marginTop: "95px" }}>
        <div>
          <Row className="text-center">
            {menuItems.map((item) => (
              <Col
                key={item.name}
                onClick={() => handleMenuClick(item.name)}
                className="menu-item"
                style={{ cursor: "pointer" }}
              >
                <div
                  className={`d-flex flex-column align-items-center ${
                    selectedCategory === item.name ? "active" : ""
                  }`}
                >
                  <div style={{ color: "var(--themeht-primary-color)" }}>
                    {item.icon}
                  </div>
                  <p
                    className="mb-0"
                    style={{
                      color: "var(--themeht-primary-color)",
                      fontWeight: "bold",
                      position: "relative",
                      display: "inline-block",
                      paddingBottom: "4px",
                    }}
                  >
                    {item.name}
                    {selectedCategory === item.name && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "0",
                          left: "0",
                          width: "100%",
                          height: "2px",
                          backgroundColor: "var(--themeht-primary-color)",
                          borderRadius: "1px",
                        }}
                      ></span>
                    )}
                  </p>
                </div>
              </Col>
            ))}
            <Col xs="auto">
              <img
                height={40}
                src="https://static.mobikwik.com/appdata/operator_icons/bbps_v2.png"
                alt="BBPS logo"
                className="mt-1"
              />
            </Col>
          </Row>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-4">
      

        {(loading || statusCheckLoading) && (
          <div className="text-center py-4">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            <p className="mt-2">Processing...</p>
          </div>
        )}

        {/* Category-specific content */}
        {step === 1 && selectedCategory && categoryComponents[selectedCategory] && (
          <div className="category-content mb-4">
            {React.createElement(categoryComponents[selectedCategory], {
              selectedCategory,
              onProceed: fetchBillDetails,
              selectedOperator,
              setSelectedOperator,
              accountNumber,
              setAccountNumber,
              inputError,
              setInputError,
              operators
            })}
          </div>
        )}

        {/* Operator Selection (shown when no specific component exists for category) */}
        {/* {step === 1 && (!selectedCategory || !categoryComponents[selectedCategory]) && (
          <OperatorSelection1
            selectedCategory={selectedCategory}
            operators={operators}
            selectedOperator={selectedOperator}
            setSelectedOperator={setSelectedOperator}
            accountNumber={accountNumber}
            handleAccountNumberChange={handleAccountNumberChange}
            inputError={inputError}
            fetchBillDetails={fetchBillDetails}
            loading={loading}
            onBack={() => {
              setSelectedCategory("");
              setStep(1);
            }}
          />
        )} */}

        {/* Step 2: Bill Details */}
        {step === 2 && billDetails && (
          <BillDetailsSection
            billDetails={billDetails}
            mpin={mpin}
            setMpin={setMpin}
            referenceId={referenceId}
            processPayment={processPayment}
            loading={loading}
            onBack={() => {
              setSelectedOperator("");
              setStep(1);
            }}
          />
        )}

        {/* Step 4: Payment Status */}
        {step === 4 &&
          paymentStatus &&
          paymentStatus.data &&
          paymentStatus.data.data && (
            <PaymentStatusSection
              paymentStatus={paymentStatus}
              referenceId={referenceId}
              checkPaymentStatus={checkPaymentStatus}
              statusCheckLoading={statusCheckLoading}
              onBack={() => {
                setPaymentStatus(null);
                setStep(2);
              }}
            />
          )}
      </div>

      {/* More Items Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>More Bill Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="text-center">
              {moreItems.map((item, index) => (
                <Col
                  xs={6}
                  md={4}
                  key={index}
                  className="d-flex flex-column align-items-center my-3"
                  onClick={() => handleMoreItemClick(item.name)}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className="icon mb-2"
                    style={{ fontSize: "24px", color: "#ffb300" }}
                  >
                    {item.icon}
                  </div>
                  <p className="mb-0" style={{ color: "#ffb300" }}>
                    {item.name}
                  </p>
                </Col>
              ))}
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BillPaymentSystem;