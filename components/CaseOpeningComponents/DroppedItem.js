import Image from "next/image";
import styles from '../../styles/Case.module.scss'

const DroppedItem = ({ droppedItem }) => {
    return (
        <div className={`${styles.droppedItem} ${styles[droppedItem.rarity]}`}>
            <h2>{ droppedItem.weaponName }</h2>
            <div className={styles.imageContainer}>
                <Image src={droppedItem.img} layout={'responsive'} />
            </div>
        </div>
    )
}

export default DroppedItem