import { useRouter } from "next/router";
import {useState} from "react";
import CaseItem from "../../../components/CaseOpeningComponents/CaseItem";
import Tape from "../../../components/CaseOpeningComponents/Tape";
import Button from "../../../components/Button";
import styles from '../../../styles/Case.module.scss'
import ItemsOverview from "../../../components/ItemsOverview";

const Case = (props) => {
    const router = useRouter()
    const { id } = router.query

    const [isStarted, setIsStarted] = useState(false)

    return (
        <div className={styles.container}>
            <h2 className={styles.caseHeader}>{props.caseInfo.name}</h2>
            <div className={styles.window}>
                <Tape className={isStarted ? styles.tapeAnimation : null} caseInfo={props.caseInfo} />
            </div>
            <Button
                value={"Open Case"}
                size={'big'}
                style={{ margin: '30px 0' }}
                onClick={() => {
                    setIsStarted(true)
                }}
            />
            <ItemsOverview caseInfo={props.caseInfo} />
        </div>
    )
}

// this function executes on every request unlike `getStaticProps` which executes only once at build time of the project
export const getServerSideProps = async (context) => {
    const res = await fetch(`${process.env.API_HOST}/cases/${context.params.id}`)
    const caseInfo = await res.json()

    return {
        props: {
            caseInfo
        }
    }
}

export default Case