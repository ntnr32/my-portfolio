import { useRouter } from 'next/router'
import React from 'react'

const Snippet = () => {

    const { query } = useRouter();
    return (
        <>
            <div className='grid place-content-center h-screen'>Snippet - {query.id}</div>
        </>
    )
}

export default Snippet

// Snippet.displayName = 'Snippet'