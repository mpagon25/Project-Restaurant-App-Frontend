import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ReservationPage from "./pages/ReservationPage/ReservationPage";

import AdminPage from "./pages/AdminPage/AdminPage";
import StaffPage from "./pages/StaffRegistrationPage/StaffPage";
import StaffHomePage from "./pages/StaffHomePage/StaffHomePage";
import ProfileLink from "./components/ProfileLink/ProfileLink";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import BurgersSteakPage from "./pages/BurgersSteakPage/BurgersSteakPage";
import VegetarianPage from "./pages/VegetarianPage/VegetarianPage";
import FingerFoodPage from "./pages/FingerFoodPage/FingerFoodPage";
import CoctailsDesertPage from "./pages/CoctailsDesertPage/CoctailsDesertPage";
import SingleFoodItem from "./components/SingleFoodItem/SingleFoodItem";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  // eslint-disable-next-line no-unused-vars
  // const [userCookie, setUserCookie] = useCookies("access_token");
  const userID = localStorage.getItem("userID");
  const staffID = localStorage.getItem("staffID");

  return (
    <>
      {/* <NavBar /> */}
      {window.location.pathname === "/admin/control" ? (
        ""
      ) : window.location.pathname === "/staff/registration" ? (
        ""
      ) : window.location.pathname === "/staff/reservations" ? (
        ""
      ) : (
        <ProfileLink />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="foods/:id" element={<SingleFoodItem />} />
        <Route path="/make-reservation" element={<ReservationPage />} />
        {staffID && <Route path="/admin/control" element={<AdminPage />} />}
        <Route path="/staff/registration" element={<StaffPage />} />
        {staffID && (
          <Route path="/staff/reservations" element={<StaffHomePage />} />
        )}
        {userID && <Route path="/user/profile" element={<UserProfilePage />} />}
        <Route path="/burgers&steaks" element={<BurgersSteakPage />} />
        <Route path="/vegetarian" element={<VegetarianPage />} />
        <Route path="/fingerfood" element={<FingerFoodPage />} />
        <Route path="/coctails&drinks" element={<CoctailsDesertPage />} />
      </Routes>
    </>
  );
}

export default App;
