import React, { useEffect, useMemo, useState } from 'react'

interface ButtonProps {
    className?: string
    children?: React.ReactNode
    onClick?: () => void
    leadIcon?: React.ReactNode
    tailIcon?: React.ReactNode
    variant?: "regular" | "outline"
}

const getVariantClasses = (variant: "regular" | "outline") => {
    return variant === "outline" ? "border border-primary bg-primary text-primary" : "bg-invert text-invert";
}

const Button: React.FC<ButtonProps> = ({ className, children, onClick, leadIcon, tailIcon, variant = "regular" }) => {
    //TODO: Create a new button component which only shows icon without box 

    const style = useMemo(() => getVariantClasses(variant), [variant]);

    return (
        <button className={`flex gap-4 px-4 py-2 place-items-center ${style} ${className}`}
            onClick={onClick}
        >
            {leadIcon && <span className='block sm:hidden'>{leadIcon}</span>}
            <span className='hidden sm:block'>{children}</span>
            {tailIcon && <span className='block sm:hidden'>{tailIcon}</span>}
        </button>
    )
}

export default Button