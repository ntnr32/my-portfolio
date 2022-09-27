import React, { useEffect, useState } from 'react'

interface ButtonProps {
    className?: string
    children?: React.ReactNode
    onClick?: () => void
    leadIcon?: React.ReactNode
    tailIcon?: React.ReactNode
    variant?: "regular" | "outline"
}

const Button: React.FC<ButtonProps> = ({ className, children, onClick, leadIcon, tailIcon, variant = "regular" }) => {

    const [style, setStyle] = useState('');

    useEffect(() => {
        const buttonStyle = variant === "outline" ? "border border-primary bg-primary text-primary" : "bg-invert text-invert";
        setStyle(buttonStyle);
    }, [variant])

    return (
        <button className={`flex gap-4 px-4 py-2 place-items-center ${style} ${className}`}>
            {leadIcon && <span className='block sm:hidden'>{leadIcon}</span>}
            <span className='hidden sm:block'>{children}</span>
            {tailIcon && <span className='block sm:hidden'>{tailIcon}</span>}
        </button>
    )
}

export default Button