import './Resume.css';
import resumeFile from '../assets/resume.pdf';
import { useState } from 'react';

function Resume() {
  const [showResume, setShowResume] = useState(false);

  const handleToggle = () => {
    setShowResume(!showResume);
  };

  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>

      <button className="view-btn" onClick={handleToggle}>
        {showResume ? "Hide Resume 📄" : "View Resume 📄"}
      </button>

      {showResume && (
        <div className="resume-content">
          <iframe
            src={resumeFile}
            title="Neeraj Kumar Resume"
            width="100%"
            height="500px"
          ></iframe>

          <a href={resumeFile} download className="download-btn">
            🔥 Download PDF
          </a>
        </div>
      )}
    </section>
  );
}

export default Resume;

