import { useParams } from "react-router-dom"

export default function Home(){
    const {slug} = useParams()
    return <h2>{slug}</h2>
}