import Navbar from "../Components/Navbar";
import Playercard from "../Components/Playercard";
import "../Styles/players.css";
const Playerpage = () => {
  return (
    <div className="player-wrap">
      <Navbar />
      <p className="team-header"> SOL ESPORTS</p>
      <div className="playercard-wrap">
        <Playercard />
        <Playercard />
        <Playercard />
        <Playercard />
      </div>
    </div>
  );
};

export default Playerpage;
