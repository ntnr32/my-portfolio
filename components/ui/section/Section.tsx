import React from 'react'

export interface SectionProps {
    className?: string;
    children?: React.ReactNode
    id?: string
}

// Note: Removal of Implicit children
// * Reference : https://solverfox.dev/writing/no-implicit-children/

const Section: React.FC<SectionProps> = ({ id, className, children }) => {

    return (
        <section id={id} className={`h-screen grid place-items-center ${className}`}>
            {children}
        </section>
    )
}

export default Section