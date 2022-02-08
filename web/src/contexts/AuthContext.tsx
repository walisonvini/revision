import { createContext, useEffect, useState } from "react"
import { getUser, signInRequest } from "../api/auth"
import { setCookie, parseCookies, destroyCookie } from "nookies"

import api from "../api/http"
import Router from 'next/router'

type User = {
    name: string;
    email: string;
}

type SignInData = {
    username: string;
    password: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: User;
    signIn: (data: SignInData) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
    const [user, setUser] = useState<User | null>(null)

    const isAuthenticated = !!user;

    useEffect(() => {
        const { "revision-token": token } = parseCookies()

        if (token) {
            getUser().then(response => {
                setUser(response.data)
            })
        }
    }, [])

    async function signIn({ username, password }: SignInData) {
        const { token, user } = await signInRequest({
            username,
            password
        })

        setCookie(undefined, "revision-token", token, {
            maxAge: 60 * 60 * 6 // 6 hour
        })

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        await setUser(user);

        Router.push("/")
    }

    async function logout() {
        await destroyCookie(null, 'revision-token')

        Router.push('/signin')
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, logout }}>
            {children}
        </AuthContext.Provider>
    )
}