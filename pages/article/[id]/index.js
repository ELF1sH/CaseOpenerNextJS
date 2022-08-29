import {useRouter} from 'next/router'
import Link from "next/link";

const Article = (props) => {
    const router = useRouter()
    const { id } = router.query

    const { article } = props

    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '0 50px'}}>
            <br />
            <h3>This is a post with id {id}</h3>
            <br />
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <br /> <br />
            <Link href='/articles'>←←←GO BACK</Link>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${process.env.API_HOST}/articles/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${process.env.API_HOST}/articles`)
    const articles = await res.json()

    const ids = articles.map(article => article.id)
    const paths = ids.map(id =>
        ({
            params: {id: id.toString()}
        })
    )

    return {
        paths,
        fallback: false
    }
}

export default Article