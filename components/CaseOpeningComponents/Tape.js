import { getRandomFloat, probabilities, getRandomInt } from "../../data";
import CaseItem from "./CaseItem";
import {useEffect, useState} from "react";
import styles from '../../styles/Case.module.scss'
import {getImages} from "../../data";

import rareItemImage from '../../public/cases/CommonItems/rare_item.png'

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

const getRandomSkinId = (rarity, quantities, caseId) => {
    const quantity = quantities[rarity]   // quantity of particular rarity in particular case
    const randomNumber = getRandomInt(0, quantity - 1)
    let skinNumber = 0
    switch (rarity) {
        case 'milSpec':
            skinNumber = randomNumber + 1
            break;
        case 'restricted':
            skinNumber = randomNumber + quantities['milSpec'] + 1
            break;
        case 'classified':
            skinNumber = randomNumber + quantities['milSpec'] + quantities['restricted'] + 1
            break;
        case 'covert':
            skinNumber = randomNumber + quantities['milSpec'] + quantities['restricted'] + quantities['classified'] + 1
            break;
        default:
            skinNumber = 0
    }
    return skinNumber
}

const getRandomTape = (length, caseInfo) => {
    const rarities = [...Array(length)].map(_ => getRandomType())

    let tape = rarities.map(function(r) {
        return {
            rarity: r,
            skinId: getRandomSkinId(r, caseInfo.quantities, caseInfo.id),
        }
    })
    const images = getImages(caseInfo.id)
    tape = tape.map(function(t) {
        return {
            rarity: t.rarity,
            skinId: t.skinId,
            weaponName: t.skinId > 0 ? caseInfo.items.find(x => t.skinId === x.id).name : "★ Rare Special Items ★",
            img: t.skinId > 0 ? images[t.skinId - 1] : rareItemImage
        }
    })

    const dropItemNumber = Math.ceil(14000 / 146) + 1;      // tape length / one item length + 1

    return { dropItemNumber, tape }
}

const Tape = ({ caseInfo, className, isFinished, setDroppedItem }) => {

    const [state, setState] = useState(getRandomTape(100, caseInfo))

    useEffect(() => {
        // the function is invoked before changing values of dependencies
        if (!isFinished) {
            setDroppedItem(state.tape[state.dropItemNumber])
        }
    }, [isFinished]);


    return (
        <div className={`${styles.tape} ${className}`}>
            { state.tape.map((item, idx) => <CaseItem
                rarity={ item.rarity }
                key={ idx }
                className={ styles.tapeItem }
                weaponName={ item.weaponName }
                img={ item.img } />
            ) }
        </div>
    )
}

export default Tape