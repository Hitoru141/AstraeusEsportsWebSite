import "../Styles/main.css";

import Carousel from "../Components/Carousel";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";

const Home = () => {
  return (
    <div className="Mainwrapper">
      <Navbar />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;
