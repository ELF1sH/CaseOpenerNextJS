import styles from '../../styles/Nav.module.scss'
import Link from "next/link";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <Link href="/">
                <div className={styles.logoContainer}>
                    <span className={styles.logo}>LOGO</span>
                </div>
            </Link>
            <ul className={styles.linksContainer}>
                <Link className={styles.link} href='/'>
                    <li className={styles.link}>Main Page</li>
                </Link>
                <Link className={styles.link} href='/posts'>
                    <li className={styles.link}>Posts</li>
                </Link>
                <Link className={styles.link} href='/articles'>
                    <li className={styles.link}>Articles</li>
                </Link>
                <Link className={styles.link} href='/cases'>
                    <li className={styles.link}>Cases</li>
                </Link>
                <Link className={styles.link} href='/about'>
                    <li className={styles.link}>About</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav