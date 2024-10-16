import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainComp from "./Components/MainComp";
import MapComp from "./Components/MapComp";
import Navbar from "./Components/NavBar";
import Login from "./Components/LoginCard/LoginCard";

function App() {
  return (
    <MainComp>
      <Navbar />
      <Routes>
        <Route path="/" element={<MapComp />} />
        <Route path="/stations" element={<MapComp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </MainComp>
  );
}

export default App;
