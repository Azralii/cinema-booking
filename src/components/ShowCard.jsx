import React, { useState } from "react";

const ShowCard = ({ id,seat }) => {
  const [booked, setBooked] = useState(seat.booked);


  let unparsed = localStorage.getItem('userDetails')
  let user = JSON.parse(unparsed)

  console.log(user)

  const bookSeat =()=>{
    fetch(`http://localhost:9999/bookings`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name:user?.user.name,
            email:user?.user.email,
            showId:id,
            userId:user?.user._id
        })
    }).then(res=>res.json())
    .then((data)=>{
        console.log(data)
        if(data.success){
            alert('Seat booked succesfully')
        }
    }).catch(err=>{
        console.log('error while signup',err)
    })
  }

  return (
    <button
      onClick={() => {
        setBooked(true);
        if (!booked) {
          bookSeat();
        }
      }}
      style={{ margin: "4px", padding: "15px" }}
      className={booked ? "danger" : "green"}
    >
      {seat.seatNumber}
    </button>
  );
};

export default ShowCard;
