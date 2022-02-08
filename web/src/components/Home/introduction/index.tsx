import styles from "./style.module.scss"

export function Introdution(){
    return(
        <div className={styles.introContainer}>
            <div className={styles.introText}>
                <div className={styles.introTitle}>
                    <h2>Continue organizado</h2>
                    <h2>Melhore a qualidade dos seus estudos</h2>
                </div>
                <p>
                    Junte-se a nós nessa jornada. Organize seuas ideias,
                    organize sua vida e seus estudos.
                </p>
                <button>Comece agora, é grátis</button>
            </div>
            <img src="/image1.png/" alt="" />
        </div>
    )
}