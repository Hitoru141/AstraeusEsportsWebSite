import "../Styles/main.css";

import Navbar from "../Components/Navbar";

import Footer from "../Components/footer";
import Carousel from "../Components/Carousel";

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
