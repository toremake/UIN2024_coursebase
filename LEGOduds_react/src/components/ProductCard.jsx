import { useEffect, useState } from "react"
export default function ProductCard({category, img, title, price, setAmount, prodid, setCart, cart}){
 const [product, setProduct] = useState({
  title: title,
  price: price,
  prodid: prodid
 })

 useEffect(()=>{
  countProducts()
 },[cart])

  const handleClick = ()=>{
    const exist = cart.find(item => item.prodid === product.prodid)
    setCart((prevCart) => 
    exist 
    ? 
    prevCart.map(item =>  item.prodid === product.prodid ? {...item, quantity: item.quantity + 1} : item )
    :
    [...prevCart, {...product, quantity: 1}])
  }

  const countProducts =()=>{
    setAmount(cart.reduce((total, item) => total + item.quantity, 0))
  }
 
    return(
      <article>
        <img src={"/website_images/PROD_"+img} alt={title} />
        <a href="#">{category}</a>
        <h3>{title}</h3>
        <span>Kr.{price}</span>
        <button onClick={handleClick}>Legg i handlekurv</button>
      </article>
    )
  }