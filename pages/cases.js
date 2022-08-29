import styles from '../styles/CasesPage.module.scss'

import FractureCase from '../public/cases/FractureCase.png'
import ClutchCase from '../public/cases/ClutchCase.png'

import CasesGrid from "../components/CasesGrid";

const Cases = (props) => {
    return (
        <CasesGrid cases={props.cases} images={[FractureCase, ClutchCase]} />
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.API_HOST}/cases`)
    const cases = await res.json()

    return {
        props: {
            cases
        }
    }
}

export default Cases