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
  },
});

export const { addReservation } = ReservationSlice.actions;
export default ReservationSlice.reducer;
