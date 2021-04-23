import Email from '../components/shared/email';
//import {useState} from 'react';
import { useRouter } from 'next/router';
import { Magic } from 'magic-sdk';

/**
 * TODOS
 * - follow along this tutorial to integrate magic login: https://vercel.com/blog/simple-auth-with-magic-link-and-nextjs
 * - diagnose and resolve bugs as they come
 * - advocate to update account (or profile) data model to distinguish b/w admins
 *      - once that's built in, lock down the admin-dashboard to users who are both logged in and are auth'd admins
 */

export default function Signup() {
    const router = useRouter();

    const onClick = async (email) => {
        const DID = await new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY).auth.loginWithMagicLink({ email: email });
    
        const authResult = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${DID}`,
            'Content-Type': 'application/json' }
        });

        if (authResult.ok){
            router.push('/dashboard');
        }
        else {
            console.log('error', authResult);
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