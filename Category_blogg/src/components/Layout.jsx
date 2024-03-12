import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Layout({children}){
    const [user, setUser] = useState(()=>{
        const saved = localStorage.getItem("username")
        return saved || ""
    })

    const handleClick = ()=>{
        setUser(localStorage.setItem("username", "ackarlse"))
    }

    console.log(user)

    return(
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="characters">Characters</Link></li>
                </ul>
                {user?.length === 0 ? <button onClick={handleClick}>Logg inn</button> : <p>{user}</p>}
            </nav>
        </header>
        <main>
        {children}
        </main>
        <footer>Footer</footer>
        </>
    )
}