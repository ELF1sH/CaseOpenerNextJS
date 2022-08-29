import styles from '../styles/Button.module.scss'

const Button = ({ value, style, size='small', onClick, className }) => {
    return (
        <button
            className={`${size === 'big' ? styles.buttonBig : styles.button} ${className}`}
            style={style !== null ? style : null}
            onClick={onClick !== null ? onClick : null}
        >
            { value }
        </button>
    )
}

export default Button