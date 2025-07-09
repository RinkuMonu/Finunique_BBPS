import React from 'react'
import '../My_Wallet/MyWallet.css'
import './ProfileSetting.css'
import SEO from '../../components/SEO/SEO'
import { useUser } from '../../context/UserContext'
export default function ProfileSetting() {
    const {seo} = useUser()
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
            <div className='profile-setting'>
                <div className='overlay'>
                    <div className='container '>
                        <div className='row'>
                            <div className='col-md-6 col-sm-12'>
                                <div className="main-content">
                                    <div className="top-area hero-section-content text-left ">
                                        <h5 className="sub-heading animBottomIn fw-semibold" >
                                            Profile Settings
                                        </h5>
                                        <h1 className="top-section-heading ft55 animBottomIn AO3 Blue_Heading" >Customize Your Financial Journey with Profile Precision
                                        </h1>
                                        <p className="cmnFtLh fs-5 animBottomIn text-black" >
                                            Keep your money and payments secure with our high quality tech and card protections
                                        </p>
                                        <ul className="px-md-0  justify-content-start">
                                            <li className="d-md-flex px-3 ps-0">
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
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <div className='profile_form'>
                                    <form>
                                        <div class="mb-3">
                                            <label for="Mobile_Number" class="form-label">Mobile Number</label>
                                            <input type="number" class="form-control" id="Mobile_Number" placeholder="Mobile Number" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="holderName" class="form-label">Name</label>
                                            <input type="text" class="form-control" id="holderName" placeholder="Enter Name" />
                                        </div>
                                        <button className='updateBtn'>Update Now</button>
                                    </form>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
