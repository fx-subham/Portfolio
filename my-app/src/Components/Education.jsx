function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="section-title">
        <p>My Academic Journey</p>
        <h2>Education</h2>
      </div>

      <div className="education-container">

        <div className="education-card">
          <span className="education-year">2022 - Present</span>

          <h3>B.Tech in CSIT</h3>

          <p>
            Currently pursuing Bachelor of Technology in Computer Science and
            Information Technology.
          </p>

          <p className="cgpa">CGPA: 8.5+</p>
        </div>

        <div className="education-card">
          <span className="education-year">Higher Secondary</span>

          <h3>Jupiter Public School</h3>

          <p>Completed Class 11th and 12th under CBSE Board.</p>
        </div>

        <div className="education-card">
          <span className="education-year">Secondary Education</span>

          <h3>Kendrapada Public School</h3>

          <p>Completed Class 10th under CBSE Board.</p>
        </div>

      </div>
    </section>
  );
}

export default Education;