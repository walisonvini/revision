import styles from "./style.module.scss"

export function Search() {
    return (
        <div className={styles.wrap}>
            <div className={styles.search}>
                <input type="text" className={styles.searchTerm} />
                <button type="submit" className={styles.searchButton}>
                <i className={"fa fa-search"}></i>
                </button>
            </div>
        </div>
    )
}