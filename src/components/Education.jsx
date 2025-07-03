import './Education.css';

function Education() {
  return (
    <section id="education" className="education-section" data-aos="fade-up">
      <h2>Education</h2>
      <div className="education-grid">
        <div className="edu-card">
          <h3>Bachelor of Engineering – Computer Science</h3>
          <p>CMR Institute of Technology, Bangalore</p>
          <span className="edu-details">7.95 CGPA | 2022 – 2026</span>
        </div>

        <div className="edu-card">
          <h3>12th – Science (PCMC)</h3>
          <p>SIR MV PU College, Davanagere</p>
          <span className="edu-details">87.5% | 2020 – 2022</span>
        </div>

        <div className="edu-card">
          <h3>10th</h3>
          <p>STJHS, Davanagere</p>
          <span className="edu-details">98.04% | 2019 – 2020</span>
        </div>
      </div>
    </section>
  );
}

export default Education;
