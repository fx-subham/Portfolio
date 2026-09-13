import profilePic from "../assets/images/my pic.png";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-text">

        <p className="hello">Hello, I'm</p>

        <h1>
          Sai Subham <span>Sahoo</span>
        </h1>

        <h2>Aspiring Software Developer</h2>

        <p className="hero-description">
          3rd-year B.Tech CSIT student passionate about Software Development.
          Currently learning Java, DSA, and Full-Stack Web Development while
          building projects and improving my problem-solving skills.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="social-links">

          <a
            href="https://www.linkedin.com/in/sai-subham-sahoo-523229421/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/fx-subham"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://leetcode.com/u/Saisubhamsahoo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode
          </a>

        </div>

      </div>

      {/* Profile Image */}
      <div className="hero-image">
        <div className="image-box">
          <img
            src={profilePic}
            alt="Sai Subham Sahoo"
          />
        </div>
      </div>

    </section>
  );
}

export default Hero;