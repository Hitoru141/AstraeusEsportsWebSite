import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Views/Home";
import ValorantTeam from "./Views/ValorantTeam";
import ContentCreators from "./Views/ContentCreators";
import Errorpage from "./Views/Errorpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/valoteam" element={<ValorantTeam />} />
        <Route path="/contentcreators" element={<ContentCreators />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;
