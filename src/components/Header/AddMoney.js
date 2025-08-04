import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function AddMoney({ setIsOpen }) {
    const [amount, setAmount] = useState("");
const [error, setError] = useState("");


    const closeModal = () => setIsOpen(false);

    const handleAmountClick = (value) => {
         setAmount(value.toString());
    setError("");
    };
    const handleChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    const errorMsg = validateAmount(value);
    setError(errorMsg);
};


   const validateAmount = (value) => {
    if (!value) return "Amount is required.";
    if (!/^\d+$/.test(value)) return "Only digits are allowed.";
    const num = parseInt(value, 10);
    if (num < 10) return "Minimum amount is ₹10.";
    if (num > 50000) return "Maximum amount is ₹50,000.";
    return "";
};

    return (
        <>
            <div className="cdk-overlay-container fade show">
                <div
                    className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"
                    onClick={closeModal}
                ></div>
                <div
                    className="d-flex cdk-global-overlay-wrapper mbk-cdk-global-overlay-wrapper"
                    style={{ justifyContent: "center", alignItems: "center", height: "inherit" }}
                >
                    <div
                        id="cdk-overlay-0"
                        className="cdk-overlay-pane"
                        style={{ maxWidth: "80vw", position: "static" }}
                    >
                        <div className="mat-dialog-container">
                            <section
                                className="modalBody add-mon-container"
                                style={{ width: "400px", borderRadius: "20px", padding: "0px" }}
                            >
                                {/* Modal Header */}
                                <div className="form-header">
                                    <div className="form-head">
                                        <button className="cls" onClick={closeModal}>
                                            ✕
                                        </button>
                                        <p className="add-mon-header">Add Money to Wallet</p>
                                    </div>
                                </div>

                                {/* Modal Form */}
                                <div className="form-body">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="amount" className="form-label">Amount</label>
                                          <input
    type="tel"
    className={`form-control ${error ? "is-invalid" : ""}`}
    id="amount"
    placeholder="₹ Enter Amount"
    value={amount}
    onChange={handleChange}
/>
{error && <div className="invalid-feedback">{error}</div>}

                                        </div>
                                        <div className="money_btns">
                                            <button type="button" className="btn directaddmoney me-3" onClick={() => handleAmountClick(100)}>100+</button>
                                            <button type="button" className="btn directaddmoney me-3" onClick={() => handleAmountClick(500)}>500+</button>
                                            <button type="button" className="btn directaddmoney" onClick={() => handleAmountClick(1000)}>1000+</button>
                                        </div>
                                        {/* Pass the amount to the PaymentCheck page */}
                                        <Link
    to={error || !amount ? "#" : `/paymentcheck/${amount}`}
    className={`btn btn-primary d-block mt-4 w-100 ${error || !amount ? "disabled" : ""}`}
>
    Continue
</Link>

                                    </form>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
