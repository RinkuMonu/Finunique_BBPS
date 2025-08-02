import React, { useContext, useState } from "react";
import Context from "../components/services/context";
import Swal from "sweetalert2";

const LeadFormPopup = () => {
  const { isOpen, setIsOpen } = useContext(Context);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });

  const closePopup = () => setIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setFormData((prev) => ({ ...prev, name: value }));
        setErrors((prev) => ({ ...prev, name: "" }));
      } else {
        setErrors((prev) => ({ ...prev, name: "Only letters and spaces allowed" }));
      }
    } else if (name === "phone") {
      if (/^\d{0,10}$/.test(value)) {
        setFormData((prev) => ({ ...prev, phone: value }));
        setErrors((prev) => ({ ...prev, phone: "" }));
      } else {
        setErrors((prev) => ({ ...prev, phone: "Phone must be numeric and 10 digits max" }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone } = formData;

    // Final validation before API call
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      setErrors((prev) => ({ ...prev, name: "Please enter a valid name" }));
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setErrors((prev) => ({ ...prev, phone: "Phone must be exactly 10 digits" }));
      return;
    }

    const payload = {
      name,
      email,
      phone,
      message: "This Leads from ABDKS",
      service: "N/A",
      website_id: 5,
    };

    try {
      const response = await fetch("https://cms.sevenunique.com/apis/contact-query/set-contact-details.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Thank You!",
          text: "Your details have been submitted successfully.",
          customClass: {
            popup: "custom-swal-popup",
          },
        });
        closePopup();
        setFormData({ name: "", email: "", phone: "" });
        setErrors({ name: "", phone: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result?.message || "Something went wrong. Please try again.",
          customClass: {
            popup: "custom-swal-popup",
          },
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to submit form. Please try again later.",
        customClass: {
          popup: "custom-swal-popup",
        },
      });
    }
  };

  return (
    <div>
      {isOpen && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <div style={styles.popupContent}>
              {/* Left side with image */}
              <div style={styles.imageContainer}>
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="Marketing"
                  style={styles.image}
                />
              </div>

              {/* Right side with form */}
              <div style={styles.formContainer}>
                <button onClick={closePopup} style={styles.closeBtn}>
                  &times;
                </button>

                <h2 style={styles.title}>Get in Touch</h2>
                <p style={styles.subtitle}>
                  Fill out the form and we'll get back to you soon
                </p>

                <form onSubmit={handleSubmit} style={styles.form}>
                  {/* Name */}
                  <div style={styles.inputGroup}>
                    <label htmlFor="name" style={styles.label}>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      style={styles.input}
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <span style={{ color: "red", fontSize: "12px", minHeight: "16px" }}>{errors.name}</span>
                    )}
                    {!errors.name && <div style={{ minHeight: "16px" }}></div>}

                  </div>

                  {/* Email */}
                  <div style={styles.inputGroup}>
                    <label htmlFor="email" style={styles.label}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                      style={styles.input}
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Phone */}
                  <div style={styles.inputGroup}>
                    <label htmlFor="phone" style={styles.label}>Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Enter your phone number"
                      style={styles.input}
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength={10}
                    />
                     {errors.phone && (
                      <span style={{ color: "red", fontSize: "12px", minHeight: "16px" }}>{errors.phone}</span>
                    )}
                    {!errors.phone && <div style={{ minHeight: "16px" }}></div>}
                  </div>

                  <button type="submit" disabled={isLoading} style={styles.submitButton}>
  {isLoading ? "Submitting..." : "Submit"}
</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Custom styles
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },
  popup: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    width: "750px",
    maxWidth: "90%",
    maxHeight: "90vh",
    overflowY: "auto",
  },
  popupContent: {
    display: "flex",
    flexDirection: "row",
    minHeight: "500px",
  },
  imageContainer: {
    flex: 1,
    background: "linear-gradient(135deg, #6e8efb, #a777e3)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  formContainer: {
    flex: 1,
    padding: "40px",
    position: "relative",
    overflowY: "auto",
    maxHeight: "90vh",
  },
  closeBtn: {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "#888",
    padding: "5px",
  },
  title: {
    color: "#333",
    fontSize: "28px",
    marginBottom: "10px",
    fontWeight: "700",
  },
  subtitle: {
    color: "#666",
    fontSize: "14px",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },
  label: {
    fontSize: "14px",
    color: "#555",
    fontWeight: "500",
  },
  input: {
    padding: "12px 15px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "14px",
  },
  submitButton: {
    padding: "14px",
    backgroundColor: "#6e8efb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s",
    marginTop: "10px",
  },
};

export default LeadFormPopup;
