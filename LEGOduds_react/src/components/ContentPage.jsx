import Title from './Title'
import ProductCard from './ProductCard'
import {products} from '../assets/legoduds'
import { useParams } from 'react-router-dom'
export default function ContentPage({amount, setAmount, category, setCart, cart}){
  const {id} = useParams()
    return(
        <main>
          <Title category={id} />
          {products.map(product => 
          <ProductCard
          cart={cart} 
          setCart={setCart}
          prodid={product.prodid}
          key={product.prodid} 
          category={product.category} 
          title={product.title} 
          img={product.imagefile} 
          price={product.price}
          amount={amount}
          setAmount={setAmount}
          /> )}
        </main>
    )
}