import { useRouter } from "next/router";
import {useState} from "react";
import CaseItem from "../../../components/CaseOpeningComponents/CaseItem";
import Tape from "../../../components/CaseOpeningComponents/Tape";
import Button from "../../../components/Button";
import styles from '../../../styles/Case.module.scss'

const Case = (props) => {
    const router = useRouter()
    const { id } = router.query

    const [isStarted, setIsStarted] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.window}>
                <Tape className={isStarted ? styles.tapeAnimation : null} />
            </div>
            <Button
                value={"Open Case"}
                size={'big'}
                style={{ marginTop: "30px" }}
                onClick={() => {
                    setIsStarted(true)
                }}
            />
        </div>
    )
}

export default Case