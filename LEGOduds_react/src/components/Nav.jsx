import { useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function Nav(){
    const {slug} = useParams()
    
    const [active, setActive] = useState()    
    const categoryList = ["City", "Ninjago", "Castles and Knights", "Marine and Pirates", "Movie Characters"]
    //<a className={category === item ? "active" : null} href="#">item</a>
    return(
        <nav>
            <ul>
                {categoryList.map((item, i) => <li key={i+"cat"}><Link to={"produkter/"+item.replaceAll(" ", "-")} className={active === item ? "active" : null}>{item}</Link></li>)}
            </ul>
        </nav>
    )
}