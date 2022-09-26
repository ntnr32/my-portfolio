import React from 'react'

interface LogoProps {
    text: string
    path: string
    className?: string
}

const Logo: React.FC<LogoProps> = ({ text, path, className }) => {
    return (
        <a className={`${className}`} href={path}>
            <h1>{text}</h1>
        </a>
    )
}

export default Logo