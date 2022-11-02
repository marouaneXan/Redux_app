import React from 'react'
import { useDispatch } from "react-redux";
import { removeResevation } from '../features/ReservationSlice';

interface ReservationType{
    name:string,
    index:number
}

const Reservation = ({name,index}:ReservationType) => {
    const dispatch=useDispatch()

  return (
    <div onClick={()=>{dispatch(removeResevation(index))}} className="reservation-card-container">{name}</div>
  )
}

export default Reservation