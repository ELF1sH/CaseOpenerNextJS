import CaseItem from "./CaseOpeningComponents/CaseItem";
import Image from "next/image";
import styles from '../styles/Case.module.scss'
import rareItemImage from '../public/cases/CommonItems/rare_item.png'

import clutchCaseItems from '../public/cases/ClutchCaseItems/ClutchCaseItems'

const ItemsOverview = ({ caseInfo }) => {

    let caseItemsImages = null
    if (caseInfo.id === 2) caseItemsImages = clutchCaseItems

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