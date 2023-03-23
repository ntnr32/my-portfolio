import Head from 'next/head';
import { useRouter } from 'next/router'
import { useGist } from 'hooks/api/useGist';
import { Heading } from 'components';
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

const Snippet = () => {
    const { query } = useRouter();

    //TODO: fix this - validate the snippet id
    const snippetId = query.snippetId ? query.snippetId : '';
    const { gist, isError, isLoading } = useGist(snippetId.toString());
    const title = `Snippet - ${gist?.fileName}`;
    let content;
    if (gist) {
        content = gist.files[gist.fileName].content;
    }

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className='grid place-content-center m-20 gap-5'>
                <Heading className='font-bold'>
                    {gist?.description}
                </Heading>
                {isLoading && <div>Loading....</div>}
                <div className='h-full'>
                    {
                        content && <Editor
                            height="80vh"
                            width="80vw"
                            options={{
                                readOnly: true,
                                minimap: {
                                    enabled: false
                                },
                                wordWrap: 'on',
                                hideCursorInOverviewRuler: true,
                                scrollBeyondLastLine: false
                            }}
                            theme="vs-dark"
                            defaultLanguage="typescript"
                            defaultValue={content}
                        />
                    }
                </div>
            </div>
        </>
    )
}

export default Snippet

// Snippet.displayName = 'Snippet'