import "./HeroStyles.module.css";
import HeroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import gitIcon from "../../assets/github-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import CV from '../../assets/cv.pdf';
import { useTheme } from "../../common/ThemeContext";

const Hero = () => {
  const {theme,toggleTheme} = useTheme();
  return (
    <section id="hero" className="container">
      <div className="colorModeContainer">
        <img
          className="hero"
          src={HeroImg}
          alt="Profile Picture of Vignesh Kumar"
        />
        <img className="colorMode" src={themeIcon} alt="color mode icon"/>
      </div>
      <div>
        <h1>
          Vignesh
          <br />
          Kumar
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://github.com/" target="_blank">
            <img src={gitIcon} alt="github profile" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="linkedin profile" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="twitter profile" />
          </a>
        </span>
        <p>With a passion for developing modern React web apps for commercial businesses</p>
      </div>
      <a href={CV} download>
        <button className="hover">Resume</button>
      </a>
    </section>
  );
};

export default Hero;
