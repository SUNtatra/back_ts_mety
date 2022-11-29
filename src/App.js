import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Employes from "./pages/Employes";
import Pointage from "./pages/Pointage";
import Demande_Congé from "./pages/Demande_Congé";
import AddEmployes from "./pages/AddEmployes";
import EditEmployes from "./pages/EditEmployes";
import AddPointage from "./pages/AddPointage";
import EditPointage from "./pages/EditPointage";
import AddDemande_Congé from "./pages/AddDemande_Congé";
import EditDemande_Congé from "./pages/EditDemande_Congé";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Employes" element={<Employes />} />
          <Route path="/Employes/add" element={<AddEmployes />} />
          <Route path="/Employes/edit/:id" element={<EditEmployes />} />
          <Route path="/Pointage" element={<Pointage />} />
          <Route path="/Pointage/add" element={<AddPointage />} />
          <Route path="/Pointage/edit/:id" element={<EditPointage />} />
          <Route path="/Demande_Conge" element={<Demande_Conge />} />
          <Route path="/Demande_Conge/add" element={<AddDemande_Conge />} />
          <Route path="/Demande_Conge/edit/:id" element={<EditDemande_Conge />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
