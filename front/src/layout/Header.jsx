import React from 'react'
import "./header.css"
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='container'>
<header>
    <h1 className='aranoz'>Aranoz<span className='point'>.</span></h1>
    <nav>
        <ul>
            <li>
                <NavLink to={"/"} className={(navData)=>navData.isActive? "active":""}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/shop"} className={(navData)=>navData.isActive? "active":""}>Shop</NavLink>
            </li>
            <li>
                <NavLink to={"/pages"} className={(navData)=>navData.isActive? "active":""}>Pages</NavLink>
            </li>
            <li>
                <NavLink to={"/blog"} className={(navData)=>navData.isActive? "active":""}>Blog</NavLink>
            </li>
            <li>
                <NavLink to={"/add"} className={(navData)=>navData.isActive? "active":""}>Add</NavLink>
            </li>
            <CiSearch />
            <CiHeart />
            <FaCartPlus />
        </ul>
    </nav>
</header>
    </div>
  )
}

export default Header