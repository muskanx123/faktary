import React, { useState, useEffect, useRef } from "react";
import "./Resources.css"

const resourcesData = [
  {
    id: 1,
    type: "Blog",
    title: "Transforming Businesses Through AI",
    desc: "Discover how artificial intelligence is revolutionizing digital strategies worldwide and driving innovation, efficiency, and long-term growth.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    extraContent: `Artificial intelligence is dramatically transforming industries by automating processes, enhancing decision-making, and creating new opportunities for innovation. Businesses leveraging AI gain competitive advantages by improving customer experiences and operational efficiency.`,
    readTime: "5 min read"
  },
  {
    id: 2,
    type: "Case Study",
    title: "Global Cloud Migration Success",
    desc: "See how we helped a leading enterprise modernize its IT infrastructure with cloud solutions, achieving 40% faster deployment times.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    extraContent: `Cloud migration allows companies to scale efficiently, reduce costs, and improve security. Our case study explores a global enterprise's journey to a hybrid cloud infrastructure that increased agility and business resilience.`,
    readTime: "8 min read"
  },
  {
    id: 3,
    type: "Video",
    title: "The Power of Automation",
    desc: "Watch how automation is simplifying workflows and scaling digital transformation for global clients.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    extraContent: `Automation technology streamlines repetitive tasks, allowing teams to focus on higher-value activities. This video showcases practical automation use cases that drive productivity and growth.`,
    readTime: "10 min watch"
  },
  {
    id: 4,
    type: "Infographic",
    title: "2025 Digital Trends Report",
    desc: "Get our exclusive report on emerging technologies shaping business transformation in 2025 and beyond.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    extraContent: `Our 2025 report dives into AI, IoT, blockchain, and other tech trends that will define the next era of digital innovation. Stay ahead with expert analysis and forecasts.`,
    readTime: "15 min read"
  },
  {
    id: 5,
    type: "Blog",
    title: "Designing for Impact",
    desc: "Learn UI/UX principles that enhance engagement, conversions, and long-term customer loyalty.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    extraContent: `Effective design goes beyond aesthetics — it builds meaningful connections with users. Explore strategies to create intuitive, engaging digital experiences that drive results.`,
    readTime: "6 min read"
  },
  {
    id: 6,
    type: "Case Study",
    title: "Data-Driven Marketing Revolution",
    desc: "Discover how we leveraged advanced analytics to optimize customer acquisition and retention for a Fortune 500 client.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    extraContent: `Data-driven marketing empowers businesses to deliver personalized campaigns that maximize ROI. This case study highlights analytics tools and strategies transforming marketing effectiveness.`,
    readTime: "7 min read"
  },
 {
  id: 7,
  type: "Blog",
  title: "How responsive web design in your website helps",
  desc: "Responsive design isn’t just about shrinking content; it’s about creating a seamless experience.",
  image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  extraContent: 'In short, responsive web design is like giving your website a universal key...',
  readTime: "5 min read"
},
{
  id: 8,
  type: "Case Study",
  title: "AI-Powered Customer Support Chatbot",
  desc: "Discover how AI-driven chatbots revolutionize customer service by automating responses, reducing wait times, and improving satisfaction.",
  image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&q=80",
  extraContent: 'This project involved building an AI chatbot using Dialogflow and Python with CRM integration. It automated 65% of customer queries, reduced response times from 2 minutes to 8 seconds, and boosted satisfaction scores by 25%.',
  readTime: "10 min read"
},

{
id: 10,
    type: "Blog",
    title: "Top Programming Languages to Learn in 2025",
    desc: "If you’re planning your coding journey for 2025, picking the right programming language can give you a powerful edge.",
    image: "https://images.unsplash.com/photo-1645739064111-615daf19a11e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=813,",
    extraContent: 'Some languages are rising fast, while others remain solid bets for the futureIf you’re planning your coding journey for 2025, picking the right programming language can give you a powerful edge. Some languages are rising fast, while others remain solid bets for the future.' ,

    readTime: "5 min read"
  },
{
  id: 11,
    type: "Blog",
    title: "The role of a Software Developer in Modern Business",
    desc: "In today’s digital-driven world, software developers play a crucial role in shaping the way businesses operate and compete.",
    image: "https://images.unsplash.com/photo-1640158616235-731aa6b43d38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    extraContent: 
'Software developers are not just coders—they are problem-solvers who translate business needs into functional digital solutions,Software developers are not just coders—they are problem-solvers who translate business needs into functional digital solutions. They work closely with stakeholders to understand goals, design user-friendly interfaces, and implement scalable systems. By leveraging modern technologies such as cloud computing, artificial intelligence, and automation, developers help businesses reduce operational costs, optimize workflows, and unlock new revenue streams.',


    readTime: "5 min read"
  },
  {
  id: 12,
  type: "Case Study",
  title: "Cross-Platform Mobile App for Field Technicians",
  desc: "Learn how a unified mobile app transformed field operations by providing real-time task management and offline access.",
  image: "https://tse3.mm.bing.net/th/id/OIP.H3oymO209ZPKZ8UISzLOhwHaE8?pid=Api&P=0&h=180",
  extraContent:' Built using Flutter and Firebase, this cross-platform solution enabled seamless task tracking and communication. Field efficiency improved by 50%, with 95% adoption within the first 3 months.',
  readTime:"8 min read"
}


    
  


];

