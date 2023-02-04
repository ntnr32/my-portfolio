import React from 'react'
import style from './snake-button.module.css';

interface SnakeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    children?: React.ReactNode
    onClick?: () => void
    leadIcon?: React.ReactNode
    tailIcon?: React.ReactNode
    variant?: "regular" | "outline"
}

const SnakeButton: React.FC<SnakeButtonProps> = ({ className }) => {
    return (
        <button className={`${style.button} p-4 ${className}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Button
        </button>
    )
}

export default SnakeButton