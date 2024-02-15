import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Categories from './components/Categories'

function App() {
 
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="categories" element={<Categories />} />
    </Routes>
  )
}

export default App
