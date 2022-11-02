import React from 'react'

interface ReservationType{
    name:string
}

const Reservation = ({name}:ReservationType) => {
  return (
    <div className="reservation-card-container">{name}</div>
  )
}

export default Reservation