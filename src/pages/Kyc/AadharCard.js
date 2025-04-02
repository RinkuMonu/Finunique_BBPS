import React from 'react'
import './kyc.css'

export default function AadharCard({ data }) {


    return (
        <>
            <section className='container pt-4'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='aadhar_card_details'>
                            <div className='row'>
                                <div className='col-md-3 mb-3'>
                                    <div className='aadhar_box'>
                                        <i class="bi bi-copy"></i>
                                        <h3>Aadhar Name</h3>
                                        <p>{data.full_name}</p>
                                    </div>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <div className='aadhar_box'>
                                        <i class="bi bi-copy"></i>
                                        <h3>Father Name</h3>
                                        <p>{data.care_of}</p>
                                    </div>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <div className='aadhar_box'>
                                        <i class="bi bi-copy"></i>
                                        <h3>Aadhar Number</h3>
                                        <p>{data.aadhaar_number}</p>
                                    </div>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <div className='aadhar_box'>
                                        <i class="bi bi-copy"></i>
                                        <h3>DOB</h3>
                                        <p>{data.dob}</p>
                                    </div>
                                </div>
                                <div className='col-md-3 mb-3'>
                                    <div className='aadhar_box'>
                                        <i class="bi bi-copy"></i>
                                        <h3>Gender</h3>
                                        <p>{data.gender}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
