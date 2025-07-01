import React from 'react'

export default function PanDetails({pandata}) {
    console.log("pannnnnnnnSDFGHJHGFD",pandata);
    // NEWPS7317H
    
    return (
        <>
            <section className='container pt-4'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='aadhar_card_details'>
                            <div className='row'>
                                <div className='col-md-4 mb-3'>
                                    <div className='aadhar_box'>
                                        <i class="bi bi-copy"></i>
                                        <h3>Pan Number</h3>
                                        <p>{pandata?.pan_number}</p>
                                    </div>
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <div className='aadhar_box'>
                                        <i class="bi bi-copy"></i>
                                        <h3>Name</h3>
                                        <p>{pandata?.full_name }</p>
                                    </div>
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <div className='aadhar_box'>
                                        <i class="bi bi-copy"></i>
                                        <h3>Category</h3>
                                        <p>{pandata?.category}</p>
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
