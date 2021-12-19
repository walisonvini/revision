import styles from "./style.module.scss"

export function Checkbox({ checked, onChange, label }) {
    return (
        <div className={styles.checkbox}>
            <div className={styles.border} onClick={() => onChange(!checked)}>
                <div className={`${styles.indicator} ${checked ? styles.checked : ""}`} />
            </div>
            <div className={checked ? `${styles.label} ${styles.active}` : `${styles.label}`}>{label}</div>
        </div>
    )
}