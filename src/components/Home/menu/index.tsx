import styles from "./style.module.scss"

export function Menu(){
    return(
        <div className={styles.navBar}>
            <a href="/" className={styles.logo}>
                <img src="./logo.png"/>
            </a>
            <nav className={styles.navMenu}>
                <a href="/">Home</a>
                <a href="/">Sobre</a>
                <a href="/">Entrar</a>
                <a href="/">Cadastrar</a>
                <div className={styles.dot}></div>
            </nav>
            
            <details className={styles.detailsMenu}>
                <summary className={styles.summaryMenu}></summary>
                <nav className={styles.mobileMenu}>
                    <a href="/">Home</a>
                    <a href="/">Sobre</a>
                    <a href="/">Entrar</a>
                    <a href="/">Cadastrar</a>
                </nav>
            </details>
        </div>
    )
}