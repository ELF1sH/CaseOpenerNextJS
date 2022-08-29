import styles from '../styles/Post.module.scss'
import PropTypes from 'prop-types'
import Link from "next/link";

const Post = (props) => {
    const keyword = props.isPost ? 'post' : 'article'

    return (
        <Link href={`/${keyword}/[id]`} as={`/${keyword}/${props.id}`}>
            <div className={styles.postContainer}>
                <h3>{props.title}</h3>
                <p>{props.body}</p>
            </div>
        </Link>
    )
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPost: PropTypes.bool.isRequired
}

export default Post