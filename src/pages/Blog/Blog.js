import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import homebanner from "../../Assets/images/homebnner.png";
import SEO from "../../components/SEO/SEO";
import { useUser } from "../../context/UserContext";
import './blogs.css';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const { seo } = useUser();
  const limit = 6;

  const fetchBlogs = async (currentPage = 1) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://cms.sevenunique.com/apis/blogs/get-blogs.php?website_id=5&status=2&page=${currentPage}&limit=${limit}`,
        {
          headers: {
            Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
          },
        }
      );

      if (response.data.status === "success") {
        const newBlogs = response.data.data || [];
        const pagination = response.data.pagination || {};

        setBlogs((prev) => [...prev, ...newBlogs]);

        if (pagination.total_pages) {
          setTotalPages(pagination.total_pages);
        }

        if (currentPage >= pagination.total_pages) {
          setHasMore(false);
        }
      } else {
        console.error("Blog API response error:", response.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs(1);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 600 &&
        !loading &&
        hasMore
      ) {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchBlogs(nextPage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore, page]);

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
        style={{
          background: "linear-gradient(135deg, #ffb300, #ff6f00)",
          color: "#fff",
          padding: "60px 0",
        }}
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
                <div
                  className="divider mx-auto my-3"
                  style={{ width: "80px", height: "3px", background: "#ffb300" }}
                ></div>
              </div>
            </div>
          </div>

          {blogs.length === 0 ? (
            <div className="text-center py-5">No blogs available</div>
          ) : (
            <>
              <div className="row gx-4 gy-4">
                {blogs.map((blog) => (
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

              {/* Loader */}
              {loading && (
                <div className="flex justify-center mt-6">
                  <div className="spinner-border text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}

              {/* No more blogs */}
              {!hasMore && blogs.length > 0 && (
                <p className="text-center mt-4 text-muted">No more blogs to load</p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
