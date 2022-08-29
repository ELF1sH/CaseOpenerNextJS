import { getRandomFloat, probabilities } from "../../data";
import CaseItem from "./CaseItem";
import { useState } from "react";
import styles from '../../styles/Case.module.scss'

const summarizedProbabilities = new Array(Object.values(probabilities).length).fill(0)
const values = Object.values(probabilities)
for (let i = 0; i < values.length; i++) {
    for (let j = i; j < values.length; j++) {
        summarizedProbabilities[j] += values[i]
    }
}

const keys = Object.keys(probabilities)
for (let i = 0; i < keys.length; i++) {
    probabilities[keys[i]] = summarizedProbabilities[i]
}

const getRandomType = () => {
    const randomFloat = getRandomFloat(0, 100)
    for (const rarity in probabilities) {
        if (randomFloat <= probabilities[rarity]) {
            return rarity
        }
    }
    return 'milSpec'
}

const Tape = (props) => {

    const [rarities, setRarities] = useState([...Array(1000)].map(_ => getRandomType()))

    return (
        <div
            className={`${styles.tape} ${props.className}`}
            style={{ left: `${-getRandomFloat(0, 140)}px` }}
        >
            { rarities.map((r, idx) => <CaseItem rarity={r} key={idx} />) }
        </div>
    )
}

export default Tape