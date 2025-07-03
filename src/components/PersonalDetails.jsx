import './PersonalDetails.css';
import { FaBirthdayCake, FaUser, FaFlag, FaMapMarkerAlt, FaLanguage, FaFutbol } from 'react-icons/fa';

function PersonalDetails() {
  return (
    <section id="personal" className="personal-section" data-aos="fade-left">
      <h2>Personal Details</h2>

      <div className="personal-info-grid">
        <div className="info-card">
          <FaBirthdayCake /> <span><strong>Date of Birth:</strong> 27th July, 2004</span>
        </div>
        <div className="info-card">
          <FaUser /> <span><strong>Gender:</strong> Male</span>
        </div>
        <div className="info-card">
          <FaFlag /> <span><strong>Nationality:</strong> Indian</span>
        </div>
        <div className="info-card">
          <FaMapMarkerAlt /> <span><strong>Address:</strong> #3635/2, 9th Main, 7th Cross, MCC B Block, Heart Hospital Road, Davanagere</span>
        </div>
        <div className="info-card">
          <FaLanguage /> <span><strong>Languages:</strong> Kannada, English, Hindi</span>
        </div>
      </div>
    </section>
  );
}

export default PersonalDetails;
