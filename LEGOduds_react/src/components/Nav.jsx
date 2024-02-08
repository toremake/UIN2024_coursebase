import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function Nav(){
    const [active, setActive] = useState()    
    const categoryList = ["City", "Ninjago", "Castles and Knights", "Marine and Pirates", "Movie Characters"]
    useEffect(()=>{
        console.log(active)
    }, [active])
    return(
        <nav>
            <ul>
                {categoryList.map((item, i) => 
                <li key={i+"cat"}>
                    <Link to={"/produkter/"+item.replaceAll(" ", "-")}
                    //Lagt til en anonym funskjon som setter active staten til å ha verdien som er item i den den blir trykket på  
                    onClick={()=> setActive(item)}
                    className={active === item ? "active" : null}>{item}</Link>
                </li>)}
            </ul>
        </nav>
    )
}