import React, { useState } from 'react'

interface InputProps {
    id: string;

    label: string;

    type?: string;

    value?: string;

    autoComplete?: string | undefined

    //onChange: React.Dispatch<React.SetStateAction<Identity>>;
}

const Input: React.FC<InputProps> = ({
    id, label, type, value, autoComplete
}) => {
    const [controlValue, setControlValue] = useState<any>();

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-primary">
                {label}
            </label>
            <div className="flex">
                <input
                    type={type}
                    name={id}
                    id={id}
                    autoComplete={autoComplete}
                    value={controlValue || ""}
                    onChange={(e) => setControlValue(e.target.value)}
                    className={`
                    form-input mt-1 
                    bg-secondary 
                    text-primary
                    focus:ring-indigo-500 focus:border-indigo-500 focus:ring-inset 
                    block w-full 
                    shadow-sm 
                    sm:text-sm 
                    border-gray-300 
                    rounded-md`}
                />
            </div>
        </div>
    )
}

export default Input