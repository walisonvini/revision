import { useRouter } from "next/router";
import { ElementType, useEffect } from "react";
import { parseCookies } from 'nookies';

export default function noAuth(WrappedCompenent: ElementType) {
    const Wrapper = (props: unknown) => {
        const router = useRouter();

        useEffect(() => {
            const { "revision-token": token } = parseCookies();

            if(token) {
                router.replace("/app/subjects")
            }
        }, []);

        return <WrappedCompenent {...props} />
    }

    return Wrapper;
}