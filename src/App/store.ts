import { configureStore} from '@reduxjs/toolkit'
import ReservationReducer from '../features/ReservationSlice'
export const store=configureStore({
    reducer:{
        reservations:ReservationReducer
    }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch