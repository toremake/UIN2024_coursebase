import Title from './Title'
import ProductCard from './ProductCard'
import {products} from '../assets/legoduds'
export default function ContentPage(){
    return(
        <main>
          <Title />
          {products.map(product => <ProductCard key={product.prodid} category={product.category} title={product.title} img={product.imagefile} price={product.price}/> )}
        </main>
    )
}