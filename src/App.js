import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import Ref from "./pages/Ref";
import Reducer from "./pages/Reducer";
import Context from "./pages/Context";
import Effect from "./pages/Effect";
import Etc from "./pages/Etc";
import "./App.css";
import Test from "./pages/Test";

function Insert() {}
function List() {}

function App() {
  return (
    <Router>
      <header>
        <Link to="/useRef">useRef</Link>
        <Link to="/useEffect">useEffect</Link>
        <Link to="/Reducer">useReducer</Link>
        <Link to="/Context">Context</Link>
        <Link to="/Etc">기타 (최적화)</Link>   
      </header>
      
      <Routes>
        <Route path="/Ref" element={<Ref />} />
        <Route path="/useEffect" element={<Effect />} />
        <Route path="/Reducer" element={<Reducer />} />
        <Route path="/Context" element={<Context />} />
        <Route path="/Etc" element={<Etc />} />
        <Route path="/Test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
