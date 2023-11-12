import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const MyBookings = () => {

    const [bookings,setBookings] = useState([])

    let unparsed = localStorage.getItem('userDetails')
    let user = JSON.parse(unparsed)

    useEffect(()=>{
        getMyBookings()
    },[])

    const getMyBookings =()=>{
        fetch(`http://localhost:9999/auth/my-bookings/${user.user._id}`,{
            method:'GET',
            headers:{
                'Authorization':user.token
            }
        }).then(res=>res.json())
        .then((data)=>{
            console.log(data);
            setBookings(data)
        }).catch(Err=>{
            console.log(Err)
        })
    }



    const convertTime = (date)=>{
        let result = ''

        let fd = new Intl.DateTimeFormat('en-us',{
            dateStyle:'full',
            timeStyle:'medium'
        })

        result = fd.format(new Date(date))
        return result

    }


  return (
    <div>
        <h1>My bookings page</h1>
        {
            bookings.length > 0 ?
            bookings && bookings.map((booking,index)=>(
                <div className='card' key={booking._id}>
                    <span>Booking NO{index+1}</span>
                    <div>Created By :{booking.name}</div>
                    <div>Created At :{convertTime(booking.createdAt)}</div>


                    </div>
            ))
            :
            <span>No bookings yet</span>
        }

    </div>
  )
}

export default MyBookings