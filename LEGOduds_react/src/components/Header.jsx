import Cart from "./Cart";
export default function Header({amount}){
    return(
      <header>
            <img id="logo" src="website_images/LD_logo.svg" alt="LEGOdudes nettbutikk" />
            <button id="carttoggle">
                <span id="cartcount">{amount}</span>
                <img id="carticon" src="website_images/legocart.svg" alt="Din handlevogn" />
            </button>
            <Cart />
        </header>
    )
  }

