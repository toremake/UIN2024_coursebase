import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function PostPage({posts}){
    const {slug, postid} = useParams()

    const [post, setPost] = useState([])

    useEffect(()=>{
        setPost(posts?.filter(post=> post.id === Number(postid)))
    },[])

    console.log(post)

    return (
    <section className="post-content">
        <h1>{post[0]?.title}</h1>
        <span>{post[0]?.author}</span>
        <p>{post[0]?.content}</p>
        <section>
            <h3>Comments</h3>
            <form>
                <label htmlFor="comment">Comment:</label>
                <textarea id="comment"></textarea>
                <button>Send</button>
            </form>
            {post[0]?.comments?.map((comment, i) => 
            <article key={i}>
                <h4>{comment?.name}</h4>
                <p>{comment?.content}</p>
            </article>)}
        </section>
    </section>
    )
}