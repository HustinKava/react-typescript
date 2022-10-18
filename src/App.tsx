import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Homepage from "./pages/Homepage";
import TypingProps from "./pages/TypingProps";
import AdvancedProps from "./pages/AdvancedProps";
import EventProps from "./pages/EventProps";
import StyleProps from "./pages/StyleProps";
import ExportedProps from "./pages/ExportedProps";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/typingprops" element={<TypingProps />} />
          <Route path="/advancedprops" element={<AdvancedProps />} />
          <Route path="/eventprops" element={<EventProps />} />
          <Route path="/styleprops" element={<StyleProps />} />
          <Route path="/exportedprops" element={<ExportedProps />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
