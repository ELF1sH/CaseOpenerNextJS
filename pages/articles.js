import Post from "../components/Post";

const Articles = (props) => {
    return (
        <div>
            <h4 style={{textAlign: 'center'}}>Info is taken from <code>My own API</code></h4>
            {props.articles.map(article => {
                return <Post body={article.body} title={article.title} key={article.id} id={+article.id} isPost={false} />
            })}
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.API_HOST}/articles`)
    const articles = await res.json()

    return {
        props: {
            articles
        }
    }
}

export default Articles