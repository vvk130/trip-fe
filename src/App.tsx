import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainComp from "./Components/MainComp";
import MapComp from "./Components/MapComp";
import Navbar from "./Components/NavBar";
import Login from "./Components/LoginCard/LoginCard";
import StationForm from "./Components/Forms/Station";
import StationDetail from "./Components/StationDetailPage";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <MainComp>
      <Navbar />
      <Routes>
        <Route path="/" element={<MapComp />} />
        <Route path="/stations" element={<MapComp />} />
        <Route path="/add-station" element={<StationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stations/:id" element={<StationDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainComp>
  );
}

export default App;
