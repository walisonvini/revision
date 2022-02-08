import styles from "../styles/pages/signin.module.scss"
import Link from 'next/link'
import noAuth from "../utils/noAuth";
import * as Yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Signin() {
    const schema = Yup.object().shape({
        username: Yup.string().required("Nome de usuário obrigatório"),
        password: Yup.string().required("Senha obrigatória")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const { signIn } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const showPass = () => setShowPassword(!showPassword);


    async function handleSignIn(data) {
        signIn(data).catch(function(){
            setErrorMessage("Usuário ou senha incorreto")  
        })
    }

    return (
        <div className={styles.containerSignin}>
            <div className={styles.wrapSignin}>
                <form onSubmit={handleSubmit(handleSignIn)} className={styles.signinForm}>
                    <span>Bem Vindo</span>
                    <span><img src="/logo-img.png" alt="" /></span>
                    { !!errorMessage ? <div className={styles.errorMessage}><p>{errorMessage}</p></div> : <span />}
                    <div className={errors.username ? `${styles.wrapInput100} ${styles.active}` : `${styles.wrapInput100}`}>
                        <input 
                            {...register("username")}
                            placeholder={errors.username ? `${errors.username?.message}` : "Username "} 
                            type="text"
                        />
                        
                    </div>
                    <div className={errors.password ? `${styles.wrapInput100} ${styles.active}` : `${styles.wrapInput100}`}>
                        <span>
                            <i onClick={showPass} className={showPassword ? "fas fa-eye" : "fas fa-eye-slash" } />
                        </span>
                        <input 
                            {...register("password")} 
                            placeholder={errors.password ? `${errors.password.message}` : "Password"}
                            type={showPassword ? "text" : "password" }
                        />
                    </div>
                    <button type="submit">
                        Entrar
                    </button>
                    <div className={styles.textCenter}>
                        <span>Não tem uma conta? </span>
                        <Link href="/signup">
                            <a>cadastre-se</a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default noAuth(Signin)