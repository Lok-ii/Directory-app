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
            <Link to={"/"} ><button className='addPerson'>Add New Person</button></Link>
            <Link to={"/retrieve"}><button className="retrieve">Retrieve Information</button></Link>            
        </nav>
    </header>
  )
}

export default Header;
