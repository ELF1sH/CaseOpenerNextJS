import styles from '../../styles/CaseItem.module.scss'
import PropTypes from "prop-types";
import Image from "next/image";

const rarityValues = ['covert', 'classified', 'restricted', 'milSpec', 'exceedinglyRare']

const CaseItem = ({ rarity, className = null, img = null, weaponName = null }) => {

    let weaponType = null
    let skinType = null
    if (weaponName !== null) {
        weaponType = weaponName.substring(0, weaponName.indexOf('|') - 1)
        skinType = weaponName.substring(weaponName.indexOf('|') + 1, weaponName.length)
    }

    return (
        <div className={`${styles.container} ${className !== null ? className : null}`}>
            <div className={styles.imgWrapper}>
                {
                    img !== null ? <Image src={img} layout={'fill'} /> : null
                }
            </div>
            <div className={`${styles.bg} ${styles[rarity]}`}>
                <p>{weaponType}</p>
                <p>{skinType}</p>
            </div>
        </div>
    )
}

CaseItem.propTypes = {
    rarity: PropTypes.oneOf(rarityValues).isRequired
}

export default CaseItem