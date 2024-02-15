import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Categories from './components/Categories'
import Layout from './components/Layout'
import Category from './components/Category'
import CategoriesIndex from './components/CategoriesIndex'

function App() {
 
  return (
    <Layout>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="categories/*" element={<Categories />}>
          <Route index element={<CategoriesIndex />}/>
          <Route path=':slug' element={<Category />}/>
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
