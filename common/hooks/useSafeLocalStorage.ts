import { useState } from 'react'

export function useSafeLocalStorage(key: string, initialValue: string) {
    const [valueProxy, setValueProxy] = useState(() => {
        try {
            if(!window) return initialValue
            const value = window.localStorage.getItem(key)
            return value ? JSON.parse(value) : initialValue
        } catch {
            return initialValue
        }
    })

    const setValue = (value: string) => {
        try {
            window.localStorage.setItem(key, value)
            setValueProxy(value)
        } catch {
            setValueProxy(value)
        }
    }

    return [valueProxy, setValue]
}