import styles from "./style.module.scss"

import Link from 'next/link'

export function Menu() {
    return (
        <div className={styles.navBar}>
            <div>
                <a href="/">
                    <img src="./logo.png" className={styles.logo} />
                </a>
                <nav className={styles.navMenu}>
                    <a href="/">Home</a>
                    <a href="/">Sobre</a>
                    <Link href="/signin">
                        <a>Entrar</a>
                    </Link>
                    <Link href="/signup">
                        <a>Cadastrar</a>
                    </Link>
                    <div className={styles.dot}></div>
                </nav>
            </div>

            <details className={styles.detailsMenu}>
                <summary className={styles.summaryMenu}></summary>
                <nav className={styles.mobileMenu}>
                    <a href="/">Home</a>
                    <a href="/">Sobre</a>
                    <Link href="/signin">
                        <a>Entrar</a>
                    </Link>
                    <Link href="/signup">
                        <a>Cadastrar</a>
                    </Link>
                </nav>
            </details>
        </div>
    )
}