import Header from "./Header"
import Nav from "./Nav"

export default function Layout({amount, cart, setCart, category, children}){
    return(
    <div id="container">
        <Header amount={amount} cart={cart} setCart={setCart}/>
        <Nav/>
        {children}
    </div>
    )
}