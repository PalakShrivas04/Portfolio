
import "./Home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Home = () => {
  return (
    <div id="home" className="hero">
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1>Full-Stack Web Developer </h1>
              <img src="/Images/hand.png" alt="waving_hand" />

              <p>
                Hi, I{"'"}m Palak Shrivas . A passionate Full-stack Developer
                based in Madhya Pradesh, India. 📍
              </p>
              <span>
                <a href="https://www.linkedin.com/in/palak-shrivas-870558204/">
                  <LinkedInIcon />
                </a>
                <a href="https://github.com/PalakShrivas04">
                  <GitHubIcon />
                </a>
              </span>
            </div>
            <div className="hero-img"></div>
          </div>
          <div className="skills">
            <p>Tech stack</p>
            <div className="logos">
              <ul>
                <img src="/Images/html5.svg" alt="" title="HTML5" />
                <img src="/Images/css.svg" alt="CSS3" title="CSS3" />
                <img
                  src="/Images/javascript.svg"
                  alt="javascript"
                  title="Javascript"
                />
                <img src="/Images/react.svg" alt="React" title="React" />
                <img src="/Images/redux.svg" alt="Redux" title="Redux" />
                <img src="/Images/nodejs.svg" alt="Nodejs" title="Nodejs" />
                <img src="/Images/mongodb.svg" alt="MongoDB" title="MongoDB" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
