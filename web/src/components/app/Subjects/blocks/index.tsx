import { useContext } from "react"
import { ModalContext } from "../../../../contexts/ModalContext"

import styles from "./style.module.scss"

export function Blocks() {
    const { showModal } = useContext(ModalContext);
    
    return(
        <div className={styles.blockContainer}>
            <div>
                <span>
                    Matématica
                </span>
                <div className={styles.matters}>
                    assuntos: 10
                </div>
            </div>
            <button onClick={showModal}><i className={"far fa-hand-point-up"} /></button>
            <button><i className={"far fa-trash-alt"} /></button>
        </div>
    )
}