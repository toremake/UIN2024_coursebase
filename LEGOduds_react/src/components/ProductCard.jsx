export default function ProductCard({category, img, title, price}){
    return(
      <article>
        <img src={"website_images/PROD_"+img} alt={title} />
        <a href="#">{category}</a>
        <h3>{title}</h3>
        <span>Kr.{price}</span>
        <button onClick={()=> console.log("Du har lagt til vare i handlekurv")}>Legg i handlekurv</button>
      </article>
    )
  }