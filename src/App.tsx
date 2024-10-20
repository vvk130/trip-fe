import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainComp from "./Components/MainComp";
// import MapComp from "./Components/PaginatedComp";
import Navbar from "./Components/NavBar";
import Login from "./Components/LoginCard/LoginCard";
import StationForm from "./Components/Forms/Station";
import StationDetail from "./Components/StationDetailComp";
import NotFound from "./Components/NotFound";
import Fetch from "./Components/Fetch";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainComp>
        <Navbar />
        <Routes>
          <Route path="/" element={<Fetch />} />
          <Route path="/stations" element={<Fetch />} />
          <Route path="/add-station" element={<StationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stations/:id" element={<StationDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainComp>
    </QueryClientProvider>
  );
}

export default App;
