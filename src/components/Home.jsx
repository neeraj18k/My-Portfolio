import './Home.css';
import { Typewriter } from 'react-simple-typewriter';
import profile from '../assets/profile.png';
import bg from '../assets/bg.jpg';
import terminalGif from '../assets/terminal.gif';

function Home() {
  return (
    <section id="home" className="home-section" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        <div className="home-top">
          <img src={profile} alt="Profile" className="profile-pic" />
          <img src={terminalGif} alt="Code" className="terminal-gif" />
        </div>

        <div className="text-block">
          <h1>Hi, I'm <span>Neeraj Kumar</span></h1>
         {/* ✅ Typing Animation */}
          <span className="typed-line">
            <Typewriter
              words={[
                "☕ Powered by caffeine & code.",
                "💻 Building dreams in dark mode.",
                "⚡ Fueled by curiosity & coffee.",
                "🎯 Typing lines... chasing goals."
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Home;
