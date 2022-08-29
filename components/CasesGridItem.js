import Image from "next/image";
import styles from '../styles/CasesGrid.module.scss'
import Link from "next/link";

const CasesGridItem = ({ id, name, image }) => {
    return (
        <Link href={'/case/[id]'} as={`/case/${id}`}>
            <div className={styles.caseCard}>
                <Image src={image} />
                <p>{name}</p>
            </div>
        </Link>
    )
}

export default CasesGridItem