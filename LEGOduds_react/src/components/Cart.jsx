export default function Cart(){
    return(
        <section id="cart">
                <h2>Din handlevogn</h2>
                <ul id="cartlist">
                    <li>
                        <span className="title">Produkttittel</span>
                        <span className="price">89,-</span>
                        <span className="quantity">x1</span>
                        <span className="functions">
                            <button>X</button>
                        </span>
                    </li>
                    <li>
                        <span className="title">Wengestone warriors</span>
                        <span className="price">9989,-</span>
                        <span className="quantity">x333</span>
                        <span className="functions">
                            <button>X</button>
                        </span>
                    </li>
                </ul>
            </section>
    )
}