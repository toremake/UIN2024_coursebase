import { useState } from "react";
import Cart from "./Cart";
export default function Header({amount, cart, setCart}){
    const [toggle, setToggle] = useState(false)

    const handleClick = () =>{
        setToggle(!toggle)
        console.log(toggle)
    }

    return(
      <header>
            <img id="logo" src="/website_images/LD_logo.svg" alt="LEGOdudes nettbutikk" />
            <button id="carttoggle" onClick={handleClick}>
                <span id="cartcount">{amount}</span>
                <img id="carticon" src="/website_images/legocart.svg" alt="Din handlevogn" />
            </button>
            <Cart toggle={toggle} cart={cart} setCart={setCart} />
        </header>
    )
  }

