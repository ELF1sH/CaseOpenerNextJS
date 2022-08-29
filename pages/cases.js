import styles from '../styles/CasesPage.module.scss'
import Image from 'next/image'

import FractureCase from '../public/cases/FractureCase.png'

const Cases = (props) => {
    console.log(props)
    return (
        <div>
            cases
            <Image src={FractureCase} alt={"Fracture Case"} />
        </div>
    )
}

export const GetStaticProps = async () => {
    const res = await fetch(`${process.env.API_HOST}/cases`)
    const cases = res.json()

    return {
        props: {
            cases
        }
    }
}

export default Cases