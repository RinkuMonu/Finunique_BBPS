import React from "react";
import { useState } from "react";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Popup from "../../pages/Popup/Popup.jsx";
import Login from "../../pages/Login/Login.js";
import Home from "../../pages/Home.js";

const AppLayout = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <div>
      <Header/>
      <Home />
      {/* <Footer /> */}
      {isPopupOpen && (
        <Popup closePopup={closePopup}>
          <Login closePopup={closePopup} />
        </Popup>
      )}
    </div>
  );
};

export default AppLayout;
