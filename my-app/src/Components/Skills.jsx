function Skills() {
  const technicalSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Java",
    "DSA",
    "Git",
    "GitHub",
  ];

  const otherSkills = [
    "Forex Trading",
    "Technical Analysis",
    "Market Analysis",
    "Risk Management",
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Time Management",
  ];

  return (
    <section className="section skills-section" id="skills">
      <div className="section-title">
        <p>What I Know</p>
        <h2>My Skills</h2>
      </div>

      <div className="skills-container">

        {/* Technical Skills */}
        <div className="skills-card">
          <div className="skills-card-title">
            <span>💻</span>
            <h3>Technical Skills</h3>
          </div>

          <div className="skills-list">
            {technicalSkills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <span>✓</span>
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div className="skills-card">
          <div className="skills-card-title">
            <span>⭐</span>
            <h3>Other Skills & Interests</h3>
          </div>

          <div className="skills-list">
            {otherSkills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <span>✓</span>
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;