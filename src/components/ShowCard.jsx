import React,{useState} from "react";

const ShowCard =({seat})=>{
    const [booked,setBooked]= useState(seat.booked); 

    return <button onClick={()=>{setBooked(true);if(!booked){alert("The seat is booked successfully");}}} style={{margin:'4px',padding:'15px'}} className={booked?"danger":"green"}>{seat.seatNumber}</button>
}

export default ShowCard;