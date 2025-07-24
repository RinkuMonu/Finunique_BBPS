import React from 'react'
import "./testimonial.css"; 



function Testinomials() {
  return (
    <>
        {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Trusted by Retailers Across Jaipur</h2>
            <p>What our Jaipur retailers say about ABDKS</p>
          </div>
          <div className="testimonial-grid">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill"></i>
                ))}
              </div>
              <p className="testimonial-quote">
                " I started with ABDKS in 2024, and now I handle 300 BBPS
                transactions daily. The stage is fast, and the support team is
                excellent."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">RK</div>
                <div className="author-details">
                  <h6>Ravi Kumar</h6>
                  <small>Retailer - Jaipur</small>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill"></i>
                ))}
              </div>
              <p className="testimonial-quote">
                " BBPS recharge and utility bill payment setup was so simple.
                My customers love instant service."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">NV</div>
                <div className="author-details">
                  <h6>Neha Verma</h6>
                  <small>Shop Owner - Jaipur</small>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill"></i>
                ))}
              </div>
              <p className="testimonial-quote">
                " Android app is smooth, and commission is more satisfied with
                others. Abdks is very satisfied."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">MM</div>
                <div className="author-details">
                  <h6>Mohit Meena</h6>
                  <small>Retail Merchant - Jaipur</small>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
       
        </div>
      </section>
    </>
  )
}

export default Testinomials
