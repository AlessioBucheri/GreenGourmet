import React from "react";
import "./Navbar.css";

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
          <a href='#'>Home</a>
        </li>
        <li className='navbar--menu--item'>
          <a href='#'>About</a>
        </li>
        <li className='navbar--menu--item'>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </div>
  );
}
