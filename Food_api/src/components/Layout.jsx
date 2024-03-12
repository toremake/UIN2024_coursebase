import { useState } from "react";
import { Link } from "react-router-dom";

export default function Layout({children, logedIn}){
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
                    <button>Logg ut</button>
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