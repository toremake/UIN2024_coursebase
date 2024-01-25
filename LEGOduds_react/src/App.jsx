import { useState } from 'react'
import './App.css'
import { products } from './assets/legoduds'
import Title from './components/Title'
import ProductCard from './components/ProductCard'

function App() {




  function Header(){
    return(
      <header>
            <img id="logo" src="website_images/LD_logo.svg" alt="LEGOdudes nettbutikk" />
            <button id="carttoggle">
                <span id="cartcount">99</span>
                <img id="carticon" src="website_images/legocart.svg" alt="Din handlevogn" />
            </button>
            <section id="cart">
                <h2>Din handlevogn</h2>
                <ul id="cartlist">
                    <li>
                        <span className="title">Produkttittel</span>
                        <span className="price">89,-</span>
                        <span className="quantity">x1</span>
                        <span className="functions">
                            <button>X</button>
                        </span>
                    </li>
                    <li>
                        <span className="title">Wengestone warriors</span>
                        <span className="price">9989,-</span>
                        <span className="quantity">x333</span>
                        <span className="functions">
                            <button>X</button>
                        </span>
                    </li>
                </ul>
            </section>
        </header>
    )
  }

  return (
    <div id="container">
        <Header/>
        <nav>
            <ul>
                <li><a href="#">City</a></li>
                <li><a href="#">Ninjago</a></li>
                <li><a href="#">Castles and Knights</a></li>
                <li><a href="#">Marine and Pirates</a></li>
                <li><a href="#">Movie Characters</a></li>
            </ul>
        </nav>
        <main>
          <Title />
          {products.map(product => <ProductCard key={product.prodid} category={product.category} title={product.title} img={product.imagefile} price={product.price}/> )}
        </main>
    </div>
  )

}

export default App
