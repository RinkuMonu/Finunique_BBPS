import React, { useState } from "react";
import './MyWallet.css'
import AddMoney from "../../components/Header/AddMoney.js";
import SEO from "../../components/SEO/SEO.js";
import { useUser } from "../../context/UserContext.js";

function MyWallet() {
    const [isOpen, setIsOpen] = useState(false);
    const {seo} = useUser()
    const openModal   = () => setIsOpen(true);
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
          <div className='w100'>
            <section className='hero-section-container'>
                <section className='overlay'>
                    <section className='hero-section-wrapper padding pb-0'>
                        <div className="main-content ">
                            <div className="top-area hero-section-content text-center ">
                                <h5 className="sub-heading animBottomIn fw-semibold" >
                                    My Wallet
                                </h5>
                                <h1 className="top-section-heading ft55 animBottomIn AO3 Blue_Heading" >Organise wallet at one place
                                </h1>
                                <p className="cmnFtLh fs-5 animBottomIn text-black" >
                                    Keep your money and payments secure with our high quality tech and card protections
                                </p>
                                <ul className="  px-md-0 ">
                                    <li className="d-md-flex px-3">
                                        <img alt="icon" className='colort me-1' src="/assets/check-2.webp" width="36" height="36" decoding="async" data-nimg="1" loading="lazy" />
                                        <div className='text-black fs-6 align-self-center'> Save time</div>
                                    </li>
                                    <li className="d-md-flex px-3">
                                        <img alt="icon" className='colort me-1' src="/assets/check-2.webp" width="36" height="36" decoding="async" data-nimg="1" loading="lazy" />
                                        <div className='text-black fs-6 align-self-center'>Save money</div>
                                    </li>
                                    <li className="d-md-flex px-3">
                                        <img alt="icon" className='colort me-1' src="/assets/check-2.webp" width="36" height="36" decoding="async" data-nimg="1" loading="lazy" />
                                        <div className='text-black fs-6 align-self-center'>Helps you grow</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
                <section className=" container roundwrapper glowshdo5 py-0" >
                    <div className="px-3 py-5 mt-5">
                        <div className="d-table-cell align-top  pe-3 border-end w-25 ">
                            <nav>
                                <div className="nav flex-col " id="nav-tab" role="tablist">

                                    <button className="sidetabs nav-link active w-100 text-start" data-bs-toggle="tab" type="button" tabindex="0" data-bs-target="#balance">Balance Breakup
                                        <i className="bi bi-chevron-right float-end "></i>
                                    </button>

                                    <button className="sidetabs nav-link  w-100 text-start" data-bs-toggle="tab" type="button" tabindex="0" data-bs-target="#SavedCard">
                                        Saved Card  <i className="bi bi-chevron-right float-end "></i>
                                    </button>

                                    <button className="sidetabs nav-link  w-100 text-start" data-bs-toggle="tab" type="button" tabindex="0" data-bs-target="#Connection">Saved Connections
                                        <i className="bi bi-chevron-right float-end "></i>
                                    </button>
                                    <button className="sidetabs nav-link  w-100 text-start" data-bs-toggle="tab" type="button" tabindex="0" data-bs-target="#Linked_acc">
                                        Linked Bank Account
                                        <i className="bi bi-chevron-right float-end "></i>
                                    </button>
                                </div>
                            </nav>
                        </div>
                        <div className="d-table-cell  ">
                            <div className="tab-content px-5" id="pills-tabContent">
                                <div className="tab-pane fade show active" id='balance' role="tabpanel" tabindex="0">
                                    <section  >
                                        <div className="row border_dashed pb-5 ">
                                            <div className="col-md-8  ">
                                                <div className=" green_bar">
                                                </div>
                                                <p className="fw-semibold fs-5 mb-1">
                                                    Money Added
                                                </p>
                                            </div>
                                            <div className="col-md-4 fw-600 ">
                                                <span className="fw-semibold  float-end">₹ 0</span>
                                            </div>
                                            <div className="col-md-12  ">
                                                <button type="button" className=" btn bg_blue btn-primary  " onClick={openModal}>
                                                    <span className="">
                                                        Add Money
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                <div className="tab-pane fade" id='SavedCard' role="tabpanel" tabindex="0">  <section >
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="Credit_card">
                                                <p className="text-secondary mb-0">Credit Card Number</p>
                                                <p className="cardNumber">XXXX XXXX XXXX 9433</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card_removeBtn">
                                                <button className="btn">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                </div>
                                <div className="tab-pane fade" id='Connection' role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Add New Connections
                                    </button>

                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Add Connection</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <label className="form-label">Category</label>
                                                    <select className="form-select" aria-label="Default select example">
                                                        <option selected>Mobile</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                    <div className="mb-3 mt-3">
                                                        <label for="mobile_number" className="form-label">Mobile Number</label>
                                                        <input type="number" className="form-control" id="mobile_number" placeholder="Mobile Number" />
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Prepaid" value="option1" />
                                                        <label class="form-check-label" for="Prepaid">Prepaid</label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="PostPaid" value="option2" />
                                                        <label class="form-check-label" for="PostPaid">PostPaid</label>
                                                    </div>
                                                    <br />
                                                    <label className="form-label mt-3">Operator</label>
                                                    <select className="form-select" aria-label="Select Operator">
                                                        <option selected>Airtel</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                    <label className="form-label mt-3">Circle</label>
                                                    <select className="form-select" aria-label="Select Circle">
                                                        <option selected>Rajasthan</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                    <div className="mb-3 mt-3">
                                                        <label for="Nickname" className="form-label">Nickname</label>
                                                        <input type="text" className="form-control" id="Nickname" placeholder="Nickname" />
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-primary">Save</button>
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row py-5 border_dashed'>
                                        <div className='col-md-7 col-sm-12 pt-5'>
                                            <div className='row'>
                                                <div className="col-md-6">
                                                    <div className="d-flex align-items-center gap-5 recharge_box">
                                                        <img className="rounded-2 me-2" src="/assets/airtel.png" width={50} />
                                                        <p className="mb-0">9358448803</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 align-content-center align-self-center pt-2">
                                                    <div className="primary_number">
                                                        <p>	Airtel <span className="ms-2">(Primary)</span></p> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-4 col-sm-12 pt-5 '>
                                            <button type="button" className='btn float-end btn-primary btn_color py-2 fs-6 px-3'>Recharge</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id='Linked_acc' role="tabpanel" tabindex="0">
                                    <div className='w-50 bg_bluelight rounded pt-2 px-2'>
                                        <a href='' className='text-decoration-none text_blue fw-semibold'>
                                            Add New Bank Account
                                        </a>
                                        <hr className='my-1 '></hr>
                                        <div className='d-flex '>
                                            <div className="dropdown">
                                                <a className="text-black" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="bi bi-info-circle py-1 px-2"></i>
                                                </a>
                                                <div className="dropdown-menu popoverblock">
                                                    <p>In case of account closure or expiry of the wallet account, the available wallet balance would be transferred to this bank account post verification. Please provide your own bank account details.</p>
                                                </div>
                                            </div>

                                            <p>Designated bank account with Finunique Small Private Limited small pvt ltd .</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            {isOpen && <AddMoney setIsOpen={setIsOpen} />}
        </div >
      </>
    )
}

export default MyWallet
