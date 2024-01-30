export default function Nav(){
    const categoryList = ["City", "Ninjago", "Castles and Knights", "Marine and Pirates", "Movie Characters"]
    return(
        <nav>
            <ul>
                {categoryList.map((item, index) => <li key={index+"cat"}><a href="#">{item}</a></li>)}
            </ul>
        </nav>
    )
}