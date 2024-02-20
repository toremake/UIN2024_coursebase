import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Categories from './components/Categories'
import Layout from './components/Layout'
import Category from './components/Category'
import CategoriesIndex from './components/CategoriesIndex'
import { posts } from './assets/posts'
import PostPage from './components/PostPage'

function App() {

  console.log(posts)
 
  return (
    <Layout>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="categories/*" element={<Categories />}>
          <Route index element={<CategoriesIndex />}/>
          <Route path=':slug' element={<Category />}/>
          <Route path=':slug/:postid' element={<PostPage />} />
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
