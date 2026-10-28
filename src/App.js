
import React, { useState } from "react";
import "./App.css";

const skills = [
  {
    title: "Frontend Development",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB (learning)"],
  },
  {
    title: "Engineering & Facilities",
    items: [
      "Electrical Systems",
      "Data Center Operations",
      "Equipment Monitoring",
      "Troubleshooting",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Nexus — Project Management",
    category: "React · Frontend",
    description:
      "A practice project exploring project cards, task status, reusable components and a clean management dashboard.",
    tags: ["React", "JavaScript", "CSS"],
    status: "Practice project",
  },
  {
    number: "02",
    title: "Student Portal",
    category: "React · Web Application",
    description:
      "A learning project for practising reusable React components, profile layouts and responsive user interfaces.",
    tags: ["React", "CSS", "Components"],
    status: "Practice project",
  },
  {
    number: "03",
    title: "Facility Operations Dashboard",
    category: "Engineering · Concept",
    description:
      "A proposed dashboard concept for presenting facility readings, equipment status and maintenance tasks in one place.",
    tags: ["UI Design", "Monitoring", "Engineering"],
    status: "Concept",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>
            BEN Cason<span>.</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow">
                ENGINEERING × TECHNOLOGY
              </span>

              <p className="intro">Hello, I'm</p>
              <h1>
                Patrick
                <br />
                <span>Benjamin.</span>
              </h1>

              <h2>Facility Engineer &amp; Junior Developer</h2>

              <p className="hero-description">
                I bring together electrical engineering, facility
                operations and web development to explore practical
                solutions to real-world problems.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore My Projects <span>↗</span>
                </a>
                <a className="button button-secondary" href="#contact">
                  Get in Touch
                </a>
              </div>

              <div className="hero-note">
                <span className="status-dot" />
                Open to learning, collaboration and opportunities
              </div>
            </div>

            <div className="hero-visual" aria-label="Professional profile graphic">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="profile-logo">
  
<img
  src="https://benjamin-001113.github.io/patrick-portfolio/patrick.jpeg"
  alt="Patrick Benjamin"
  width="200"
  height='200'
  style={{ height: "auto", objectFit: "cover" }}
/>

</div>

              <div className="floating-card card-top">
                <span className="floating-icon">{"</>"}</span>
                <div>
                  <strong>Web Development</strong>
                  <small>Building digital experiences</small>
                </div>
              </div>

              <div className="floating-card card-bottom">
                <span className="floating-icon">⚡</span>
                <div>
                  <strong>Facility Engineering</strong>
                  <small>Systems · Operations</small>
                </div>
              </div>

              <span className="visual-decoration decoration-one">+</span>
              <span className="visual-decoration decoration-two">✳</span>
            </div>
          </div>
        </section>

        <section className="about section section-muted" id="about">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">A LITTLE ABOUT ME</p>
              <h2 className="section-title">
                Engineering thinking.
                <br />
                <span>Technology building.</span>
              </h2>
            </div>

            <div className="about-copy">
              <p>
                I am an Electrical and Electronics Engineering graduate
                interested in the intersection of engineering,
                infrastructure and software development.
              </p>
              <p>
                My experience and learning journey span facility
                operations, data center environments and frontend
                development. I am also developing my backend skills
                so I can build more complete web applications.
              </p>
              <p>
                I enjoy learning how systems work, solving problems
                methodically and turning ideas into useful digital
                experiences.
              </p>

              <a className="text-link" href="#contact">
                Let's connect <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">WHAT I BRING</p>
              <h2 className="section-title">Skills &amp; Expertise</h2>
              <p className="section-description">
                A growing toolkit combining software, engineering
                fundamentals and practical problem-solving.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <article className="skill-card" key={skill.title}>
                  <span className="skill-number">
                    0{index + 1}
                  </span>
                  <h3>{skill.title}</h3>
                  <div className="skill-tags">
                    {skill.items.map((item) => (
                      <span className="skill-tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <p className="small-note">
              Skills reflect a mix of practical experience and
              ongoing learning. Proficiency varies by technology.
            </p>
          </div>
        </section>

        <section
          className="projects section section-muted"
          id="projects"
        >
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">SELECTED WORK</p>
              <h2 className="section-title">Projects &amp; Ideas</h2>
              <p className="section-description">
                Projects that demonstrate my learning, interests
                and approach to solving problems.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-top">
                    <span className="project-number">
                      {project.number}
                    </span>
                    <span className="project-status">
                      {project.status}
                    </span>
                  </div>

                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <p className="small-note">
              These cards describe practice projects and a concept.
              Add working demo and source-code links after you have
              verified and published each project.
            </p>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-panel">
            <p className="eyebrow">HAVE AN OPPORTUNITY?</p>
            <h2>
              Let's build
              <br />
              something useful.
            </h2>
            <p>
              Interested in web development, engineering technology,
              collaboration or a new opportunity? I'd be glad to connect.
            </p>

            <a
              className="button button-light"
              href="engrbenjamin2025@gmail.com"
            >
              Email Me <span>↗</span>
            </a>

            <p className="contact-hint">
              Replace the placeholder email with your real contact address.
            </p>
          </div>
        </section>
      </main>

      
<footer className="site-footer">
  <div className="container footer-content">
    <a className="brand footer-brand" href="#home">
      PB<span>.</span>
    </a>

    <p className="footer-message">
      Bridging Engineering and Technology through Innovation.
    </p>

    <a
      href="https://wa.me/2347049471021"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      Chat with me on WhatsApp
    </a>

    <div className="footer-bottom">
      <span>
        © {new Date().getFullYear()} Patrick Benjamin. All rights reserved.
      </span>
      <a href="#home" className="back-to-top">
        Back to top ↑
      </a>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;
