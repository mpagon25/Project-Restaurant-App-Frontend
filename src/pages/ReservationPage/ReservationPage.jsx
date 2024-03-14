import { useState } from "react";
import FormInput from "../../components/AuthForm/FormInput/FormInput";
import axios from "axios";
import { API_URL } from "../../../ApiUrl";
import { useCookies } from "react-cookie";
import "./reservationPage.css";

const ReservationPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookie, _] = useCookies("access_token");

  const [newReserVation, setNewReservation] = useState({
    reserver: "",
    time: "",
    date: "",
    totalClients: 0,
  });

  const profileID = localStorage.getItem("profileID");

  const submitReservation = async (e) => {
    e.preventDefault();
    try {
      if (!profileID) {
        alert("Please Login to make your Reservation");
      }
      const newInfo = {
        reserver: profileID,
        time: new Date(newReserVation.time),
        date: new Date(newReserVation.date),
        totalClients: newReserVation.totalClients,
      };
      const request = await axios.post(`${API_URL}/reservation`, newInfo, {
        headers: { token: cookie.access_token },
      });
      if (request) {
        alert("Reservation Successful, see you then!");
      } else {
        alert("Error making Reservation");
      }
    } catch (err) {
      console.error(err);
    }
  };

  //   const handleTimeChange = (e) => {
  //     const currentValue = e.target.value;
  //     const [hours, minutes] = currentValue.split(":");
  //     const dateObj = new Date();
  //     dateObj.setHours(hours, minutes);
  //     setNewReservation({
  //       ...newReserVation,
  //       time: dateObj,
  //     });
  //   };

  return (
    <div className="reservationWrapper">
      <div className="headerContainer">
        <div className="headerTopText">
          <p>Come with your </p>
        </div>
        <div className="headerBottomText">
          <p>Family & Friends </p>
        </div>
      </div>
      <div className="reservationContainer">
        <form onSubmit={submitReservation} className="formReservations">
          <FormInput
            inputType="time"
            inputText="Time"
            inputValue={newReserVation.time}
            //   onChange={handleTimeChange}
            onChange={(e) => {
              setNewReservation({
                ...newReserVation,
                time: e.target.value,
              });
            }}
          />
          <div style={{ height: "40px" }} />
          <FormInput
            inputType="date"
            inputText="Date"
            inputValue={newReserVation.date}
            onChange={(e) => {
              setNewReservation({
                ...newReserVation,
                date: e.target.value,
              });
            }}
          />
          <div style={{ height: "40px" }} />

          <FormInput
            inputType="number"
            inputText="total clients"
            required="required"
            minValue="1"
            maxValue="10"
            inputValue={newReserVation.totalClients}
            onChange={(e) => {
              setNewReservation({
                ...newReserVation,
                totalClients: e.target.value,
              });
            }}
          />

          <button
            style={{
              height: "60px",
              width: "100%",
              marginTop: "40px",
              fontSize: "30px",
              color: "white",
              border: "none",
              backgroundColor: "#ffffff52",
            }}
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReservationPage;
