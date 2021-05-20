import Email from '../components/shared/email';
import useUser from '../hooks/useUser';
import Router from 'next/router';
import { Magic } from 'magic-sdk';

export default function Signup() {
    useUser({ redirectTo: '/dashboard', redirectIfFound: true });

    const onClick = async (email) => {
        const DID = await new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY).auth.loginWithMagicLink({ email: email });
        const authResult = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${DID}` }
        });
        if (authResult.ok){
            Router.push('/dashboard');
        }
        else {
            console.error(authResult.message || "Error logging in, please try again");
        }
    };

    return (
        <>
            <Email
                onClick={onClick}
                overline="Signup for Florish"
                title="Florish"
                buttonText="Signup" />
        </>
    )
};