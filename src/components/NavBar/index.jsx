import "./styles.css";
import logo from "../../assets/Images/logo.png";
import NavItem from "./components/NavItem";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";

const NavBar = () => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies("access_token");

  const storageToken = localStorage.getItem("userID");

  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    window.localStorage.removeItem("staffID");
    window.localStorage.removeItem("profileID");
    navigate("/");
    location.reload();
  };
  return (
    <>
      <div className="navWrapper">
        <div className="navInnerWrapper">
          <div className="imageWrapper">
            <img src={logo} />
          </div>
          <div className="navGroupWrapper">
            <NavItem to={"/"} />
            <NavItem to={"make-reservation"} label="Reservation" />

            {!storageToken ? (
              <>
                <NavItem
                  label="Sign Up"
                  onClick={() => {
                    setFormType("signup");
                    setShowForm(true);
                  }}
                />
                <NavItem
                  label="Login"
                  onClick={() => {
                    setFormType("login");
                    setShowForm(true);
                  }}
                />
              </>
            ) : (
              <>
                <NavItem label="Logout" onClick={logout} />
              </>
            )}
          </div>
        </div>
      </div>
      {showForm && <AuthForm formType={formType} setShowForm={setShowForm} />}
    </>
  );
};

export default NavBar;
