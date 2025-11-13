import React, { useEffect } from "react";
import "./websitemobile.css";
import webImg from "/assets/craftingdigital.jpg";
import responsiveIcon from "/assets/icon1.png";
import mobileIcon from "/assets/icon4.png";
import speedIcon from "/assets/icon7.png";
import heroVideo from "/assets/ecom-hero.mp4";

const Websitemobile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // 👇 Scroll animation effect
    const sections = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      icon: responsiveIcon,
      title: "Responsive Web Design",
      desc: "We design pixel-perfect, adaptive websites that ensure seamless experience on every device — desktop, tablet, and mobile.",
    },
    {
      id: 2,
      icon: mobileIcon,
      title: "Mobile App Development",
      desc: "We build intuitive and high-performing Android and iOS apps that deliver exceptional user experiences and functionality.",
    },
    {
      id: 3,
      icon: speedIcon,
      title: "Performance Optimization",
      desc: "We fine-tune your digital platforms for lightning-fast loading, improved SEO, and better user engagement.",
    },
  ];

  return (
    <div className="webdev-page">
      {/* HERO SECTION */}
      <section className="webdev-hero animate-on-scroll">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="webdev-overlay"></div>
        <div className="webdev-hero-content">
          <h1>
            <span style={{ color: "#ffffff" }}>Website &</span> Mobile
            Development
          </h1>
          <p>
            We design and develop high-performing, responsive websites and
            mobile apps that deliver seamless digital experiences across all
            devices.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="webdev-main animate-on-scroll">
        <div className="webdev-img-container">
          <img src={webImg} alt="Web Development" className="webdev-img" />
        </div>
        <div className="webdev-text">
          <h2>Crafting Digital Experiences</h2>
          <p>
            Our development approach combines innovative design, robust
            technology and intuitive UX. We ensure that your product looks
            amazing, performs fast and works on every screen size perfectly.
          </p>
          <p>
            Whether you need a corporate website, an e-commerce platform or a
            mobile application — we bring your vision to life through creativity
            and code.
          </p>
          <ul>
            <li>Responsive Web Design</li>
            <li>Cross-Platform Mobile Apps</li>
            <li>Performance Optimization</li>
            <li>User Experience & Interface Design</li>
          </ul>
        </div>
      </section>

      {/* SERVICE CARDS SECTION */}
      <section className="webdev-services animate-on-scroll">
        <div className="webdev-service-container">
          {services.map((service) => (
            <div key={service.id} className="webdev-card">
              <div className="webdev-card-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

   
{/* WHY CHOOSE US SECTION */}
<section className="abc-section animate-on-scroll">
  <div className="abc-container">
    {/* LEFT TEXT SIDE */}
    <div className="abc-text">
      <span className="abc-tag">Reasons to Work With Us</span>
      <h2>Why Faktary For Your Website & Mobile Development?</h2>
      <p>
        With our skilled team of developers, designers, and strategists, we bring innovation
        and functionality together. We believe in delivering measurable outcomes through fast,
        secure, and beautifully crafted websites and apps that elevate your brand identity.
      </p>
      <p>
        We follow a client-first approach — conducting a detailed review of your business goals,
        audience, and technical needs. Every digital solution we build is optimized for speed,
        usability, and long-term scalability.
      </p>
      <p>
        Our websites and mobile apps are designed to create lasting impressions, drive engagement,
        and help you grow digitally with confidence.
      </p>
    </div>

    {/* RIGHT IMAGE SIDE */}
    <div className="abc-img">
      <img src="/assets/hero1.png" alt="Why Choose Us" />
    </div>
  </div>
</section>


      {/* CTA SECTION */}
      <section className="webdev-cta animate-on-scroll">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.4rem",
              marginBottom: "10px",
              color: "white",
              fontWeight: "700",
              letterSpacing: "0.5px",
            }}
          >
            Let’s Build Something Extraordinary
          </h2>

          <p
            style={{
              fontSize: "1.15rem",
              color: "#d2bdfc",
              lineHeight: "1.7",
              marginTop: "10px",
              marginBottom: "30px",
            }}
          >
            Ready to elevate your digital presence? Connect with us to create
            stunning and powerful web & mobile solutions tailored to your goals.
          </p>

           <a href="/contact" className="cta-btn">
      Get Started →
    </a>
        </div>
      </section>
    </div>
  );
};

export default Websitemobile;
