import styles from "./style.module.scss"

import Link from 'next/link'

export function Menu() {
    return (
        <div className={styles.navBar}>
            <div>
                <Link href="/">
                    <a>
                        <img src="/logo.png" className={styles.logo} alt="" />
                    </a>
                </Link>
                <nav className={styles.navMenu}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/">
                        <a>Sobre</a>
                    </Link>
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
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/">
                        <a>Sobre</a>
                    </Link>
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