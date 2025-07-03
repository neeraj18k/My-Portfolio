import './Hobbies.css';
import codeImg from '../assets/hobbies/coding.png';
import musicImg from '../assets/hobbies/music.png';
import cricket1Img from '../assets/hobbies/cricket1.png';
import cricket2Img from '../assets/hobbies/cricket2.png';
import watchingImg from '../assets/hobbies/movie.png';

function Hobbies() {
  return (
    <section id="hobbies" className="hobbies-section" data-aos="flip-left">
      <h2>Hobbies</h2>
      <div className="hobby-grid">
        <div className="hobby-card"><img src={codeImg} alt="Coding" /> Coding</div>
        <div className="hobby-card"><img src={musicImg} alt="Music" /> Music</div>
        <div className="hobby-card"><img src={cricket1Img} alt="Playing Cricket" /> Playing Cricket</div>
        <div className="hobby-card"><img src={cricket2Img} alt="Love To Watch Cricket Matches" /> Love To Watch Cricket Matches</div>
        <div className="hobby-card"><img src={watchingImg} alt="Watching Thriller Movies" /> Watching Thriller Movies</div>
      </div>
    </section>
  );
}

export default Hobbies;
