import React, { useEffect, useState } from "react";
import {NavLink, useLocation} from 'react-router-dom'

import "./Nav.css";

function Nav() {
    const location = useLocation();
    // console.log(location)

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
     }

     useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
     }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <NavLink  to="/" exact='true'>
       <img
          className="nav__logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
          alt=""
        />
        </NavLink>
        {location.pathname === '/profile' ? <img
          className="nav__avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt=""
        /> : <NavLink to="profile">
        <img
          className="nav__avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt=""
        />
        </NavLink>}

      </div>
    </div>
  );
}

export default Nav;
