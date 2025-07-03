import './Skills.css';
import htmlImg from '../assets/skills/html.png';
import cssImg from '../assets/skills/css.png';
import jsImg from '../assets/skills/javascript.png';
import reactImg from '../assets/skills/react.png';
import pythonImg from '../assets/skills/python.png';
import javaImg from '../assets/skills/java.png';
import dsaImg from '../assets/skills/dsa.png';
import aiImg from '../assets/skills/ai.png';
import dsImg from '../assets/skills/ds.png';

function Skills() {
  return (
    <section id="skills" className="skills-section" data-aos="fade-up">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-card"><img src={htmlImg} alt="HTML" /> HTML</div>
        <div className="skill-card"><img src={cssImg} alt="CSS" /> CSS</div>
        <div className="skill-card"><img src={jsImg} alt="JS" /> JavaScript</div>
        <div className="skill-card"><img src={reactImg} alt="React" /> React</div>
        <div className="skill-card"><img src={pythonImg} alt="Python" /> Python</div>
        <div className="skill-card"><img src={javaImg} alt="Java" /> Java</div>
        <div className="skill-card"><img src={dsaImg} alt="DSA" /> Data Structures</div>
        <div className="skill-card"><img src={aiImg} alt="AI" /> AI / ML</div>
        <div className="skill-card"><img src={dsImg} alt="DS" /> Data Science</div>
      </div>
    </section>
  );
}

export default Skills;
