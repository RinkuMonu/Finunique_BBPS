import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import {
  FaMobileAlt,
  FaSatelliteDish,
  FaGasPump,
  FaUmbrella,
  FaGooglePlay,
  FaTrafficLight,
} from "react-icons/fa";
import { MdElectricBolt, MdCreditCard } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import {
  GiGasStove,
  GiTap,
  GiTv,
  GiUsbKey,
  GiVikingLonghouse,
  GiWifiRouter,
} from "react-icons/gi";
import { HiCurrencyRupee } from "react-icons/hi";
import { FaHouseChimney } from "react-icons/fa6";
import MobileRechargeUI from "./Mobile_Recharge/MobileRechargeUI";
import DTHRecharge from "./DTH_Recharge/DTHRecharge";
import ElectricityBillPayment from "./ElectricityBillPayment/ElectricityBillPayment";
import CreditCardPayment from "./CreditCardPayment/CreditCardPayment";
import DataCardRecharge from "./DataCard/DataCardRecharge";
import Landline from "./Landline/Landline";
import Broadband from "./Broadband/Broadband";
import PipedGas from "./PipedGas/PipedGas";
import Insurance from "./Insurance/Insurance";
import Water from "./Water/Water";
import GooglePlay from "./GooglePlay/GooglePlay";
import Cable from "./Cable/Cable";
import Municipality from "./Municipality/Municipality";
import Emi from "./EMI/Emi";
import TrafficChallan from "./TrafficChallan/TrafficChallan";
import HousingBillPayment from "./HousingBillPayment/HousingBillPayment";
import LpgBooking from "./LpgBooking/LpgBooking";

const BillPayUI = () => {
  const [activeMenu, setActiveMenu] = useState("Mobile");
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const allItems = [
    { name: "Mobile", icon: <FaMobileAlt size={24} /> },
    { name: "DTH", icon: <FaSatelliteDish size={24} /> },
    { name: "Electricity", icon: <MdElectricBolt size={24} /> },
    { name: "Credit Card", icon: <MdCreditCard size={24} /> },
    { name: "Datacard", icon: <GiUsbKey size={24} /> },
    { name: "Landline", icon: <BiPhoneCall size={24} /> },
    { name: "Broadband", icon: <GiWifiRouter size={24} /> },
    { name: "Piped Gas", icon: <FaGasPump size={24} /> },
    { name: "Insurance", icon: <FaUmbrella size={24} /> },
    { name: "Water", icon: <GiTap size={24} /> },
    { name: "Google Play", icon: <FaGooglePlay size={24} /> },
    { name: "Cable", icon: <GiTv size={24} /> },
    { name: "Municipality", icon: <GiVikingLonghouse size={24} /> },
    { name: "EMI", icon: <HiCurrencyRupee size={24} /> },
    { name: "Housing", icon: <FaHouseChimney size={24} /> },
    { name: "LPG Booking", icon: <GiGasStove size={24} /> },
    { name: "Challan", icon: <FaTrafficLight size={24} /> },
  ];

  const [menuItems, setMenuItems] = useState([]);
  const [moreItems, setMoreItems] = useState([]);

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

  const handleMenuClick = (menu) => {
    if (menu === "More") {
      setShowModal(true);
    } else {
      setActiveMenu(menu);
    }
  };

  const handleMoreItemClick = (menu) => {
    const selectedModalItemIndex = moreItems.findIndex(
      (item) => item.name === menu
    );

    if (selectedModalItemIndex !== -1) {
      const selectedModalItem = moreItems[selectedModalItemIndex];
      const lastVisibleItem = menuItems[menuItems.length - 2]; // Last visible item before "More"

      // Update the navbar menu items
      setMenuItems((prevMenuItems) => [
        ...prevMenuItems.slice(0, -2), // Remove the last item and "More"
        { name: selectedModalItem.name, icon: selectedModalItem.icon }, // Add the selected modal item
        { name: "More", icon: `+${moreItems.length}` }, // Keep "More" with the same count
      ]);

      // Update the modal items
      setMoreItems((prevMoreItems) => [
        ...prevMoreItems.filter((item) => item.name !== menu), // Remove selected modal item
        { name: lastVisibleItem.name, icon: lastVisibleItem.icon }, // Add the last navbar item to modal
      ]);

      setActiveMenu(menu); // Set the active menu to the selected item
      setShowModal(false); // Close the modal
    }
  };

  useEffect(() => {
    // Dynamically update "More" count
    setMenuItems((prevMenuItems) => [
      ...prevMenuItems.slice(0, -1),
      { name: "More", icon: `+${moreItems.length}` },
    ]);
  }, [moreItems]);

  return (
    <>
      <nav
        className="py-4 bg-light border-bottom"
        style={{ marginTop: "95px" }}
      >
        <Container>
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
                    activeMenu === item.name ? "active" : ""
                  }`}
                >
                  <div
                    style={{
                      color:
                        activeMenu === item.name
                          ? "var(--themeht-primary-color)"
                          : "var(--themeht-primary-color)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <p
                    className="mb-0"
                    style={{
                      color:
                        activeMenu === item.name
                          ? "var(--themeht-primary-color)"
                          : "var(--themeht-primary-color)",
                      fontWeight: activeMenu === item.name ? "bold" : "bold",
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    {item.name}
                    {activeMenu === item.name && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "-5px",
                          lefht: "0",
                          heit: "0",
                          rigght: "4px",
                          backgroundColor: "var(--themeht-primary-color)",

                          borderRadius: "20px",
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
        </Container>
      </nav>

      <div>
        {activeMenu === "Mobile" && <MobileRechargeUI />}
        {activeMenu === "DTH" && <DTHRecharge />}
        {activeMenu === "Electricity" && <ElectricityBillPayment />}
        {activeMenu === "Credit Card" && <CreditCardPayment />}
        {activeMenu === "Datacard" && <DataCardRecharge />}
        {activeMenu === "Landline" && <Landline />}
        {activeMenu === "Broadband" && <Broadband />}
        {activeMenu === "Piped Gas" && <PipedGas />}
        {activeMenu === "Insurance" && <Insurance />}
        {activeMenu === "Water" && <Water />}
        {activeMenu === "Google Play" && <GooglePlay />}
        {activeMenu === "Cable" && <Cable />}
        {activeMenu === "Municipality" && <Municipality />}
        {activeMenu === "EMI" && <Emi />}
        {activeMenu === "Challan" && <TrafficChallan />}
        {activeMenu === "Housing" && <HousingBillPayment />}
        {activeMenu === "LPG Booking" && <LpgBooking />}
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body>
          <Container>
            <Row className="text-center">
              {moreItems.map((item, index) => (
                <Col
                  xs={6}
                  md={4}
                  key={index}
                  className="d-flex flex-column align-items-center my-2"
                  onClick={() => handleMoreItemClick(item.name)}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className="icon"
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
    </>
  );
};

export default BillPayUI;
