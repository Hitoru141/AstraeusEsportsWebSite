import "../Styles/hero.css";
import samplehero from "../assets/samplehero.jpg";
import TeamCard from "./TeamCard";
const Carousel = () => {
  return (
    <div className="hero-section">
      <div className="hero-img">
        <img src={samplehero} className="hero-img" />
      </div>
      <div className="team-typo-cont">
        <p className="team-header">
          ASTRAEUS <span className="h-esport">ESPORTS</span>
        </p>
        <p className="sub-header">Meet our team</p>
      </div>
      <div className="team-category">
        <main className="page-content">
          <TeamCard />
          <TeamCard />
        </main>
      </div>
    </div>
  );
};

export default Carousel;
