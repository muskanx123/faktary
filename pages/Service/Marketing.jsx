import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Marketing.css";
import heroVideo from "/assets/digitalmarketing.mp4";

const services = [
  {
    id: 1,
    title: "Social Media Strategy",
    desc: "Audience research, content calendar and platform strategy to grow engagement.",
    icon: "📱",
  },
  {
    id: 2,
    title: "Content Creation",
    desc: "Creative visuals, short videos and engaging posts tailored to your brand.",
    icon: "✍️",
  },
  {
    id: 3,
    title: "Paid Ads & Performance",
    desc: "Data-driven ad campaigns across Google, Facebook and Instagram.",
    icon: "📈",
  },
  {
    id: 4,
    title: "SEO & Organic Growth",
    desc: "Optimize visibility and drive consistent traffic through SEO best practices.",
    icon: "🔍",
  },
  {
    id: 5,
    title: "Influencer Partnerships",
    desc: "Collaborate with influencers to boost awareness and brand trust.",
    icon: "🤝",
  },
  {
    id: 6,
    title: "Analytics & Reporting",
    desc: "Track KPIs, measure ROI, and refine campaigns with performance insights.",
    icon: "📊",
  },
];

export default function DigitalMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <main className="fgn-page">
      {/* HERO SECTION */}
      <section className="fgn-hero" data-aos="fade-in">
        <div className="fgn-hero-bg">
          <video
            className="fgn-hero-video"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="fgn-hero-video-overlay"></div>
          <div className="fgn-hero-overlay"></div>
        </div>

        <div className="fgn-hero-inner" data-aos="zoom-in-up">
          <div className="fgn-hero-text">
            <h1 className="fgn-hero-title" data-aos="fade-up" data-aos-delay="200">
              Result-driven Digital Marketing
            </h1>
            <p className="fgn-hero-sub" data-aos="fade-up" data-aos-delay="400">
              Grow brand awareness, drive leads and scale revenue with a tailored
              digital marketing strategy  social, search content & performance.
            </p>
            
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="fgn-section fgn-services" data-aos="fade-up">
        <div className="fgn-container">
          <h2 className="fgn-section-title" data-aos="fade-up">
            Our Digital Marketing Services
          </h2>
          <p className="fgn-lead" data-aos="fade-up" data-aos-delay="200">
            End-to-end services that blend creativity with measurable performance.
          </p>

          <div className="fgn-grid">
            {services.map((s, index) => (
              <article
                key={s.id}
                className="fgn-card"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <div className="fgn-card-icon" data-aos="flip-up">
                  {s.icon}
                </div>
                <h3 className="fgn-card-title" data-aos="fade-up">
                  {s.title}
                </h3>
                <p className="fgn-card-desc" data-aos="fade-up" data-aos-delay="200">
                  {s.desc}
                </p>
                
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="fgn-section fgn-approach" data-aos="fade-up">
        <div className="fgn-container fgn-approach-grid">
          <div className="fgn-approach-left" data-aos="fade-right">
            <h2 className="fgn-section-title">Our Approach</h2>
            <p className="fgn-lead" data-aos="fade-up" data-aos-delay="200">
              We combine creative content, data-driven media, and SEO to build scalable
              customer acquisition funnels — tailored to your business.
            </p>

            <ul className="fgn-approach-list">
              <li data-aos="fade-right" data-aos-delay="100">
                <strong>Audit & Strategy:</strong> Market & competitor analysis
              </li>
              <li data-aos="fade-right" data-aos-delay="200">
                <strong>Creative & Production:</strong> Content that converts
              </li>
              <li data-aos="fade-right" data-aos-delay="300">
                <strong>Media & Optimization:</strong> Continuous A/B testing
              </li>
              <li data-aos="fade-right" data-aos-delay="400">
                <strong>Measurement:</strong> Clear KPIs & reporting
              </li>
            </ul>
          </div>

          <div className="fgn-approach-right" data-aos="zoom-in-left">
            <img
              src="https://images.unsplash.com/photo-1559526324-593bc073d938?w=1000&q=80&auto=format&fit=crop"
              alt="Team working on marketing"
              className="fgn-approach-img"
            />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
<section className="fgn-cta-section" data-aos="zoom-in">
  <div className="fgn-cta-container">
    <h2 data-aos="fade-up">Let’s Build Something Extraordinary Together </h2>
    <p data-aos="fade-up" data-aos-delay="200">
      Partner with <strong>Faktary E-Solutions</strong> — a digital growth partner that
      helps brands scale through creative strategy, smart marketing, and technology-driven performance.
    </p>
     <a href="/contact" className="cta-btn">
      Get Started →
    </a>
  </div>
</section>

    </main>
  );
}
