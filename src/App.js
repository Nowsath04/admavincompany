import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Infinity from "./pages/Infinty/Infinity";
import SquareSplit from "./pages/SquareSplit/SquareSplit";
import { TopNavbar } from "./pages/Navbar/TopNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <TopNavbar />

      <div className="pages">
        <Routes>
          <Route path="/" element={<Infinity />} />

          <Route path="/square" element={<SquareSplit />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
