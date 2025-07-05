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
          <FaEnvelope /> Email
        </a>

        <a
          href="tel:+918050885938"
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPhone /> Phone Number
        </a>

        <a
          href="https://github.com/neeraj18k"
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/neeraj-kumar-237118249"
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> linkedin
        </a>
      </div>
    </section>
  );
}

export default Contact;
