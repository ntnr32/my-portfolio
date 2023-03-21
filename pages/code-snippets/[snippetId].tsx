import React from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router'
import { useGist } from 'hooks/api/useGist';
import * as CONSTANTS from 'common/utils/constant'

const Snippet = () => {
    const { query } = useRouter();

    //TODO: fix this - validate the snippet id
    const snippetId = query.snippetId ? query.snippetId : '';
    const title = `Snippet - ${snippetId}`;

    const { gist, isError, isLoading } = useGist(snippetId?.toString());

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className='grid place-content-center h-screen'>
                {title}
                {isLoading && <div>Loading....</div>}
                {isError && <div>Error</div>}
                {gist && JSON.stringify(gist, null, 2)}
            </div>
        </>
    )
}

export default Snippet

// Snippet.displayName = 'Snippet'