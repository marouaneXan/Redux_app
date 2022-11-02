import { createSlice } from "@reduxjs/toolkit";

interface ReservationState {
  values: string[];
}
const initialState: ReservationState = {
  values: [],
};
export const ReservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.values.push(action.payload);
    },
    removeResevation:(state,action: PayloadAction<number>)=>{
        state.values.splice(action.payload,1)
    },
    confirmedRes:(state,action: PayloadAction<string>)=>{
        state.values.push(action.payload);
    }
  },
});

export const { addReservation,removeResevation,confirmedRes } = ReservationSlice.actions;
export default ReservationSlice.reducer;