function useTypingEffect(text, speed = 40) {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    setDisplayedText("");
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayedText;
}

const Resources = () => {
  const [selected, setSelected] = useState(null);
  const [modalStep, setModalStep] = useState(0);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [liked, setLiked] = useState([]);
  const cardRefs = useRef([]);

  const selectedResource = resourcesData.find((r) => r.id === selected);
  const fullText = selectedResource?.extraContent || "";
  const typedContent = useTypingEffect(fullText);

  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden";
      setModalStep(0);
      const delays = [0, 300, 600, 900];
      delays.forEach((d, i) => {
        setTimeout(() => setModalStep(i + 1), d);
      });
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selected]);

  useEffect(() => {
    const cards = document.querySelectorAll(".resource-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.15}s`;
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [filter, searchTerm]);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (card) {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    }
  };

  const filteredResources = resourcesData.filter((item) => {
    const matchesFilter = filter === "All" || item.type === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const types = ["All", ...new Set(resourcesData.map(r => r.type))];

  const toggleLike = (id) => {
    setLiked(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const closeModal = () => setSelected(null);

  return (
    <>
      <section className="resources-section">
        <div className="animated-bg">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>

        <div className={`resources-container ${selected !== null ? "blurred" : ""}`}>
          <div className="resources-header">
            <h2 className="section-title">
              Our <span className="highlight">Resources</span>
            </h2>
            <p className="section-subtitle">
              Explore insights, stories, and knowledge that inspire innovation and empower your business growth.
            </p>
          </div>

          <div className="filter-bar">
            <div className="search-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-buttons">
              {types.map((type) => (
                <button
                  key={type}
                  className={`filter-btn ${filter === type ? "active" : ""}`}
                  onClick={() => setFilter(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="resources-grid">
            {filteredResources.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="resource-card"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="card-inner">
                  <div className="image-wrapper">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className={`type-badge ${item.type.toLowerCase().replace(' ', '-')}`}>
                      {item.type}
                    </div>
                    <button
                      className={`like-btn ${liked.includes(item.id) ? "liked" : ""}`}
                      onClick={() => toggleLike(item.id)}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill={liked.includes(item.id) ? "currentColor" : "none"} stroke="currentColor">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="card-content">
                    <div className="read-time">{item.readTime}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <button className="explore-btn" onClick={() => setSelected(item.id)}>
                      <span>Explore</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="no-results">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <p>No resources found</p>
            </div>
          )}
        </div>

        {selected !== null && selectedResource && (
          <div className="resource-modal" onClick={closeModal}>
            <div className="modal-backdrop"></div>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
              </button>
              <div className="modal-layout">
                <div className="modal-left">
                  <img
                    className={modalStep >= 1 ? "fade-in" : ""}
                    src={selectedResource.image}
                    alt={selectedResource.title}
                  />
                </div>
                <div className="modal-right">
                  <div className={`type-badge ${selectedResource.type.toLowerCase().replace(' ', '-')} ${modalStep >= 2 ? "fade-in" : ""}`}>
                    {selectedResource.type}
                  </div>
                  <h2 className={modalStep >= 2 ? "fade-in" : ""}>
                    {selectedResource.title}
                  </h2>
                  <div className={`read-time ${modalStep >= 2 ? "fade-in" : ""}`}>
                    {selectedResource.readTime}
                  </div>
                  <p className={modalStep >= 3 ? "fade-in" : ""}>
                    {selectedResource.desc}
                  </p>
                  <div className={`extra-content ${modalStep >= 4 ? "fade-in" : ""}`}>
                    {modalStep >= 4 ? typedContent : ""}
                    {modalStep >= 4 && typedContent.length < fullText.length && (
                      <span className="cursor-blink">|</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Resources;