import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import AddMoney from "./AddMoney";
import { useDispatch } from "react-redux";
import { logout } from "../../Features/Auth/authSlice";
export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);
  const [showUserOptions, setShowUserOptions] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const handlelogout = () => {
    dispatch(logout());
    localStorage.removeItem("id");
    navigate("/");
  };

  return (
    <>
      <header id="site-header" className="header">
        <div id="header-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <nav className="navbar navbar-expand-lg justify-content-lg-between px-4">
                  <Link className="navbar-brand logo" to={"/"}>
                    <img
                      className="img-fluid"
                      src="/assets/Home/logo2.png"
                      alt=""
                    />
                  </Link>
                  <button
                    className="navbar-toggler ht-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <svg
                      width="40px"
                      height="40px"
                      viewBox="-2.4 -2.4 28.80 28.80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke="#CCCCCC"
                        stroke-width="0.528"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
                          fill="#000000"
                        ></path>{" "}
                        <path
                          d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z"
                          fill="#000000"
                        ></path>{" "}
                        <path
                          d="M3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z"
                          fill="#000000"
                        ></path>{" "}
                      </g>
                    </svg>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav ms-auto">
                      <li className="nav-item">
                        <Link className="nav-link active" to={"/"}>
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/AboutUs"}>
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        {/* Hoverable Services Menu */}
                        <Link className="nav-link" to="/Services">
                          Our Services
                          <button className=" dropdown-toggle bg-white border-0">
                            <i className="bi bi-chevron-down"></i>
                          </button>
                        </Link>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="servicesDropdown"
                        >
                          <li>
                            <Link className="dropdown-item" to="/recharge">
                              <i class="bi bi-lightning-charge"></i>
                              Recharge & Bill Pay
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/transfer-to-bank"
                            >
                              <i class="bi bi-currency-rupee"></i>
                              Transfer to Bank
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/redeem-payback-points"
                            >
                              <i class="bi bi-ui-radios-grid"></i>
                              Redeem Payback Points
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to={"/wallet-transfer"}
                            >
                              <svg
                                className="custom-svg"
                                height="64px"
                                width="64px"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="-83.28 -83.28 656.46 656.46"
                                xmlSpace="preserve"
                                fill="#000000"
                              >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  <g>
                                    <g>
                                      <path d="M90.3,96.956c-3.8,3.9-3.8,10.2,0.2,14c3.9,3.8,10.2,3.8,14-0.2c35.8-36.7,83.8-57.2,135-57.8 c50-0.6,97.4,18,133.7,52.2l-18.2,0.2c-5.5,0.1-9.8,4.5-9.8,10c0.1,5.4,4.5,9.8,9.9,9.8h0.1l42.2-0.5c5.5-0.1,9.8-4.5,9.8-10 l-0.4-42.1c-0.1-5.4-4.5-9.8-9.9-9.8h-0.1c-5.5,0.1-9.8,4.5-9.8,10l0.2,18.4c-40.1-38-92.6-58.6-147.9-58 C182.7,33.956,129.8,56.556,90.3,96.956z"></path>
                                      <path d="M378.9,379.056c-35.8,36.7-83.8,57.2-135,57.8c-50,0.6-97.4-18-133.7-52.2l18.2-0.2 c5.5-0.1,9.8-4.5,9.8-10c-0.1-5.4-4.5-9.8-9.9-9.8h-0.1l-42.2,0.5c-5.5,0.1-9.8,4.5-9.8,10l0.5,42.2c0.1,5.4,4.5,9.8,9.9,9.8h0.1 c5.5-0.1,9.8-4.5,9.8-10l-0.2-18.4c39.5,37.4,90.9,58,145.4,58c0.8,0,1.7,0,2.5,0c56.5-0.7,109.5-23.3,149-63.7 c3.8-3.9,3.8-10.2-0.2-14C389,375.056,382.8,375.156,378.9,379.056z"></path>
                                      <path d="M78.2,240.256c0-3.3-1.7-6.4-4.4-8.2c-1.8-1.2-2.8-3.2-2.8-5.3v-36.1c0-12.5,10.1-22.6,22.6-22.6 h7.8c12.5,0,22.6,10.1,22.6,22.6v36.1c0,2.1-1.1,4.1-2.8,5.3c-2.8,1.8-4.4,4.9-4.4,8.2v34.8c0,4.4,2.5,8.4,6.5,10.3 c4.5,2.2,27.8,14,49.4,31.7c1.7,1.4,2.7,3.6,2.7,5.9v24.7c0,5.5,4.4,9.9,9.9,9.9s9.9-4.4,9.9-9.9v-24.7c0-8.2-3.6-15.9-10-21.2 c-18.9-15.6-39.2-26.9-48.6-31.8v-25.1c4.6-4.8,7.3-11.3,7.3-18.1v-36.1c0-23.4-19-42.4-42.4-42.4h-7.8c-23.4,0-42.4,19-42.4,42.4 v36.1c0,6.8,2.6,13.3,7.3,18.1v25.1c-9.5,4.9-29.7,16.3-48.6,31.8c-6.3,5.2-10,12.9-10,21.2v24.7c0,5.5,4.4,9.9,9.9,9.9 s9.9-4.4,9.9-9.9v-24.7c0-2.3,1-4.4,2.7-5.9c21.5-17.7,44.9-29.5,49.4-31.7c3.9-1.9,6.5-6,6.5-10.3v-34.8H78.2z"></path>
                                      <path d="M479.9,301.856c-18.9-15.6-39.2-26.9-48.6-31.8v-25.1c4.6-4.8,7.3-11.3,7.3-18.1v-36.1 c0-23.4-19-42.4-42.4-42.4h-7.8c-23.4,0-42.4,19-42.4,42.4v36.1c0,6.8,2.6,13.3,7.3,18.1v25c-9.5,4.9-29.7,16.3-48.6,31.8 c-6.3,5.2-10,12.9-10,21.2v24.7c0,5.5,4.4,9.9,9.9,9.9s9.9-4.4,9.9-9.9v-24.7c0-2.3,1-4.4,2.7-5.9c21.5-17.7,44.9-29.5,49.4-31.7 c3.9-1.9,6.4-6,6.4-10.3v-34.8c0-3.3-1.7-6.4-4.4-8.2c-1.8-1.2-2.8-3.2-2.8-5.3v-36.1c0-12.5,10.1-22.6,22.6-22.6h7.8 c12.5,0,22.6,10.1,22.6,22.6v36.1c0,2.1-1.1,4.1-2.8,5.3c-2.8,1.8-4.4,4.9-4.4,8.2v34.8c0,4.4,2.5,8.4,6.4,10.3 c4.5,2.2,27.9,14,49.4,31.7c1.7,1.4,2.7,3.6,2.7,5.9v24.7c0,5.5,4.4,9.9,9.9,9.9s9.9-4.4,9.9-9.9v-24.7 C489.8,314.756,486.2,307.056,479.9,301.856z"></path>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                              Wallet Transfer
                            </Link>
                          </li>
                          <div class="arrow"></div>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/WhyUs"}>
                          Why Us?
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to={"/ContactUs"}>
                          Contact Us
                        </Link>
                      </li>

                      {!localStorage.getItem("token") ? (
                        <>
                          <li className="nav-item">
                            <div className="nav-link header-right d-lg-flex align-items-center">
                              <Link className="header-btn" to={"/login"}>
                                <i class="bi bi-box-arrow-in-right"></i>
                              </Link>
                            </div>
                          </li>
                          <li
                            className="nav-item position-relative"
                            onMouseEnter={() => setShowUserOptions(true)}
                            onMouseLeave={() => setShowUserOptions(false)}
                          >
                            <div className="nav-link header-right d-lg-flex align-items-center create-account">
                              <Link
                                className="header-btn"
                                onClick={() => {}}
                                style={{ cursor: "pointer" }}
                              >
                                <i class="bi bi-person-add"></i>
                              </Link>
                              {showUserOptions && (
                                <div
                                  className="position-absolute bg-white shadow rounded p-2"
                                  style={{
                                    top: "100%",
                                    left: 0,
                                    minWidth: "150px",
                                    zIndex: 1000,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "5px",
                                  }}
                                >
                                  <Link
                                    to="/register/useraccountcreation"
                                    className="dropdown-item"
                                  >
                                    User
                                  </Link>
                                  <Link
                                    to="/createaccount"
                                    className="dropdown-item"
                                  >
                                    Retailer
                                  </Link>
                                  <Link
                                    to="/createaccount"
                                    className="dropdown-item"
                                  >
                                    Distributor
                                  </Link>
                                </div>
                              )}
                            </div>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="nav-item">
                            {/* Trigger Button */}
                            <Link
                              to={"#"}
                              className="nav-link balance_link"
                              onClick={openModal}
                            >
                              <p className="mb-0" style={{ fontSize: "12px" }}>
                                Balance:
                              </p>
                              <p
                                className="mb-0"
                                style={{
                                  fontWeight: "700",
                                  lineHeight: "6px",
                                  fontSize: "12px",
                                }}
                              >
                                ₹0{" "}
                                <i
                                  class="bi bi-plus"
                                  style={{ color: "#404040", fontSize: "14px" }}
                                ></i>
                              </p>
                            </Link>
                          </li>
                          <li
                            className={`nav-item dropdown ${
                              isDropdownOpen ? "show" : ""
                            }`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            <Link
                              className="nav-link dropdown-toggle"
                              to="#"
                              id="profileDropdown"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded={isDropdownOpen ? "true" : "false"}
                            >
                              <img
                                src="/assets/Home/user-logo-new.svg"
                                width={27}
                                alt=""
                              />
                              <img
                                className="downimage"
                                src="/assets/Home/menu-ham-icon.png"
                                width={15}
                                alt=""
                              />
                            </Link>
                            <ul
                              className={`dropdown-menu profile-menu ${
                                isDropdownOpen ? "show" : ""
                              }`}
                              aria-labelledby="profileDropdown"
                            >
                              <div className="">
                                {/* Header Section */}
                                <div className="dropdown-header">
                                  <div className="float-end">
                                    <Link to={""} className="help_link p-0">
                                      Help?
                                    </Link>
                                  </div>
                                  <h2 className="mb-1">Test User</h2>
                                  <p className="mb-0">testuser@gmail.com</p>
                                  <p>0123456789</p>

                                  <div className="d-flex align-items-baseline justify-content-between">
                                    <span>Available Balance: ₹0</span>
                                    <button className="btn btn-primary btn-sm mt-2">
                                      Add
                                    </button>
                                  </div>
                                  {localStorage.getItem("USER") ? (
                                    <>
                                      <p>Your KYC is Completed</p>
                                    </>
                                  ) : (
                                    <Link
                                      to={"/kyc"}
                                      className="border-0 kycBtn btn-sm mt-2"
                                    >
                                      Complete Your KYC
                                    </Link>
                                  )}
                                </div>

                                {/* List Items */}
                                <ul className="dropdown-list">
                                  <li className="dropdown-item">
                                    <Link to={"/mywallet"}>
                                      <i className="bi bi-wallet2"></i> My
                                      Wallet
                                    </Link>
                                  </li>
                                  <li className="dropdown-item">
                                    <Link to={"/history"}>
                                      <i className="bi bi-clock-history"></i>{" "}
                                      History
                                    </Link>
                                  </li>
                                  <li className="dropdown-item">
                                    <Link to={"/profilesetting"}>
                                      <i className="bi bi-gear"></i> Profile
                                      Settings
                                    </Link>
                                  </li>
                                  <li className="dropdown-item">
                                    <Link onClick={handlelogout}>
                                      <i className="bi bi-box-arrow-right"></i>{" "}
                                      LogOut
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </ul>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isOpen && <AddMoney setIsOpen={setIsOpen} />}
    </>
  );
}
