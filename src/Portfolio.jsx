import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // ADD THIS LINE
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Portfolio.css';

function Portfolio() {
  return (
    <div>

      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top custom-navbar">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#about">Jodony Dunn <br></br><span className="fs-6">(BSc Computer Science)</span></a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> {/* close navbar section */}

      {/* About Section */}
      <section id="about" className="section-full">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side - Information */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-4 fw-bold">About Me</h2>
              <p className="lead text-secondary">
                Hi! I’m a web developer with a strong passion for frontend development and user interface design. I enjoy creating clean, responsive, and visually engaging web experiences.
              </p>
              <p className="text-secondary">
                I hold a BSc in Computing (Computer Science) from the University of Technology, Jamaica and specialize in building modern web applications using current technologies.
                 I focus on writing clean code while delivering interfaces that are both functional and visually appealing.
              </p>
             
              <div className="mt-4">
                <span className="skill-badge">React</span>
                <span className="skill-badge">JavaScript</span>
                <span className="skill-badge">Node.js/Next.js</span>
                <span className="skill-badge">CSS/BootStrap/Tailwind</span>
                <span className="skill-badge">HTML/PHP</span>
                <span className="skill-badge">MySQL</span>
              </div>
            </div>
            
            {/* Right Side - Image of me */}
            <div className="col-lg-6 text-center">
              <div className="profile-image mx-auto">
                <img src="/profile.jpg" alt="Jodony Dunn" />
              </div>
            </div>
          </div>
        </div>
      </section> {/* cloase about section */}


      {/* Projects Section */}
      <section id="projects" className="section-full section-bg-white">
        <div className="container">
          <h2 className="display-4 text-center fw-bold mb-5">Projects</h2>
          <div className="row g-4">

            {/* Project 1 - St Thomas More Preparatory School */}
            <div className="col-md-6 col-lg-4">
              <a 
                href="https://stthomasmorefamily.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="project-card">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h4 className="fw-bold text-dark">St. Thomas More Preparatory School</h4>
                    <i className="bi bi-box-arrow-up-right text-secondary"></i>
                  </div>
                  <p className="text-secondary"> { /* blaze beauty school*/}
                   A React-based website for St. Thomas More Preparatory School, featuring multi-page routing, interactive event and photo galleries, GSAP animations, and a fully responsive, SEO-optimized design.
                  </p>
                  <div className="mt-3">
                    <span className="project-tech">REACT</span>
                    <span className="project-tech">TAILWIND CSS</span>
                    <span className="project-tech">GSAP</span>
                    <span className="project-tech">REACT ROUTER/LUCIDE REACT</span>
                  </div>
                  <br></br>
                  <a href="https://github.com/JodonyD/sttmps" 
                  target='_blank'
                  rel="noopener noreferrer"
                  className="text-decoration-none">
                  <p className="btn btn-light btn-outline-secondary btn-small">Source Code</p></a>
                </div>
              </a>
            </div>
            
            {/* Project 2 - Blaze Beauty School */}
            <div className="col-md-6 col-lg-4">
              <a 
                href="https://blazebeautyschool.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="project-card">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h4 className="fw-bold text-dark">Blaze Beauty School</h4>
                    <i className="bi bi-box-arrow-up-right text-secondary"></i>
                  </div>
                  <p className="text-secondary"> { /* blaze beauty school*/}
                    A professional website created for a beauty school to showcase available courses, pricing, and program details. 
                  </p>
                  <div className="mt-3">
                    <span className="project-tech">PHP</span>
                    <span className="project-tech">HTML</span>
                    <span className="project-tech">CSS</span>
                    <span className="project-tech">Responsive</span>
                  </div>
                  <br></br>
                  <a href="https://github.com/JodonyD/blaze-beauty-school" 
                  target='_blank'
                  rel="noopener noreferrer"
                  className="text-decoration-none">
                  <p className="btn btn-light btn-outline-secondary btn-small">Source Code</p></a>
                </div>
              </a>
            </div>

            {/* Project 3 - JRD WebCreations */}
            <div className="col-md-6 col-lg-4">
              <a 
                href="https://jrdwebcreation.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="project-card">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h4 className="fw-bold text-dark">JRD WebCreations</h4>
                    <i className="bi bi-box-arrow-up-right text-secondary"></i>
                  </div>
                  <p className="text-secondary"> {/* JRD description */}
                    A responsive business website built to showcase web design services, pricing, and past work.  
                  </p>
                  <div className="mt-3">
                    <span className="project-tech">React</span>
                    <span className="project-tech">JavaScript</span>
                    <span className="project-tech">Node.js</span>
                    <span className="project-tech">Bootstrap</span>
                    <span className="project-tech">Responsive</span>
                  </div>
                  <br></br>
                  <a href="https://github.com/JodonyD/business-app"
                  target='_blank'
                  rel="noopener noreferrer"
                  className="text-decoration-none">
                  <p className='btn btn-light btn-outline-secondary btn-small'>Source Code</p>
                  </a>
                </div>
              </a>
            </div>

            {/* Project 3 - Oomas */}
            <div className="col-md-6 col-lg-4">
              <a 
                href="https://oomasjamaicangoodies.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="project-card">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h4 className="fw-bold text-dark">Oomas Jamaican Goodies</h4>
                    <i className="bi bi-box-arrow-up-right text-secondary"></i>
                  </div>
                  <p className="text-secondary"> {/* Oomas description */}
                    A visually engaging website designed for a local bakery to highlight products and brand identity.
                  </p>
                  <div className="mt-3">
                    <span className="project-tech">HTML</span>
                    <span className="project-tech">JavaScript</span>
                    <span className="project-tech">PHP</span>
                    <span className="project-tech">Responsive</span>
                  </div>
                  <br></br>
                  <a href="https://github.com/JodonyD/oomas" 
                  target='_blank'
                  rel="noopener noreferrer"
                  className="text-decoration-none">
                  <p className="btn btn-light btn-outline-secondary btn-small">Source Code</p></a>
                </div>
              </a>
            </div>

             {/* Project 4 - Porfolio */}
            <div className="col-md-6 col-lg-4">
              <a 
                href="nb" //replace with actual live link
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="project-card">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h4 className="fw-bold text-dark">My Portfolio</h4>
                    <i className="bi bi-box-arrow-up-right text-secondary"></i>
                  </div>
                  <p className="text-secondary"> {/* portfolio description */}
                    A frontend-focused portfolio showcasing responsive, user-friendly websites built for real businesses using modern web technologies.
                  </p>
                  <div className="mt-3">
                    <span className="project-tech">Raect</span>
                    <span className="project-tech">JavaScript</span>
                    <span className="project-tech">CSS with Bootstrap</span>
                    <span className="project-tech">Responsive</span>
                  </div>
                  <br></br>
                  <a href="https" //replace with source code link
                  target='_blank'
                  rel="noopener noreferrer"
                  className="text-decoration-none">
                  <p className="btn btn-light btn-outline-secondary btn-small">Source Code</p></a>
                </div>
              </a>
            </div>

             {/* Project 7 - Zeta Jewellery */}
            <div className="col-md-6 col-lg-4">
              
                <div className="project-card">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h4 className="fw-bold text-dark">Zeta Jewellery</h4>
                    <i className="bi bi-box-arrow-up-right text-secondary"></i>
                  </div>
                  <p className="text-secondary"> {/* zeta App description */}
                    React-based jewellery website displaying products and pricing, with responsive design and WhatsApp contact integration.
                  </p>
                  <div className="mt-3">
                    <span className="project-tech">React</span>
                    <span className="project-tech">JavaScript</span>
                    <span className="project-tech">CSS with Bootstrap </span>
                    <span className="project-tech">Responsive</span>
                  </div>
                  <br></br>
                  <a href="https://github.com/JodonyD/zeta-jewellery1"
                  target='_blank'
                  rel="noopener noreferrer"
                  className="text-decoration-none">
                  <p className='btn btn-light btn-outline-secondary btn-small'>Source Code</p>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </section> {/* close project section */}


      {/* Contact Section */}
      <section id="contact" className="section-full">
        <div className="container text-center">
          <h2 className="display-4 fw-bold">Get In Touch</h2>
          <p className="lead text-secondary mb-5">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
            {/* Email */}
            <a href="mailto:jodonydunn@gmail.com" className="contact-btn">
              <i className="bi bi-envelope-fill"></i>
              <span>Email Me</span>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/JodonyD?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-btn"
            >
              <i className="bi bi-github"></i>
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/jodony-dunn-2ba30a245/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-btn"
            >
              <i className="bi bi-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section> {/* close contact section */}


      {/* Footer */}
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0">&copy; 2024 Jodony Dunn. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a href="https://github.com/JodonyD?tab=repositories" target="_blank" rel="noopener noreferrer" className="footer-link">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/jodony-dunn-2ba30a245/" target="_blank" rel="noopener noreferrer" className="footer-link">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:jodonydunn@gmail.com" className="footer-link">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </footer> {/* close footer section */}
    
    </div>
  );
}

export default Portfolio;