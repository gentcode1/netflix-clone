import React,{useEffect,useState } from "react";
import './nav.css'
import Logo from '../assets/logo.png'
import Avatar from '../assets/Avatar.png'
const Nav = () => {
    const[show, handleShow]=useState([]);
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
           if(window.scrollY >100)
           { handleShow(true);
        } else handleShow(false);
    });
     return ()=>{
        window.removeEventListener("scroll");
    } 
 
},[])
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
       className='nav__logo'
        src={Logo}
        alt="Netflix logo"
      />
      <img
       className='nav__avatar'
        src={Avatar}
        alt="avatar"
      />
    </div>
  );
};
export default Nav;
