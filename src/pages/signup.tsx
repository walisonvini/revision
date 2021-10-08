import styles from "../styles/signin.module.scss";

import Link from 'next/link'

export default function Signup() {
    return(
        <div className={styles.containerSignin}>
            <div className={styles.wrapSignin}>
                <form className={styles.signinForm}>
                    <span>Bem Vindo</span>
                    <span><img src="/logo-img.png"/></span>
                    <div className={styles.wrapInput100}>
                        <input placeholder="Username" type="text" name="username" />
                    </div>
                    <div className={styles.wrapInput100}>
                        <input placeholder="Email" type="text" name="email" />
                    </div>
                    <div className={styles.wrapInput100}>
                        <span>
							<i className={"fas fa-eye"} />
						</span>
                        <input placeholder="Password" type="password" name="pass" />
                    </div>
                    <div className={styles.wrapInput100}>
                        <span>
							<i className={"fas fa-eye"} />
						</span>
                        <input placeholder="Confirm Password" type="confirm-password" name="confirm-pass" />
                    </div>
                    <button>
                        Entrar
                    </button>
                    <div className={styles.textCenter}>
                        <span>Já tem uma conta? </span>
                        <Link href="/signin">
                            <a>entrar</a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    ) 
}