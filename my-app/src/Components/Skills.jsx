function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
  ];

  return (
    <section className="section skills-section" id="skills">
      <div className="section-title">
        <p>My Abilities</p>
        <h2>Skills</h2>
      </div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill}</h3>
            <p>Learning & Practicing</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;