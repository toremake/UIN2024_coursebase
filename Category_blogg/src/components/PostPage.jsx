import { useParams } from "react-router-dom"
import { posts } from "../assets/posts"
import { useEffect, useState } from "react"

export default function PostPage(){
    const {slug, postid} = useParams()

    const [currentCategory, setCurrentCategory] = useState()

    useEffect(()=>{
        setCurrentCategory(posts?.filter(post=> post.category === slug))
    },[])

    console.log(currentCategory?.filter(item => JSON.stringify(item.id) === postid))

    return <h1>Post Page</h1>
}