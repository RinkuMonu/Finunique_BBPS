import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import homebanner from "../../Assets/images/homebnner.png";

const cleanContent = (html) => {
  return DOMPurify.sanitize(html, {
    FORBID_ATTR: ["style"],
  });
};

function BlogsDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [categoryname, setCategoryName] = useState([]);
  const sanitizedSlug = slug?.trim().toLowerCase();

  useEffect(() => {
    setLoading(true);
    const fetchBlogDetails = async () => {
      try {
        const [postRes, relatedRes, categoryapi] = await Promise.all([
          fetch(
            `https://cms.sevenunique.com/apis/blogs/get-blogs.php?status=2&slug=${sanitizedSlug}&website_id=5`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
              },
            }
          ),
          fetch(
            `https://cms.sevenunique.com/apis/blogs/get-blogs.php?status=2&limit=3&website_id=5`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
              },
            }
          ),
          fetch(
            `https://cms.sevenunique.com/apis/category/get_category_by_id.php?category_id=5`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
              },
            }
          ),
        ]);

        const postJson = await postRes.json();
        const relatedJson = await relatedRes.json();
        const categoryapijson = await categoryapi.json();

        if (postJson.status === "success" && postJson.data.length > 0) {
          const rawPost = postJson.data.find((item) => item.slug === slug);
          if (rawPost) {
            rawPost.content = cleanContent(rawPost.content);
            setBlog(rawPost);
          } else {
            console.warn("No matching post found for slug:", slug);
          }
        }
        setCategoryName(categoryapijson);
        setRelatedPosts(relatedJson);
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [slug]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading blog details...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-5 text-danger">
        <h2>Blog not found!</h2>
        <p>The article you're looking for doesn't exist or may have been removed.</p>
        <button
          onClick={() => window.history.back()}
          className="btn btn-primary mt-3"
        >
          <i className="bi bi-arrow-left me-2"></i>
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div>
      <section className="d-flex align-items-center justify-content-center text-white position-relative">
        <div className="container text-center position-relative">
          <h1 className="hero-title pt-5">{blog.title}</h1>
          <p className="text-black fw-bold">
            Welcome to the ABDKS Blog, your go-to source for the latest
            trends, expert grooming tips, and salon industry insights.
          </p>
        </div>
      </section>

      <div className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Main Blog Content */}
            <div className="col-lg-8">
              <div
                className="rounded-4 shadow-sm overflow-hidden"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="position-relative">
                  <img
                    src={blog.image || homebanner}
                    className="img-fluid w-100"
                    alt="Blog featured"
                    style={{ height: "400px", objectFit: "cover" }}
                    onError={(e) => {
                      e.target.src = homebanner;
                    }}
                  />
                  <div className="position-absolute bottom-0 start-0 p-3 bg-dark bg-opacity-75 text-white">
                    <span className="me-3">
                      <i className="bi bi-calendar-event me-2"></i>
                      {new Date(blog.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span>
                      <i className="bi bi-clock me-2"></i>
                      {Math.ceil(blog.content.split(" ").length / 200)} min read
                    </span>
                  </div>
                </div>

                <div className="p-4 p-md-5">
                  <div className="d-flex flex-wrap gap-3 mb-4">
                    <span className="badge bg-primary fs-6 px-3 py-2">
                      <i className="bi bi-person me-2"></i>
                      FinUnique Team
                    </span>
                    {categoryname?.data?.name && (
                      <span className="badge bg-success fs-6 px-3 py-2">
                        <i className="bi bi-tag me-2"></i>
                        {categoryname.data.name}
                      </span>
                    )}
                    <span className="badge bg-secondary fs-6 px-3 py-2">
                      <i className="bi bi-eye me-2"></i>
                      {blog.views || "0"} views
                    </span>
                  </div>

                  <div
                    className="fs-5 text-muted mb-4"
                    style={{ lineHeight: "1.8" }}
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts?.data?.length > 0 && (
                <div className="mt-5">
                  <h3 className="fw-bold mb-4">More Betting Insights</h3>
                  <div className="row g-4">
                    {relatedPosts.data.map((relatedPost) => (
                      <div className="col-md-4" key={relatedPost.id}>
                        <Link
                          to={`/blog/post/${relatedPost.slug}`}
                          className="card h-100 text-decoration-none"
                        >
                          <img
                            src={relatedPost.image}
                            className="card-img-top"
                            alt={relatedPost.title}
                            style={{ height: "180px", objectFit: "cover" }}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{relatedPost.title}</h5>
                            <p className="card-text text-muted small">
                              {new Date(relatedPost.created_at).toLocaleDateString()}
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
                  {["Uncategorized", "Technology", "Business & Marketing", "Digital Agency"].map(
                    (category, index) => (
                      <a
                        href="#"
                        key={index}
                        className="list-group-item list-group-item-action border-0 px-0 py-3 d-flex justify-content-between align-items-center"
                      >
                        <span>{category}</span>
                        <span className="badge bg-primary rounded-pill">{Math.floor(Math.random() * 100)}</span>
                      </a>
                    )
                  )}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-4 shadow-sm p-4">
                <h5 className="fw-bold mb-4">Recent Posts</h5>
                <div className="d-flex flex-column gap-4">
                  {relatedPosts?.data?.slice(0, 3).map((post) => (
                    <div key={post.id} className="d-flex gap-3">
                      <div className="flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="rounded-3"
                          style={{ width: "80px", height: "80px", objectFit: "cover" }}
                        />
                      </div>
                      <div className="flex-grow-1">
                        <p className="text-muted small mb-2">
                          <i className="bi bi-calendar-event me-1"></i>
                          {new Date(post.created_at).toLocaleDateString()}
                        </p>
                        <h6 className="fw-bold mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.4" }}>
                          {post.title}
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
  );
}

export default BlogsDetails;