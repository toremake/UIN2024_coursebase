import { Link } from "react-router-dom"
export default function CategoriesIndex(){
    const categoriesArray = ["Fruits", "Vegetables", "Animals", "Colors"]
    return(
    <>
        <h1>Categories</h1>
        <ul className="category-list">
            {categoriesArray.map((category, index) => <li key={category+index}><Link to={category}>{category}</Link></li>)}
        </ul>
    </>)
}