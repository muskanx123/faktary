import React, { useEffect } from "react";
import "./It.css";
import {
  FaCogs,
  FaShieldAlt,
  FaTools,
  FaChartLine,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
import heroVideo from "/assets/itsupport.mp4"; // apna video path

const ItSupport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Zoom-in animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("zoom-show");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".zoom-section, .zoom-card").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      icon: <FaCogs />,
      title: "Proactive Monitoring",
      desc: "24/7 system monitoring to detect and fix issues before they affect users.",
    },
    {
      id: 2,
      icon: <FaShieldAlt />,
      title: "Security & Patch Management",
      desc: "Keep your systems secure and compliant with timely patches and hardening.",
    },
    {
      id: 3,
      icon: <FaTools />,
      title: "Helpdesk & On-Demand Support",
      desc: "Fast, friendly support for employees — remote or on-site when needed.",
    },
    {
      id: 4,
      icon: <FaChartLine />,
      title: "Performance Optimization",
      desc: "Improve uptime and speed with architecture reviews and tuning.",
    },
    {
      id: 5,
      icon: <FaClock />,
      title: "SLAs & Reporting",
      desc: "Custom SLAs, monthly reports and actionable recommendations.",
    },
    {
      id: 6,
      icon: <FaPhoneAlt />,
      title: "Onboarding & IT Strategy",
      desc: "Tailored onboarding and roadmap planning for growth and resilience.",
    },
  ];

  return (
    <div className="it-page">
      {/* HERO */}
      <header className="it-hero zoom-section">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="it-hero-overlay"></div>

        <div className="it-hero-inner">
          <div className="it-hero-text">
            <h1> <span>IT SUPPORT</span>  & MAINTENANCE</h1>
            <p className="lead">
              Reliable, secure and proactive IT support that keeps your business
              running — from monitoring and patching to helpdesk and strategic
              guidance.
            </p>
            <div className="cta-row">
              <a href="#services" className="btn btn-ghost">
                See Services
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <section id="services" className="it-section zoom-section it-services">
        <div className="container">
          <h2 className="section-title">Our IT Support Services</h2>
          <p className="section-sub">
            Flexible plans — from managed IT to one-off support.
          </p>

          <div className="services-grid">
            {services.map((s, index) => (
              <article
                key={s.id}
                className="service-card zoom-card"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="it-section zoom-section it-why">
        <div className="container two-col">
          <div className="col">
            <h2>Why choose our IT support?</h2>
            <ul className="checklist">
              <li>Dedicated account manager and fast SLAs</li>
              <li>Proactive maintenance to reduce downtime</li>
              <li>Zero-trust security practices and compliance help</li>
              <li>Transparent monthly reporting and roadmaps</li>
            </ul>
          
          </div>

          <div className="col stats zoom-card">
            <div className="stat">
              <span className="num">99.9%</span>
              <span className="label">Average uptime</span>
            </div>
            <div className="stat">
              <span className="num">30m</span>
              <span className="label">Avg. first response</span>
            </div>
            <div className="stat">
              <span className="num">100+</span>
              <span className="label">Clients supported</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="it-section zoom-section it-about">
        <div className="container">
          <h2>About our IT Support &amp; Maintenance</h2>
          <p>
            We provide full lifecycle IT support: from setup and onboarding to
            continuous monitoring, patching and strategic IT planning. Our team
            blends industry best practices with practical, business-focused
            solutions tailored for small and medium organisations.
          </p>
          <p>
            Whether you need a fully managed IT function or on-demand helpdesk
            access, we design plans to match your needs and budget — with clear
            SLAs and monthly reporting so you always know what you’re getting.
          </p>
        </div>
      </section>

    

{/* CTA SECTION */}
<section id="cta" className="it-cta-section zoom-section">
  <div className="it-cta-container">
    <h2>Let’s Power Up Your IT Infrastructure</h2>
    <p>
      Partner with us for 24/7 monitoring, proactive support, and reliable
      maintenance that helps your business run smoother, faster, and safer.
    </p>
     <a href="/contact" className="cta-btn">
      Get Started →
    </a>
  </div>
</section>






    </div>
  );
};

export default ItSupport;
