import CasesGridItem from "./CasesGridItem";
import styles from '../styles/CasesGrid.module.scss'

const CasesGrid = ({ cases, images }) => {
    return (
        <div className={styles.grid}>
            { cases.map((c, idx) => <CasesGridItem id={c.id} name={c.name} image={images[idx]} key={c.id} />) }
        </div>
    )
}

export default CasesGrid