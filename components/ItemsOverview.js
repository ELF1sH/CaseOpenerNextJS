import CaseItem from "./CaseOpeningComponents/CaseItem";
import Image from "next/image";
import styles from '../styles/Case.module.scss'
import rareItemImage from '../public/cases/CommonItems/rare_item.png'

import { getImages } from "../data";

const ItemsOverview = ({ caseInfo }) => {

    const caseItemsImages = getImages(caseInfo.id)

    return (
        <div className={styles.itemsOverview}>
            {
                caseInfo.items.map(item => <CaseItem
                    rarity={item.rarity}
                    key={item.id}
                    img={caseItemsImages[item.id - 1]}
                    weaponName={item.name}
                />)
            }
            <CaseItem
                rarity={'exceedinglyRare'}
                img={ rareItemImage }
                weaponName={'★ Rare Special Items ★'}
            />
        </div>
    )
}

export default ItemsOverview