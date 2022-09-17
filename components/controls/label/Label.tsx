import React from 'react'

export interface LabelProps {
    children?: React.ReactNode
}

const Label: React.FC<LabelProps> = ({ children }) => {
    return (
        <label>{children}</label>
    )
}

export default Label