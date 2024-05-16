import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mapfilter from "./Interviewprep/Mapfilter";
import Menu from "./Interviewprep/Menu";
import States from "./Interviewprep/States";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Routes>
          <Route path="/" element={<Mapfilter/>}/>
          <Route path="/states" element={<States/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
