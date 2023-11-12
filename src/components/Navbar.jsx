import { Link } from "react-router-dom";
import React from "react";
import { Navbar as Navbar2, Nav } from "react-bootstrap";

const Navbar = () => {
  let authToken = localStorage.getItem("authToken");





  const handleLogout =()=>{
    localStorage.clear()
    window.location.href = '/'

  }

  return (
    <Navbar2 bg="light">
      <Navbar2.Brand><Link to="/">Cinema</Link></Navbar2.Brand>
      <Nav className="mr-auto">
        {authToken ? (
            <>
          <Nav.Link>
            <Link to="/my-bookings">My Bookings</Link>
          </Nav.Link>
             <Nav.Link>
             <Link onClick={handleLogout} to="/">Logout</Link>
           </Nav.Link>
            </>
       
        ) : (
          <>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signup">Signup</Link>
            </Nav.Link>
          </>
        )}
      </Nav>
    </Navbar2>
  );
};
export default Navbar;
