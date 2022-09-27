import React from 'react'

interface WordProps {
    children?: React.ReactNode
    className?: string
    id?: string
    key?: string
}

const Word: React.FC<WordProps> = ({ children, className, ...props }) => {
    return (
        <span
            className={className}
            {...props}
        >
            {children}
        </span>
    )
}

export default Word