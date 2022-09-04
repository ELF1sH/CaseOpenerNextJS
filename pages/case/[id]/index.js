import { useRouter } from "next/router";
import {useState} from "react";
import CaseItem from "../../../components/CaseOpeningComponents/CaseItem";
import Tape from "../../../components/CaseOpeningComponents/Tape";
import Button from "../../../components/Button";
import styles from '../../../styles/Case.module.scss'
import ItemsOverview from "../../../components/ItemsOverview";
import DroppedItem from "../../../components/CaseOpeningComponents/DroppedItem";
import Link from "next/link";

const Case = (props) => {
    const router = useRouter()
    const { id } = router.query

    const [isStarted, setIsStarted] = useState(false)
    const [isFinished, setIsFinished] = useState(false)

    const [droppedItem, setDroppedItem] = useState(null)

    console.log(droppedItem);

    const openCaseOnClick = () => {
        setIsStarted(true)
        const timerId = setTimeout(() => {
            setIsFinished(true)
        }, 11000)
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.caseHeader}>{props.caseInfo.name}</h2>
            { !isFinished ?
                    <>
                        <div className={styles.window}>
                            <Tape
                                className={isStarted ? styles.tapeAnimation : null}
                                caseInfo={props.caseInfo}
                                isFinished={isFinished}
                                setDroppedItem={setDroppedItem}
                            />
                        </div>
                        <Button
                            value={"Open Case"}
                            size={'big'}
                            style={ { margin: '30px 0' } }
                            onClick={ openCaseOnClick }
                        />
                        <ItemsOverview caseInfo={props.caseInfo} />
                    </>
                :
                    <>
                        <DroppedItem droppedItem={droppedItem} />
                        <div className={styles.linksContainer}>
                            <a
                                className={styles.droppedItemLink}
                                onClick={() => { setIsFinished(false); setIsStarted(false) }}
                            >
                                Open Again
                            </a>
                            <Link href={'/cases'}>
                                <a className={styles.droppedItemLink}>To Case List</a>
                            </Link>
                        </div>
                    </>
            }
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