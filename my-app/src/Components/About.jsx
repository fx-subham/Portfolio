function About() {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <p>Get To Know</p>
        <h2>About Me</h2>
      </div>

      <div className="about-container">
        <div className="about-card">
          <h3>👨‍💻 Who Am I?</h3>

          <p>
            I am Sai Subham Sahoo, a Computer Science student with a strong
            interest in web development and software development.
          </p>

          <p>
            I enjoy creating clean, modern and responsive websites using
            technologies like React, JavaScript, HTML and CSS.
          </p>

          <p>
            I am always learning new technologies and improving my skills to
            become a better software developer.
          </p>
        </div>

        <div className="about-info">
          <div className="info-box">
            <h3>🎓 Education</h3>
            <p>B.Tech in CSIT</p>
          </div>

          <div className="info-box">
            <h3>💻 Focus</h3>
            <p>Full Stack Web Development</p>
          </div>

          <div className="info-box">
            <h3>🚀 Goal</h3>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;