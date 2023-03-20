import Head from 'next/head';
import { useRouter } from 'next/router'
import React from 'react'

const Snippet = () => {

    const { query } = useRouter();

    const title = `Snippet - ${query.snippetId}`;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className='grid place-content-center h-screen'>{title}</div>
        </>
    )
}

export default Snippet

// Snippet.displayName = 'Snippet'