import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import axiosInstance from '../../axiosinstanse/axiosInstance';
import Swal from 'sweetalert2';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Login1 = ({ onClose, onLoginSuccess }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckboxValid, setIsCheckboxValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const { fetchUserfree } = useUser();

  const handleMobileChange = (e) => {
    const value = e.target.value;
    setMobileNumber(value);

    if (value.length === 0 || value.length === 10) {
      setIsValid(true);
      setErrorMessage("");
    } else {
      setIsValid(false);
      setErrorMessage("Please enter a valid 10-digit mobile number");
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (mobileNumber.length !== 10) {
      setIsValid(false);
      setErrorMessage("Please enter a valid 10-digit mobile number");
      return;
    }

    if (!isChecked) {
      setIsCheckboxValid(false);
      return;
    }

    setIsCheckboxValid(true);
    setIsLoading(true);

    try {
      const response = await axiosInstance.post("/v1/auth/send-otp", {
        mobileNumber: mobileNumber,
      });

      if (response.status === 200) {
        Swal.fire({
          title: "OTP Sent Successfully",
          text: "Please check your mobile for the OTP",
          icon: "success",
          timer: 3000,
          showConfirmButton: false
        });
        setOtpSent(true);
      }
    } catch (error) {
      let errorMessage = "Something went wrong! Please try again.";

      if (error.response) {
        errorMessage = error.response.data?.message || "An error occurred";
      } else if (error.request) {
        errorMessage = "Network Error! Please check your internet connection.";
      }

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (!otp || otp.length !== 6) {
      setErrorMessage("Please enter a valid 6-digit OTP");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axiosInstance.post("/v1/auth/login", {
        mobileNumber: mobileNumber,
        otp: otp,
      });

      if (response.status === 200) {
        const token = response.data.user.token;
        localStorage.setItem("token", token);
        localStorage.setItem("userid", response.data.user.id);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        fetchUserfree();

        Swal.fire({
          title: "Login Successful",
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          if (onClose) onClose();
          if (onLoginSuccess) onLoginSuccess();
        });
      }
    } catch (error) {
      let errorMessage = "Something went wrong!";

      if (error.response) {
        errorMessage = error.response.data?.message || "Invalid OTP";
      } else if (error.request) {
        errorMessage = "Network Error! Please check your internet connection.";
      }

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row main-section">
          <div className="position-absolute bgImage d-none d-md-block">
            <img src="/assets/Home/login-pattern.png" alt="login-pattern" />
          </div>
          <div
            className="col-md-6 bg-img d-none d-md-block my-3"
            style={{ borderRadius: "30px 0px 0px 30px", zIndex: "2" }}
          ></div>

          <div className="col-md-6 my-3 padding-md">
            <div className="form-container">
              <div className="form-box login-Heading d-flex flex-column h-100">
                {/* Close Button */}
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={onClose}
                    style={{ fontSize: "1.2rem" }}
                  ></button>
                </div>

                <h2>Welcome back!</h2>
                <form className="row g-3 needs-validation" noValidate>
                  <div className="mb-3">
                    <label htmlFor="mobileNumber" className="form-label">
                      Enter Mobile Number
                    </label>
                    <input
                      type="number"
                      className={`form-control ${isValid ? "" : "is-invalid"}`}
                      id="mobileNumber"
                      value={mobileNumber}
                      onChange={handleMobileChange}
                      placeholder="Enter Mobile Number"
                      required
                      disabled={otpSent}
                    />
                    {!isValid && (
                      <div className="invalid-feedback">{errorMessage}</div>
                    )}
                  </div>

                  <div className="form-check">
                    <input
                      className={`form-check-input ${isCheckboxValid ? "" : "is-invalid"}`}
                      type="checkbox"
                      id="flexCheckChecked"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      disabled={otpSent}
                    />
                    <label className="form-check-label ms-1" htmlFor="flexCheckChecked">
                      I agree to the <Link to={"/term"}>Terms & Conditions</Link>
                    </label>
                  </div>

                  {!otpSent && (
                    <button
                      className="btn OtpBtn px-0"
                      type="button"
                      disabled={isLoading}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={handleSendOtp}
                    >
                      {isLoading ? (
                        <DotLottieReact
                          src="https://lottie.host/faaf7fb5-6078-4f3e-9f15-05b0964cdb4f/XCcsBA5RNq.lottie"
                          autoplay
                          loop
                          style={{ width: 30, height: 30 }}
                        />
                      ) : (
                        "Send OTP"
                      )}
                    </button>
                  )}

                  {otpSent && (
                    <>
                      <div className="mb-3">
                        <label htmlFor="otp" className="form-label">
                          Enter OTP
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="otp"
                          value={otp}
                          onChange={handleOtpChange}
                          placeholder="Enter OTP"
                          required
                        />
                        {errorMessage && (
                          <div className="invalid-feedback">{errorMessage}</div>
                        )}
                      </div>

                      <button
                        className="btn OtpBtn px-0"
                        type="button"
                        disabled={isLoading}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onClick={handleVerifyOtp}
                      >
                        {isLoading ? (
                          <DotLottieReact
                            src="https://lottie.host/faaf7fb5-6078-4f3e-9f15-05b0964cdb4f/XCcsBA5RNq.lottie"
                            autoplay
                            loop
                            style={{ width: 30, height: 30 }}
                          />
                        ) : (
                          "Verify OTP"
                        )}
                      </button>
                    </>
                  )}
                </form>

                <div className="already-account mt-3 d-flex">
                  <h3>
                    New to ABDKS Solutions?
                    <Link to={"/createaccount"}>
                      <button
                        className="btn border-0 bg-white px-1 text-decoration-underline"
                        onClick={() => {}}
                      >
                        Create Account
                      </button>
                    </Link>
                  </h3>
                </div>

                <hr style={{ margin: "100px 0 10px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login1;
