export default function Cart({toggle, cart, setCart}){

function CartProduct({title, price, quantity, setCart, prodid}){
    const removeItem = ()=>{
        setCart(prevCart => prevCart.map(item => item.prodid === prodid ? {...item, quantity :item.quantity -1} : item)
        .filter(item => item.quantity > 0))
    }
    return(
    <li>
        <span className="title">{title}</span>
        <span className="price">{price},-</span>
        <span className="quantity">x{quantity}</span>
        <span className="functions">
            <button onClick={removeItem}>X</button>
        </span>
    </li>
    )
}

    return(
        <section id="cart" className={toggle ? "show" : null}>
                <h2>Din handlevogn</h2>
                <ul id="cartlist">
                    {cart.map(product => <CartProduct key={product.prodid} prodid={product.prodid} setCart={setCart} title={product.title} price={product.price} quantity={product.quantity} />)}
                </ul>
            </section>
    )
}