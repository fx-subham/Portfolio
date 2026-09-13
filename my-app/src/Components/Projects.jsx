function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-title">
        <p>My Recent Work</p>
        <h2>Projects</h2>
      </div>

      <div className="projects-container">
        
        <div className="project-card">
          <div className="project-icon">👨‍💻</div>

          <h3>Personal Portfolio</h3>

          <p>
            A responsive personal portfolio website built using React, HTML
            and CSS.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <button>View Project</button>
        </div>

        <div className="project-card">
          <div className="project-icon">💱</div>

          <h3>Forex Trading Platform UI</h3>

          <p>
            A modern forex trading platform user interface with trading
            dashboard, charts and demo account features.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>Charts</span>
            <span>UI Design</span>
          </div>

          <button>View Project</button>
        </div>

      </div>
    </section>
  );
}

export default Projects;