import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Ecom.css";

import heroVideo from "/assets/ecom.mp4";
import featureImg1 from "/assets/ecom2.png";
import processImg from "/assets/ecomprocess.jpg";
// import benefitImg from "/assets/abc.jpeg";
// import whychooseImg from "/assets/whychoose.jpg";

const Ecom = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: "ease-in-out" });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ecom-page">
      {/* HERO SECTION */}
      <section className="ecom-hero">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="hero-content" data-aos="fade-up">
          <h1 className="hero-title">
            E-Commerce <span>Solution</span>
          </h1>
          <p className="hero-subtitle">
            Experience the next generation of online selling — intelligent,
            scalable and beautifully designed platforms that convert.
          </p>
        </div>
      </section>

      {/* ECOMMERCE SOLUTIONS SLIDER SECTION */}
      <section className="ecom-solutions">
        <h2
          className="section-title"
          data-aos="fade-up"
          style={{ color: "white", fontSize: "2rem", fontWeight: "700" }}
        >
          Comprehensive eCommerce Solutions for Modern Businesses
        </h2>

        <div className="solutions-slider" data-aos="zoom-in">
          <div className="slider-card">
            <div className="slider-left">
              <img src={featureImg1} alt="Project Example" />
            </div>

            <div className="slider-right">
              <h3>E-Commerce Solutions</h3>
              <p>
                <strong>Our eCommerce </strong>solutions are designed to help
                businesses build a strong online presence and deliver seamless
                shopping experiences. From intuitive product catalogs and secure
                payment gateways to advanced order tracking and inventory
                automation, we provide everything needed to launch and grow a
                successful online store.
                <br />
                <br />
                We focus on blending creativity with technology — ensuring your
                website not only looks great but also performs flawlessly across
                all devices. Our scalable platform supports multiple categories,
                integrates with logistics and CRM tools, and provides powerful
                analytics to track performance and boost conversions.
                <br />
                <br />
                Whether you’re a startup entering the online market or an
                established retail chain expanding your reach, our eCommerce
                solutions empower your brand to connect with customers, enhance
                trust, and drive consistent growth.
              </p>

              <div className="slider-btn">
                 <a href="/contact" className="cta-btn">
      Contact Us →
    </a>
              </div>
            </div>
          </div>

          {/* slider arrows */}
          <button className="slider-arrow left">‹</button>
          <button className="slider-arrow right">›</button>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="ecom-process">
        <h2
          className="section-title"
          data-aos="fade-up"
          style={{ color: "white", fontSize: "2rem", fontWeight: "700" }}
        >
          Our Process
        </h2>
        <div className="process-wrapper">
          <img
            src={processImg}
            alt="Our Process"
            data-aos="fade-right"
            className="process-img"
          />
          <div className="process-content" data-aos="fade-left">
            <div className="process-step">
              <span>01</span>
              <h4>Discovery & Strategy</h4>
              <p>
                We explore your goals, audience, and competition to craft the
                right strategy.
              </p>
            </div>
            <div className="process-step">
              <span>02</span>
              <h4>Design & Experience</h4>
              <p>
                Intuitive designs and interfaces that create memorable shopping
                experiences.
              </p>
            </div>
            <div className="process-step">
              <span>03</span>
              <h4>Development & Launch</h4>
              <p>
                Robust coding, API integration, and seamless deployment —
                stress-free go-live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      {/* WHY CHOOSE US SECTION */}
<section className="whychoose-modern">
  <h2>Why Choose <span>Us?</span></h2>
  <p className="why-subtext">
    We build powerful online store solutions that boost sales, enhance customer experience, and grow your brand.
  </p>

  <div className="whychoose-container">
    <div className="why-box left-top">
      <h4>🛍️ Customized Store Designs</h4>
      <p>We create visually appealing, user-friendly online stores tailored to your brand identity.</p>
    </div>

    <div className="why-box left-bottom">
      <h4>⚡ Smooth & Fast Performance</h4>
      <p>Your e-commerce website loads fast and performs flawlessly across all devices.</p>
    </div>

    <div className="why-center">
      <img src="/assets/why.jpg" alt="E-Commerce Solutions" />
      <button className="why-btn">Get a Free Quote</button>
    </div>

    <div className="why-box right-top">
      <h4>💳 Secure Payment Integration</h4>
      <p>Multiple gateway options with safe and trusted payment processes for your customers.</p>
    </div>

    <div className="why-box right-bottom">
      <h4>📦 Inventory & Order Automation</h4>
      <p>Automated stock management, order tracking, and notifications — all in one system.</p>
    </div>
  </div>
</section>



      {/* 🌟 COMMON CTA SECTION */}
      <section className="cta-section" data-aos="fade-up">
        <div className="cta-content">
          <h2>Let’s Build Something Extraordinary</h2>
          <p>
            Ready to elevate your brand with a stunning, high-performance eCommerce experience?
            Let’s collaborate to make it happen.
          </p>
          <a href="/contact" className="cta-btn">Get Started</a>
        </div>
      </section>
    </div>
  );
};

export default Ecom;
