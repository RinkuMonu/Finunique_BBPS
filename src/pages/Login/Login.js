import React, { useState } from "react";
import "./login.css";
import ReactCardFlip from "react-card-flip";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, verifyOtp } from "../../Features/Auth/authSlice";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Login = ({ closePopup }) => {
  const [flipState, setFlipState] = useState("login"); // default is login
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckboxValid, setIsCheckboxValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleSubmitLogin = async (e) => {
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
      const response = await dispatch(login(mobileNumber)).unwrap();
      console.log("Login Success:", response);

      if (response.message === "OTP sent successfully") {
        // Stay on same card, just show OTP input
        setFlipState("login");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage(error || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitOTP = async (e) => {
    e.preventDefault();

    if (!otp || otp.length !== 6) {
      setErrorMessage("Please enter a valid 6-digit OTP");
      return;
    }

    setIsLoading(true);
    try {
      const response = await dispatch(
        verifyOtp({ mobileNumber, otp })
      ).unwrap();

      console.log("OTP Verified:", response);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        closePopup();
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("OTP Verification failed:", error);
      setErrorMessage(error || "Invalid OTP, please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        className="login-form-wrapper"
        style={{ backgroundColor: "#EFF8FF", borderRadius: "0px" }}
      >
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
                  <h2>Welcome back!</h2>
                  <form
                    className="row g-3 needs-validation"
                    noValidate
                    onSubmit={handleSubmitLogin}
                  >
                    <div className="mb-3">
                      <label htmlFor="mobileNumber" className="form-label">
                        Enter Mobile Number
                      </label>
                      <input
                        type="number"
                        className={`form-control ${
                          isValid ? "" : "is-invalid"
                        }`}
                        id="mobileNumber"
                        value={mobileNumber}
                        onChange={handleMobileChange}
                        placeholder="Enter Mobile Number"
                        required
                      />
                      {!isValid && (
                        <div className="invalid-feedback">{errorMessage}</div>
                      )}
                    </div>

                    <div className="form-check">
                      <input
                        className={`form-check-input ${
                          isCheckboxValid ? "" : "is-invalid"
                        }`}
                        type="checkbox"
                        id="flexCheckChecked"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className="form-check-label ms-1"
                        htmlFor="flexCheckChecked"
                      >
                        I agree to the{" "}
                        <Link to={"/term"}>Terms & Conditions</Link>
                      </label>
                    </div>

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
                      type="submit"
                      disabled={isLoading}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {isLoading ? (
                        <DotLottieReact
                          src="https://lottie.host/faaf7fb5-6078-4f3e-9f15-05b0964cdb4f/XCcsBA5RNq.lottie"
                          autoplay
                          loop
                          style={{ width: 30, height: 30 }}
                        />
                      ) : (
                        "Submit OTP"
                      )}
                    </button>
                  </form>

                  <hr style={{ margin: "100px 0 10px" }} />
                  <div className="already-account mt-auto">
                    <h3>New to ABDKS Solutions?</h3>
                    <Link to={"/createaccount"}>
                      <button
                        className="btn border-0 bg-white px-0 text-decoration-underline"
                        onClick={() => setFlipState("create")}
                      >
                        Create Account
                      </button>
                    </Link>
                  </div>
                </div>
                {showPopup && (
                  <div className="popup-overlays">
                    <div className="popup-contents">
                      <h3>OTP Submitted Successfully!</h3>
                      <iframe src="https://lottie.host/embed/03f271aa-e217-438b-9e50-9d37ddfbc9d5/OKoDas2PKt.lottie"></iframe>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
