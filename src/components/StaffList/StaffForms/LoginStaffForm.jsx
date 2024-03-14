import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import FormInput from "../../AuthForm/FormInput/FormInput";
import { API_URL } from "../../../../ApiUrl";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const LoginStaffForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookies] = useCookies("access_token");
  const [staffInfo, setStaffInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const loginOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const staffInformation = {
        email: staffInfo.email,
        password: staffInfo.password,
      };
      const response = await axios.post(
        `${API_URL}/staff/login`,
        staffInformation
      );
      if (response) {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("staffID", response.data.token);
        navigate("/staff/reservations");
        location.reload();
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={loginOnSubmit}>
        <FormInput
          inputText="E-mail"
          inputType="email"
          inputValue={staffInfo.email}
          onChange={(e) => {
            setStaffInfo({
              ...staffInfo,
              email: e.target.value,
            });
          }}
        />
        <FormInput
          inputText="Password"
          inputType="password"
          inputValue={staffInfo.password}
          onChange={(e) => {
            setStaffInfo({
              ...staffInfo,
              password: e.target.value,
            });
          }}
        />
        <Button variant="primary">Login</Button>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default LoginStaffForm;
