import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="contact-section" data-aos="fade-up">
      <h2>Contact Me</h2>

      <div className="contact-links">
        <a
          href="mailto:mpneerajkumar28@gmail.com"
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope /> mpneerajkumar28@gmail.com
        </a>

        <a
          href="tel:+918050885938"
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPhone /> +91 8050885938
        </a>

        <a
          href="https://github.com/neeraj18k"
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> github.com/neeraj18k
        </a>

        <a
          href="https://www.linkedin.com/in/neeraj-kumar-237118249"
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> linkedin.com/in/neeraj-kumar-237118249
        </a>
      </div>
    </section>
  );
}

export default Contact;
