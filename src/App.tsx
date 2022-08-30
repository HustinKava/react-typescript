import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Homepage from "./pages/Homepage";
import TypingProps from "./pages/TypingProps";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/typingprops" element={<TypingProps />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
