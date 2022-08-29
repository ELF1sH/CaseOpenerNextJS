import styles from '../../styles/CaseItem.module.scss'
import PropTypes from "prop-types";

const rarityValues = ['covert', 'classified', 'restricted', 'milSpec', 'exceedinglyRare']

const CaseItem = ({ rarity }) => {
    return (
        <div className={`${styles.container} ${styles[rarity]}`}>

        </div>
    )
}

CaseItem.propTypes = {
    rarity: PropTypes.oneOf(rarityValues).isRequired
}

export default CaseItem