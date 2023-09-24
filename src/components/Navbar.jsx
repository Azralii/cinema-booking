import { Link } from "react-router-dom"
import React from "react";

const Navbar = ()=>{
return <div>
    <ul style={{display:"flex",width:'100%',height:'70px',alignItems:'center',backgroundColor:'black',justifyContent:'space-evenly'}}>
        <li><Link to={'/'}>Cinema</Link></li>
    </ul>
</div>
}
export default Navbar;