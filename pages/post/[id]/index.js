import {useRouter} from 'next/router'
import Link from "next/link";

const Post = (props) => {
    const router = useRouter()
    const { id } = router.query

    const {post} = props

    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '0 50px'}}>
            <br />
            <h3>This is a post with id {id}</h3>
            <br />
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <br /> <br />
            <Link href='/posts'>←←←GO BACK</Link>
        </div>
    )
}

// this function executes on every request unlike `getStaticProps` which executes only once at build time of the project
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const post = await res.json()
//
//     return {
//         props: {
//             post
//         }
//     }
// }

export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const post = await res.json()

    return {
        props: {
            post
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()

    const ids = posts.map(post => post.id)
    const paths = ids.map(id =>
        ({
            params: {id: id.toString()}
        })
    )

    return {
        paths,
        fallback: false   // in order to return 404 page if id does not exist
    }
}

export default Post