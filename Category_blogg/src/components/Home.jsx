export default function Home({content}){

    console.log("Home", content)
    return (
    <section>
        <h1>Home</h1>
        {content?.map(item => 
        <article key={item.id}>
        <h3>{item.name}</h3>
        <img src={item.image} alt={item.name}/>
        <span className={`status-box ${item.status === "Alive" ? "Alive" : "Dead"}`}></span>
        </article>)}
    </section>
)
}