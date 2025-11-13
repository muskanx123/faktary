import React, { useEffect, useRef } from "react";
import "./Service.css";
import heroBg from "/assets/sevice.jpg";
import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    id: 1,
    title: "Website & Mobile Development",
    img: "/assets/webs.jpg",
    short:
      "High-performing, scalable and user-friendly websites & apps for your business.",
    long:
      "We build responsive, fast and interactive web and mobile applications tailored to your brand. From UI/UX design to backend integration We ensure smooth digital experiences.",
    link: "/websitemobile",
    animation: "srvAnimFadeRight",
  },
  {
    id: 2,
    title: "E-Commerce Solution",
    img: "/assets/e.jpg",
    short: "Grow your business with powerful online marketing strategies.",
    long:
      "Our experts craft SEO, and social media campaigns that enhance your reach, boost engagement and increase conversions.",
    link: "/ecom",
    animation: "srvAnimZoomUp",
  },
  {
    id: 3,
    title: "Digital Design & Branding",
    img: "/assets/3.jpg",
    short: "Create a brand that truly speaks to your audience.",
    long:
      "From logo design to brand guidelines We help you create a consistent and memorable identity that stands out.",
    link: "/digitaldesign",
    animation: "srvAnimZoomDown",
  },
  {
    id: 4,
    title: "Digital Marketing",
    img: "/assets/4.jpg",
    short: "Build campaigns that make your brand shine across digital spaces.",
    long:
      "Our strategies blend creativity with analytics, helping brands grow, engage and convert efficiently.",
    link: "/marketing",
    animation: "srvAnimFadeRight",
  },
  {
    id: 5,
    title: "IT Support & Maintenance",
    img: "/assets/5.jpg",
    short: "Reliable IT solutions to keep your systems running smoothly.",
    long:
      "We provide monitoring, maintenance and troubleshooting. Ensuring business continuity and data protection.",
    link: "/it",
    animation: "srvAnimBounceIn",
  },
];

const Service = () => {
  const navigate = useNavigate();
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("srv-visible");
        }),
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="srv-page">
      {/* HERO SECTION */}
      <section
        className="srv-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="srv-overlay"></div>
        <div className="srv-hero-content">
          <h1>Our Services</h1>
          <p>
            We transform possibilities into powerful digital realities.<br></br>
            Shaping brands that lead, connect and inspire the world.
          </p>
          <button
            className="srv-hero-btn"
            onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
          >
            Explore Services
          </button>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="srv-list">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`srv-item ${
              index % 2 === 0 ? "srv-normal" : "srv-reverse"
            } ${service.animation}`}
          >
            <div className="srv-img">
              <img src={service.img} alt={service.title} />
            </div>
            <div className="srv-content">
              <h2>{service.title}</h2>
              <p className="srv-short">{service.short}</p>
              <p className="srv-long">{service.long}</p>
              <button
                className="srv-btn"
                onClick={() => navigate(service.link)}
              >
                More About →
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Service;
