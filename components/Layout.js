import Nav from './LayoutComponents/Nav'
import Meta from "./Meta";
import Footer from "./LayoutComponents/Footer";
import styles from '../styles/Layout.module.scss'

const Layout = (props) => {
    return (
        <>
            <Meta />
            <div className={styles.container}>
                <Nav />
                <div>{ props.children }</div>
                <Footer />
            </div>
        </>
    )
}

export default Layout