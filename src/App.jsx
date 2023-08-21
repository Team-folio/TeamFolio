import "./index.css";
import Navbar from "@/components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home, Jobs, Projects, SignIn, SignUp } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


