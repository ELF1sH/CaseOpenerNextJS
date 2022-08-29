import {useEffect} from "react";
import Post from "../components/Post";

const Posts = (props) => {
    return (
        <div>
            <h4 style={{textAlign: 'center'}}>Info is taken from <code>JsonPlaceholder</code></h4>
            {props.posts.map(article => {
                return <Post body={article.body} title={article.title} key={article.id} id={article.id} isPost={true} />
            })}
        </div>
    )
}

export default Posts

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
    const posts = await res.json()

    return {
        props: {
            posts
        }
    }
}