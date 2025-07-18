import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png';
import cart from '../../Assets/cart.png';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setmenu] = useState("shop");

  return (
    <div className="navbar">
      
            <div className="nav-logo">
                <img src = {logo}  alt = "logo"/>

            </div>   

            <ul className="nav-menu">
               <li onClick={()=>{setmenu("shop")}} > <Link to="/"  style={{textDecoration: 'none'}}> Shop  </Link>   {menu === "shop"? <hr /> : <div></div>}</li>
               <li onClick={()=>{setmenu("men")}}><Link to="/men" style={{textDecoration: 'none'}} > Men </Link> {menu === "men"? <hr /> : <div></div>}</li>
               <li onClick={()=>{setmenu("women")}}><Link to="/women"  style={{textDecoration: 'none'}}> Women </Link>  {menu === "women"? <hr /> : <div></div>}</li>
               <li onClick={()=>{setmenu("kids")}}><Link to="/kids"  style={{textDecoration: 'none'}}> Kids </Link>{menu === "kids"? <hr /> : <div></div>}</li>
            </ul>  

            <div className="cart-logo">
                <Link to="/login" style={{textDecoration: 'none'}}><button >Login</button> </Link>
                <Link to="/cart" style={{textDecoration: 'none'}}> <img src = {cart} alt =''/> </Link>
                <div className="nav-cart-count">0</div> 
            </div>
      

    </div>

  )
}

export default Navbar