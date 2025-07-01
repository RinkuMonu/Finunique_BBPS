import React from 'react'

export default function BankDetails({bankData}) {
    console.log("bank dataAAA",bankData)
    
    return (
        <>
            {/* <div className="bank-details-card mt-3">
                <h4>Bank Details Verified ✅</h4>
                <p><strong>Bank Account Number:</strong> 123456789</p>
                <p><strong>Bank Name:</strong> HDFC Bank</p>
                <p><strong>IFSC Code:</strong> HDFC0001234</p>
                <p><strong>Account Holder Name:</strong> John Doe</p>
            </div> */}
            <section className='container pt-4'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='aadhar_card_details'>
                        <div className='row'>
                            <div className='col-md-4 mb-3'> 
                                <div className='aadhar_box'>
                                <i class="bi bi-copy"></i>
                                    <h3>Name</h3>
                                    <p>{bankData?.beneficiary_name}</p>
                                </div>
                            </div>
                            <div className='col-md-4 mb-3'> 
                                <div className='aadhar_box'>
                                <i class="bi bi-copy"></i>
                                    <h3>Account Existing</h3>
                                    <p>{bankData?.account_exists}</p>
                                </div>
                            </div>
                            <div className='col-md-4 mb-3'> 
                                <div className='aadhar_box'>
                                <i class="bi bi-copy"></i>
                                    <h3>IFSC</h3>
                                    <p>{bankData?.beneficiary_ifsc}</p>
                                </div>
                            </div>
                            {/* <div className='col-md-4 mb-3'> 
                                <div className='aadhar_box'>
                                <i class="bi bi-copy"></i>
                                    <h3>Micr Number</h3>
                                    <p>{bankData?.data?.name?.ifsc_details?.micr}</p>
                                </div>
                            </div> */}
                            <div className='col-md-4 mb-3'> 
                                <div className='aadhar_box'>
                                <i class="bi bi-copy"></i>
                                    <h3>Bank Name</h3>
                                    <p>{bankData?.bank_name}</p>
                                </div>
                            </div>
                            <div className='col-md-4 mb-3'> 
                                <div className='aadhar_box'>
                                <i class="bi bi-copy"></i>
                                    <h3>Branch</h3>
                                    <p>{bankData?.branch_name}</p>
                                </div>
                            </div>
                            {/* <div className='col-md-12 mb-3'> 
                                <div className='aadhar_box'>
                                <i class="bi bi-copy"></i>
                                    <h3>Address</h3>
                                    <p>{bankData?.data?.name?.ifsc_details?.address}</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                
            </div>

        </section>
        </>
    )
}
