import React from 'react'
import Link from 'next/link'

interface LogoProps {
    text: string
    path: string
    className?: string
}

const Logo: React.FC<LogoProps> = ({ text, path, className }) => {
    return (
        <Link href={path}>
            <a className={`${className}`}>
                <h1>{text}</h1>
            </a>
        </Link>
    )
}

export default Logo