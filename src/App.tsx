import React, { useState } from "react";
import "./App.css";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "./App/store";
import Reservation from "./components/Reservation";
import { addReservation } from "./features/ReservationSlice";

function App() {
  const [name, setName] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const dispatch=useDispatch()
  const handleAddReservation = () => {
    if(!name)return alert('Please add a name field')
    dispatch(addReservation(name)) 
    setName('')

  };
  const reservations = useSelector(
    (state: RootState) => state.reservations.values
  );
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name) => (
                <Reservation name={name} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input type="text" value={name} onChange={onChange} />
            <button type="submit" onClick={handleAddReservation}>
              Add
            </button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
