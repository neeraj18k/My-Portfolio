import './CertificationsWorkshops.css';

function CertificationsWorkshops() {
  return (
    <section id="certifications" className="cert-section" data-aos="fade-up">
      <h2>Certifications & Workshops</h2>
      
      <div className="cert-container">
        <div className="cert-block">
          <h3>Certifications</h3>
          <ul>
            <li>✅ Python Developer Bootcamp 2024 – Udemy</li>
            <li>✅ JAVA Programming – Beginner to Master</li>
            <li>✅ HTML, CSS, JavaScript UI/UX Web Dev Course</li>
            <li>✅ Java DSA + Leetcode Practice</li>
          </ul>
        </div>

        <div className="cert-block">
          <h3>Workshops</h3>
          <ul>
            <li>💻 Mastering the art of Real World Penetration Testing by Accubits Technolgies Inc.Trivandrum  </li>
            <li>Murder Myster Solving organised by-IEEE</li>
            <li>📊 Data Visualization with Python – IEEE Chapter</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CertificationsWorkshops;
