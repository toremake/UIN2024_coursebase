import { useState } from "react"
import { Link } from "react-router-dom"
export default function CategoriesIndex({content, setQuery, setCurrentId}){
    const [search, setSearch] = useState("")
    

    const handleSubmit = (e)=>{
        e.preventDefault()
        setQuery(search)
    }

    const handleChange = (event)=>{
        setSearch(event.target.value)
    }

    const handleClick = (id)=>{
        setCurrentId(id)
    }

    console.log("S", content)
    
    return(
    <>
        <h1>Characters</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Søk etter karakter:</label>
            <input type="text" id="search" placeholder="Rick..." onChange={handleChange}></input>
            <input type="submit" value="Søk"></input>
        </form>
        <ul className="category-list">
            {content?.map(item => <li key={item.id}><Link to={item.name} onClick={()=>handleClick(item.id)}>{item.name}</Link></li>)}
        </ul>
    </>)
}