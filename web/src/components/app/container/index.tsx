import { Sidebar } from "../sidebar"
import styles from "./style.module.scss"

export function Container({ children }) {
    return(
        <div className={styles.childrenContainer}>
            <div>
                <Sidebar />
            </div>
            <div className={styles.children}>
                {children}
            </div>
        </div>
    )
}