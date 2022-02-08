import { useRouter } from "next/router";
import { ElementType, useEffect } from "react";
import { parseCookies } from 'nookies';

export default function withAuth(WrappedCompenent: ElementType) {
    const Wrapper = (props: unknown) => {
        const router = useRouter();

        useEffect(() => {
            const { "revision-token": token } = parseCookies();

            if(!token) {
                router.replace("/signin")
            }
        }, []);

        return <WrappedCompenent {...props} />
    }

    return Wrapper;
}