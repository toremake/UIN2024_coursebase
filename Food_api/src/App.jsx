import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Layout from './components/Layout'

function App() {

  const [logedIn, setLogedIn] = useState(false)

  const [food, setFood] = useState("")
  const apiKey = process.env.REACT_APP_API_KEY

  const getFood = async()=>{
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=greek`)
    .then(response => response.json())
    .then(data => setFood(data.results))
    .catch(error => console.error(error))
  }

  useEffect(()=>{
    getFood()
  },[])

  console.log(food)

  return (
    <>
    <Layout logedIn={logedIn}>
      <Routes>
          <Route index element={<Home />}/>
          <Route path='login' element={<Login setLogedIn={setLogedIn} />} />
        </Routes>
    </Layout>
    {!logedIn ? <Navigate to="login" replace/> : <Navigate to="/" replace />}
    </>
  )
}

export default App
