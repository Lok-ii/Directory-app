import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

const Header = () => {
  return (
    <header>
        <p className="head">
            Lokesh Kataria's Directory App
        </p>
        <nav>
            <Link className='navLinks' to={"/"} ><button className='addBtn'>Add New Person</button></Link>
            <Link className='navLinks' to={"/retrieve"}><button className="addBtn">Retrieve Information</button></Link>            
        </nav>
    </header>
  )
}

export default Header;
