import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NavBar from "./components/Navbar/NavBar";
import AdminPage from "./pages/AdminPage/AdminPage";
import StaffPage from "./pages/StaffRegistrationPage/StaffPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin/control" element={<AdminPage />} />
        <Route path="/staff/registration" element={<StaffPage />} />
      </Routes>
    </>
  );
}

export default App;
