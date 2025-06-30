import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import homebanner from "../../Assets/images/homebnner.png"




export default function Blog() {
  return (
    <div >
    
      <section className="blog-section d-flex align-items-center mt-5">
        <div className="hero-overlay"></div>
        <div className="container text-center position-relative">
          <h1 className="hero-title">Blog</h1>
          <p className=" fw-bold">
            Welcome to the ABDKS Blog, your go-to source for the latest
            trends, expert grooming tips, and salon industry insights.
          </p>
        </div>
      </section>

      <div className="content-section">
        <div className="container blog_Section">
          <div className="row">
            <div className="col-md-12" data-aos="fade-up">
              <div className="heading text-center">
                <h2>Blog – Stay Ahead in Style & Grooming</h2>
              </div>
              <div
                className="de-separator"
                style={{
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>

        
            {/* <div className="text-center py-5">No blogs available</div> */}
       
            <div className="row gx-3 pt-2">
         
                <div className="col-md-4 mb-4"  data-aos="fade-up">
                  <Link
                    to=""
                    className="text-decoration-none"
                  >
                    <div
                      className="border shadow-lg h-100 blog-card"
                      style={{ cursor: "pointer", transition: "transform 0.3s" }}
                    >
                      <div className="blog_img text-center pt-2">
                        <img
                          src={homebanner}
                          className="img-fluid"
                          alt="blog_title"
                          onError={(e) => {}}
                          style={{
                            maxHeight: "200px",
                            objectFit: "cover",
                            width: "100%",
                          }}
                        />
                      </div>
                      <div className="pt-4">
                        <div className="blog_content px-3 text-black">
                          <h3 className="fs-5">blog_title</h3>
                          <p className="text-muted fs-6">
                         
                          </p>
                          <p className="blog-summary readmore fs-6">blog_content
                            
WARNING in [eslint]
src\pages\services\Br
  Line 3:8:  'Button' is defined but never used  no-unused-vars

webpack compiled with 2 warnings
Compiling...
Compiled with warnings.

Failed to parse source map from  file: Error: ENOENT: no such file or directory, open 'D:\Abdks_Fin


                          </p>

                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                 <div className="col-md-4 mb-4"  data-aos="fade-up">
                  <Link
                    to="/blog_details"
                    className="text-decoration-none"
                  >
                    <div
                      className="border shadow-lg h-100 blog-card"
                      style={{ cursor: "pointer", transition: "transform 0.3s" }}
                    >
                      <div className="blog_img text-center pt-2">
                        <img
                          src={homebanner}
                          className="img-fluid"
                          alt="blog_title"
                          onError={(e) => {}}
                          style={{
                            maxHeight: "200px",
                            objectFit: "cover",
                            width: "100%",
                          }}
                        />
                      </div>
                      <div className="pt-4">
                        <div className="blog_content px-3 text-black">
                          <h3 className="fs-5">blog_title</h3>
                          <p className="text-muted fs-6">
                         
                          </p>
                          <p className="blog-summary readmore fs-6">blog_content
                            
WARNING in [eslint]
src\pages\services\Br
  Line 3:8:  'Button' is defined but never used  no-unused-vars

webpack compiled with 2 warnings
Compiling...
Compiled with warnings.

Failed to parse source map from  file: Error: ENOENT: no such file or directory, open 'D:\Abdks_Fin


                          </p>

                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
 <div className="col-md-4 mb-4"  data-aos="fade-up">
                  <Link
                    to=""
                    className="text-decoration-none"
                  >
                    <div
                      className="border shadow-lg h-100 blog-card"
                      style={{ cursor: "pointer", transition: "transform 0.3s" }}
                    >
                      <div className="blog_img text-center pt-2">
                        <img
                          src={homebanner}
                          className="img-fluid"
                          alt="blog_title"
                          onError={(e) => {}}
                          style={{
                            maxHeight: "200px",
                            objectFit: "cover",
                            width: "100%",
                          }}
                        />
                      </div>
                      <div className="pt-4">
                        <div className="blog_content px-3 text-black">
                          <h3 className="fs-5">blog_title</h3>
                          <p className="text-muted fs-6">
                         
                          </p>
                          <p className="blog-summary readmore fs-6">blog_content
                            
WARNING in [eslint]
src\pages\services\Br
  Line 3:8:  'Button' is defined but never used  no-unused-vars

webpack compiled with 2 warnings
Compiling...
Compiled with warnings.

Failed to parse source map from  file: Error: ENOENT: no such file or directory, open 'D:\Abdks_Fin


                          </p>

                        </div>
                      </div>
                    </div>
                  </Link>
                </div>            
            </div>
          
        </div>
      </div>
    </div>
  );
}
