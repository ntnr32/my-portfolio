import React, { useEffect, useState } from 'react'

interface NavButtonProps {
    text?: string
    className?: string
    children?: React.ReactNode
    onClick?: () => void
    leadIcon?: React.ReactNode
    tailIcon?: React.ReactNode
    variant?: "regular" | "outline"
}

const NavButton: React.FC<NavButtonProps> = ({ text, className, children, onClick, leadIcon, tailIcon, variant = "regular" }) => {

    const [style, setStyle] = useState('');

    useEffect(() => {
        console.log("rendering button...");

        const buttonStyle = variant === "outline" ? "border border-primary bg-primary text-primary" : "bg-invert text-invert";
        setStyle(buttonStyle);
    }, [variant])

    return (
        <button className={`flex gap-4 px-4 py-2 place-items-center ${style} ${className}`}>
            {leadIcon && <span>{leadIcon}</span>}
            <span className='hidden sm:block'>{text}</span>
            {tailIcon && <span>{tailIcon}</span>}
        </button>
    )
}

export default NavButton