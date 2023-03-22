import Head from 'next/head';
import { useRouter } from 'next/router'
import { useGist } from 'hooks/api/useGist';
import { Heading } from 'components';

const Snippet = () => {
    const { query } = useRouter();

    //TODO: fix this - validate the snippet id
    const snippetId = query.snippetId ? query.snippetId : '';
    const { gist, isError, isLoading } = useGist(snippetId.toString());
    const title = `Snippet - ${gist?.fileName}`;
    console.log(gist)

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className='grid place-content-center h-screen'>
                <Heading className='font-bold'>
                    {title}
                </Heading>
                {isLoading && <div>Loading....</div>}
                {gist && <pre>{gist.files[gist.fileName].content}</pre>}
            </div>
        </>
    )
}

export default Snippet

// Snippet.displayName = 'Snippet'