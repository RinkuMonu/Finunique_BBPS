"use client"

import homebanner from "../../Assets/images/homebnner.png"

function BlogsDetails() {
  return (
    <div>
      <section
        className="d-flex align-items-center justify-content-center text-white position-relative "
       
      >
        
           <div className="container text-center position-relative">
          <h1 className="hero-title pt-5">Blog Details</h1>
          <p className="text-black fw-bold">
            Welcome to the ABDKS Blog, your go-to source for the latest
            trends, expert grooming tips, and salon industry insights.
          </p>
        </div>
     
      </section>

      {/* Main Content */}
      <div className="py-5" >
        <div className="container">
          <div className="row g-4">
            {/* Main Blog Content */}
            <div className="col-lg-8">
              <div className=" rounded-4 shadow-sm overflow-hidden" style={{ backgroundColor: "#f8f9fa" }}>
                {/* Featured Image */}
                <div className="position-relative">
                  <img
                    src={homebanner || "/placeholder.svg"}
                    className="img-fluid w-100"
                    alt="Blog featured image"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 w-100 p-4"
                    style={{
                      background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    }}
                  ></div>
                </div>

                {/* Blog Content */}
                <div className="p-4 p-md-5">
                  {/* Meta Information */}
                  <div className="d-flex flex-wrap gap-3 mb-4">
                    <span className="badge bg-primary fs-6 px-3 py-2">
                      <i className="bi bi-person me-2"></i>by admin
                    </span>
                    <span className="badge bg-secondary fs-6 px-3 py-2">
                      <i className="bi bi-calendar-event me-2"></i>July 5, 2024
                    </span>
                    <span className="badge bg-success fs-6 px-3 py-2">
                      <i className="bi bi-eye me-2"></i>1.2k views
                    </span>
                  </div>

                  {/* Blog Title */}
                  <h2 className="fw-bold mb-4 text-dark" style={{ lineHeight: "1.3" }}>
                    Unraveling the Enduring Charm and Evolution of Barbershops as Societal and Cultural Hubs
                  </h2>

                  {/* Blog Content */}
                  <div className="fs-5 text-muted mb-4" style={{ lineHeight: "1.8" }}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                    <blockquote className="border-start border-primary border-4 ps-4 py-3 my-4 bg-light rounded-end">
                      <p className="mb-0 fst-italic">
                        "The barbershop has always been more than just a place for haircuts - it's a community
                        cornerstone where stories are shared and bonds are formed."
                      </p>
                    </blockquote>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                      dicta sunt explicabo.
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="border-top pt-4">
                    <h6 className="fw-bold mb-3">Tags:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="badge bg-outline-primary border border-primary text-primary px-3 py-2">
                        Barbershop
                      </span>
                      <span className="badge bg-outline-primary border border-primary text-primary px-3 py-2">
                        Culture
                      </span>
                      <span className="badge bg-outline-primary border border-primary text-primary px-3 py-2">
                        Grooming
                      </span>
                      <span className="badge bg-outline-primary border border-primary text-primary px-3 py-2">
                        Community
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* Search Box */}
              <div className="bg-white rounded-4 shadow-sm p-4 mb-4">
                <h5 className="fw-bold mb-3">Search</h5>
                <div className="position-relative">
                  <input
                    type="search"
                    className="form-control form-control-lg ps-5 border-2"
                    placeholder="Type to search..."
                    style={{ borderRadius: "50px" }}
                  />
                  <i
                    className="bi bi-search position-absolute text-muted"
                    style={{
                      left: "20px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "1.1rem",
                    }}
                  ></i>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-4 shadow-sm p-4 mb-4">
                <h5 className="fw-bold mb-3">Blog Categories</h5>
                <div className="list-group list-group-flush">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action border-0 px-0 py-3 d-flex justify-content-between align-items-center"
                  >
                    <span>Uncategorized</span>
                    <span className="badge bg-primary rounded-pill">78</span>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action border-0 px-0 py-3 d-flex justify-content-between align-items-center"
                  >
                    <span>Technology</span>
                    <span className="badge bg-primary rounded-pill">5</span>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action border-0 px-0 py-3 d-flex justify-content-between align-items-center"
                  >
                    <span>Business & Marketing</span>
                    <span className="badge bg-primary rounded-pill">23</span>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action border-0 px-0 py-3 d-flex justify-content-between align-items-center"
                  >
                    <span>Digital Agency</span>
                    <span className="badge bg-primary rounded-pill">10</span>
                  </a>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-4 shadow-sm p-4">
                <h5 className="fw-bold mb-4">Recent Posts</h5>
                <div className="d-flex flex-column gap-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="d-flex gap-3">
                      <div className="flex-shrink-0">
                        <img
                          src="/placeholder.svg?height=80&width=80"
                          alt="Recent post"
                          className="rounded-3"
                          style={{ width: "80px", height: "80px", objectFit: "cover" }}
                        />
                      </div>
                      <div className="flex-grow-1">
                        <p className="text-muted small mb-2">
                          <i className="bi bi-calendar-event me-1"></i>
                          July 5, 2024
                        </p>
                        <h6 className="fw-bold mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.4" }}>
                          {item === 1 && "AEPS: Transforming Digital Banking in India"}
                          {item === 2 && "BBPS: The Future of Digital Bill Payments in India"}
                          {item === 3 && "Six 'what ifs' that could transform digital agency"}
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogsDetails