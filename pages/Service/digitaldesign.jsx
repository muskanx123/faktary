import React, { useEffect } from "react";
import "./digitaldesign.css";
import heroVideo from "/assets/digitaldesign.mp4";

const DigitalDesignMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Reveal animation trigger
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="digitalmarketing-page">
      {/* HERO SECTION */}
      <section className="digitalmarketing-hero reveal">
        <video
                  className="hero-video"
                  src={heroVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
        <div className="digitalmarketing-overlay">
          <div className="digitalmarketing-hero-content">
            <h1 className="digitalmarketing-title">
              Digital Design & Branding
            </h1>
            <p className="digitalmarketing-subtitle">
              Transforming your brands presence through creativity, technology
              and strategy. 
            </p>
           
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="digitalmarketing-whychoose reveal">
        <h2>Why Choose Us for Digital Design & Branding</h2>
        <div className="digitalmarketing-why-grid">
          <div className="digitalmarketing-why-card">
            <h3>Experience</h3>
            <p>
              Our years of digital design and branding expertise help us craft
              unique visual identities that stand out. We’ve successfully built
              memorable brands and creative experiences that inspire trust and
              drive engagement.
            </p>
          </div>
          <div className="digitalmarketing-why-card">
            <h3>Team</h3>
            <p>
              Our skilled experts in design, strategy and brand storytelling work
              together to create powerful visual identities and memorable brand
              experiences that captivate audiences.
            </p>
          </div>
          <div className="digitalmarketing-why-card">
            <h3>R&D</h3>
            <p>
              We constantly explore emerging design trends and branding
              strategies to keep your brand fresh, relevant, and ahead of the
              competition for lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="digitaldesign-services reveal">
        <h2>Our Core Services</h2>
        <div className="digitaldesign-service-grid">
          <div className="digitaldesign-service-card">
            <div className="icon-bubble">🎨</div>
            <h3>Logo & Brand Identity</h3>
            <p>
              Craft a unique visual identity that represents your brand’s story
              and values.
            </p>
          </div>

          <div className="digitaldesign-service-card">
            <div className="icon-bubble">💡</div>
            <h3>Creative Visual Design</h3>
            <p>
              Design stunning visuals and marketing assets that leave a lasting
              impression.
            </p>
          </div>

          <div className="digitaldesign-service-card">
            <div className="icon-bubble">📱</div>
            <h3>UI/UX Design</h3>
            <p>
              Build user-friendly digital interfaces that blend aesthetics with
              performance.
            </p>
          </div>

          <div className="digitaldesign-service-card">
            <div className="icon-bubble">🚀</div>
            <h3>Brand Strategy</h3>
            <p>
              Define a consistent tone, positioning, and strategy to strengthen
              your brand’s voice.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE PROJECT SECTION */}
      {/* FEATURE PROJECT SECTION */}
<section className="corework-section reveal">
  <div className="corework-card">
    <div className="corework-content">
      <h3>Digital Design And Branding</h3>
      <br />
      <p>
        Digital Design & Branding is at the heart of how your audience perceives your business. 
        We craft distinctive and memorable brand identities that capture attention and build trust. 
        Our approach combines creativity, strategy, and innovation to design visuals that not only 
        look exceptional but also communicate your brand’s essence with clarity and emotion.
        <br /><br />
        Every element — from logo creation and color palette selection to typography and layout — 
        is thoughtfully designed to create a consistent and powerful brand presence across all platforms. 
        We ensure that your visual identity reflects your core values, connects with your target audience, 
        and stands the test of time.
        <br /><br />
        By blending modern design aesthetics with data-driven strategy, we deliver brand experiences 
        that inspire recognition, loyalty, and long-term success.
      </p>
      <a href="/contact" className="cta-btn">
      Enquire →
    </a>
    </div>

    <div className="corework-image">
      <img src="/assets/ef.jpg" alt="Branding Project" />
    </div>
  </div>
</section>


      {/* CTA SECTION */}
<section className="digitaldesign-cta reveal">
  <div className="cta-overlay"></div>
  <div className="cta-container">
    <h2>Let’s Create a Brand That Stands Out</h2>
    <p>
      Partner with us to craft a digital identity that inspires trust, creativity,
      and recognition. From logo design to strategy — we bring your brand vision
      to life through design that connects and captivates.
    </p>
    <a href="/contact" className="cta-btn">
      Get Started →
    </a>
  </div>
</section>

    </div>
  );
};

export default DigitalDesignMarketing;
