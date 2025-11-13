import React, { useState } from "react";
import "./ReachUs.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReachUs = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    countryCode: "+91",
    phone: "",
    email: "",
    message: "",
  });

  const countryCodes = [
    { code: "+91", country: "India 🇮🇳" },
    { code: "+1", country: "USA 🇺🇸" },
    { code: "+44", country: "UK 🇬🇧" },
    { code: "+61", country: "Australia 🇦🇺" },
    { code: "+81", country: "Japan 🇯🇵" },
    { code: "+971", country: "UAE 🇦🇪" },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 📨 Send data to backend (Gmail notification)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.phone)) {
      toast.warning("⚠️ Please enter a valid 10-digit phone number.", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
      return;
    }

    const fullPhone = `${form.countryCode} ${form.phone}`;

    try {
      const res = await fetch("http://localhost:8000/api/reachus", {
        // 🧪 for local testing → use: http://localhost:8000/api/reachus
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          phone: fullPhone,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Message sent successfully!", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
        });

        setForm({
          name: "",
          company: "",
          countryCode: "+91",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("❌ Failed to send message!", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
        });
      }
    } catch (err) {
      console.error("Error:", err);
      toast.warning("⚠️ Server not responding.", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    }
  };

  return (
    <div className="reach-container">
      <h1 className="page-title">Let's Connect</h1>
      <p className="subtitle">
        We’d love to hear from you — let’s build something amazing together.
      </p>

      <div className="reach-grid">
        {/* Left: Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Us!</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={handleChange}
          />

          <div className="phone-input">
            <select
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              className="country-select"
            >
              {countryCodes.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.country} ({item.code})
                </option>
              ))}
            </select>

            <input
              type="tel"
              name="phone"
              placeholder="10-digit Phone Number"
              value={form.phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // allow only digits
                setForm({ ...form, phone: value });
              }}
              maxLength="10"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Right: Info Section */}
        <div className="info-side">
          <div className="subscribe-box">
            <h2>Subscribe</h2>
            <input type="email" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>

          <div className="map-box">
            <h2>Our Location</h2>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.551189733681!2d72.87005427519055!3d19.173548849905205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c85c9c17a6b1%3A0x7f9f9a25e0f1a937!2sMarol%20MIDC%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1697049999999!5m2!1sen!2sin"
              width="100%"
              loading="lazy"
            ></iframe>
          </div>

          <div className="social-box">
            <h2>Stay in Touch</h2>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* 🔔 Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default ReachUs;
