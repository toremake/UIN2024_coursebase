import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Layout({children}){
    const [user, setUser] = useState(()=>{
        const saved = localStorage.getItem("username")
        return saved || ""
    })

    useEffect(()=>{
        setUser(localStorage.removeItem("username"))
    },[])

    console.log(user)

    return(
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="characters">Characters</Link></li>
                </ul>
                <p>{user}</p>
            </nav>
        </header>
        <main>
        {children}
        </main>
        <footer>Footer</footer>
        </>
    )
}