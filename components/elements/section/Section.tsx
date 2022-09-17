import React from 'react'

export interface SectionProps {
    className?: string;
    children?: React.ReactNode
}

// Note: Removal of Implicit children
// * Reference : https://solverfox.dev/writing/no-implicit-children/

const Section: React.FC<SectionProps> = ({ className, children }) => {

    return (
        <section className={`min-h-screen grid-center ${className}`}>
            {children}
        </section>
    )
}

export default Section