import { useState } from "react";
import { Link } from "react-router-dom";

export default function Layout({children, logedIn, setLogedIn}){
    const handleClick = ()=>{
        localStorage.setItem("logedIn", false)
        setLogedIn(false)
    }
    return (
        <>
        <header>
            <nav>
                <Link to="/">LOGO</Link>
                <ul>
                    <li><Link to="/">Hjem</Link></li>
                    <li>Mine oppskrifter</li>
                </ul>
            </nav>
            <div>
                {
                    logedIn ? 
                    <>
                    <span>Brukernavn</span>
                    <button onClick={handleClick}>Logg ut</button>
                    </>
                    :
                    null
                }
            </div>
        </header>
        <main>
            {children}
        </main>
        <footer>Copyright 2024 UIN</footer>
        </>
    )
}