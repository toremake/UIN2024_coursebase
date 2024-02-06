import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ContentPage from './components/ContentPage'
import Nav from './components/Nav'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
const [amount, setAmount] = useState(0)
const [category, setCategory] = useState("Ninjago")
const [cart, setCart] = useState([])

  return (
    <Layout cart={cart} setCart={setCart} amount={amount} category={category}>
        <Routes>
            <Route path=":slug" element={<Home />}/>
            <Route path="/produkter/:id" element={<ContentPage amount={amount} setAmount={setAmount} category={category} setCart={setCart} cart={cart}/>}/>
        </Routes>
    </Layout>
  )
}

export default App
