import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import homebanner from "../../Assets/images/homebnner.png";
import SEO from "../../components/SEO/SEO";
import { useUser } from "../../context/UserContext";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
 const {seo} = useUser()
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
<div>
      <section className="blog-section d-flex align-items-center mt-5">
        <div className="hero-overlay"></div>
        <div className="container text-center position-relative">
          <h1 className="hero-title">Blog</h1>
          <p className="fw-bold">
            Welcome to the ABDKS Blog, your go-to source for the latest trends,
            expert grooming tips, and salon industry insights.
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

          {blogs.length === 0 ? (
            <div className="text-center py-5">No blogs available</div>
          ) : (
            <div className="row gx-3 pt-2">
              {blogs.map((blog) => (
                <div
                  className="col-md-4 mb-4"
                  data-aos="fade-up"
                  key={blog.id}
                >
                  <Link
                    to={`/blog_details/${blog.slug}`}
                    className="text-decoration-none"
                  >
                    <div
                      className="border shadow-lg h-100 blog-card"
                      style={{
                        cursor: "pointer",
                        transition: "transform 0.3s",
                      }}
                    >
                      <div className="blog_img text-center pt-2">
                        <img
                          src={blog.image || homebanner}
                          className="img-fluid"
                          alt={blog.title}
                          onError={(e) => {
                            e.target.src = homebanner;
                          }}
                          style={{
                            maxHeight: "200px",
                            objectFit: "cover",
                            width: "100%",
                          }}
                        />
                      </div>
                      <div className="pt-4">
                        <div className="blog_content px-3 text-black">
                          <h3 className="fs-5">{blog.title}</h3>
                          <p className="text-muted fs-6">
                            {new Date(blog.created_at).toLocaleDateString()}
                          </p>
                          <p className="blog-summary readmore fs-6">
                            {blog.summary}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </>
    
  );
}
