import React from 'react'

interface GridSectionProps {
    title: string;
    className?: string;
    children?: React.ReactNode;
}


const GridSection: React.FC<GridSectionProps> = ({ title, className, children }) => {
    return (
        <section className={`grid gap-4 place-content-center ${className}`}>
            <h2 className='text-gray-500 font-extrabold'>{title}</h2>
            <div className='grid grid-flow-row grid-cols-3 md:grid-cols-6 gap-2 w-fit'>
                {children}
            </div>
        </section>
    )
}

export default GridSection