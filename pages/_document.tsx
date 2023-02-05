import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head />
            <body className='bg-primary text-primary'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}