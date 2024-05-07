import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar--logo'>
        <img
          className='logo--image'
          src='./src/images/greengourmet-logo.svg'
          alt='greengourmet logo'
        />
        <h1 className='logo--title'>
          <span className='logo--title--green'>Green</span>
          <span className='logo--title--gourmet'>Gourmet</span>
        </h1>
      </div>
      <ul className='navbar--menu'>
        <li className='navbar--menu--item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='navbar--menu--item'>
          {" "}
          <Link to='/about'>About</Link>
        </li>
        <li className='navbar--menu--item'>
          {" "}
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
}
