import "../Styles/hero.css";
import { BiSolidChevronsRight } from "react-icons/bi";
// import esport from "../assets/esports setup.jpg.webp";

const TeamCard = () => {
  return (
    <div className="card">
      {/* <img src={esport} className="" /> */}
      <div className="content">
        <h2 className="title">VALORANT</h2>
        <button className="btn">
          View Team
          <BiSolidChevronsRight
            style={{
              fontSize: "2em",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default TeamCard;
