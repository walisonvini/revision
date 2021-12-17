import styles from "./style.module.scss"

import { IoIosClose } from "react-icons/io"
import { useContext, useState } from "react"

import { ModalContext } from "../../../../contexts/ModalContext";

import { Checkbox } from "./checkbox";
import { MattersData, CheckboxData } from './NoteData';

export function Notebook() {
    const { modal, showModal } = useContext(ModalContext);
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <div className={modal ? `${styles.modal} ${styles.active}` : `${styles.modal}`}>
                { /* ------- Mobile Menu -----*/}
                <div className={styles.sla}>
                    <details className={styles.detailsMenu}>
                        <summary className={styles.summaryMenu}></summary>
                        <div className={styles.mattersMenu}>
                            {MattersData.map((item, index) => {
                                return (
                                    <div key={index} className={styles.mattersNameMenu}>
                                        {item.title}
                                        <i className={item.icon} />
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.checkboxContainerMenu}>
                            {CheckboxData.map((item, index) => {
                                return (
                                    <div key={index} className={styles.checkboxMenu}>
                                        <Checkbox
                                            checked={checked}
                                            onChange={(val) => setChecked(val)}
                                            label={item.title}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </details>
                </div>
                <div className={styles.notebook}>
                    <textarea />

                    <div className={styles.matters}>
                        {MattersData.map((item, index) => {
                            return (
                                <div key={index} className={styles.mattersName}>
                                    {item.title}
                                    <i className={item.icon} />
                                </div>
                            );
                        })}
                    </div>

                    <div>
                        <div className={styles.close}>
                            <a onClick={showModal} ><IoIosClose /></a>
                        </div>

                        <div className={styles.checkboxContainer}>
                            {CheckboxData.map((item, index) => {
                                return (
                                    <div key={index} className={styles.checkbox}>
                                        <Checkbox
                                            checked={checked}
                                            onChange={(val) => setChecked(val)}
                                            label={item.title}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}