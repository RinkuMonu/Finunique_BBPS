import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import homebanner from "../../Assets/images/homebnner.png";
import SEO from "../../components/SEO/SEO";
import { useUser } from "../../context/UserContext";
import './blogs.css';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const { seo } = useUser();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://cms.sevenunique.com/apis/blogs/get-blogs.php?website_id=5&status=2",
          {
            headers: {
              Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
            },
          }
        );

        if (response.data.status === "success") {
          setBlogs(response.data.data);
        } else {
          console.error("Blog API response error:", response.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Calculate blog indices
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

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

      <section
        className="blog-section d-flex align-items-center mt-5"
        style={{ background: "linear-gradient(135deg, #ffb300, #ff6f00)", color: "#fff", padding: "60px 0" }}
      >
        <div className="container text-center position-relative">
          <h1 className="hero-title fw-bold text-black">Blog</h1>
          <p className="fw-medium lead">
            Welcome to the ABDKS Blog, your source for trends, expert tips, and insights.
          </p>
        </div>
      </section>

      <div className="content-section py-5 bg-light">
        <div className="container blog_Section">
          <div className="row">
            <div className="col-md-12" data-aos="fade-up">
              <div className="heading text-center mb-4">
                <h2 className="fw-bold">Stay Ahead in Style & Grooming</h2>
                <div className="divider mx-auto my-3" style={{ width: "80px", height: "3px", background: "#ffb300" }}></div>
              </div>
            </div>
          </div>

          {blogs.length === 0 ? (
            <div className="text-center py-5">No blogs available</div>
          ) : (
            <>
              <div className="row gx-4 gy-4">
                {currentBlogs.map((blog) => (
                  <div className="col-md-4" data-aos="fade-up" key={blog.id}>
                    <Link to={`/blog_details/${blog.slug}`} className="text-decoration-none">
                      <div className="blog-card h-100 shadow-sm rounded overflow-hidden position-relative bg-white">
                        <div className="blog-img-wrapper position-relative">
                          <img
                            src={blog.image || homebanner}
                            className="img-fluid w-100 blog-img"
                            alt={blog.title}
                            onError={(e) => {
                              e.target.src = homebanner;
                            }}
                            style={{ height: "220px", objectFit: "cover" }}
                          />
                          <div className="blog-overlay-gradient"></div>
                        </div>
                        <div className="p-3 blog-content-wrapper">
                          <h3 className="fs-5 fw-bold mb-1 blog-title">{blog.title}</h3>
                          <p className="text-muted small mb-2">{new Date(blog.created_at).toLocaleDateString()}</p>
                          <p className="text-muted blog-summary mb-0">{blog.summary}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="d-flex justify-content-center mt-4">
                <ul className="pagination">
                  <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button className="page-link" onClick={prevPage}>Previous</button>
                  </li>
                  {Array.from({ length: totalPages }, (_, idx) => (
                    <li
                      key={idx + 1}
                      className={`page-item ${currentPage === idx + 1 ? "active" : ""}`}
                    >
                      <button
                        className="page-link"
                        onClick={() => paginate(idx + 1)}
                      >
                        {idx + 1}
                      </button>
                    </li>
                  ))}
                  <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <button className="page-link" onClick={nextPage}>Next</button>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
