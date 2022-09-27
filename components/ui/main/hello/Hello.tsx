import React from 'react'
import style from './hello.module.css'

const hello = () => {
    return (
        <>
            <div className={`${style.hello} font-KnewaveOutlineRegular`}>
                <h1 className={`${style.one} text-6xl text-secondary opacity-50`}>hola</h1>
                <h1 className={`${style.two} text-4xl text-secondary opacity-50`}>bonjour</h1>
                <h1 className={`${style.three} text-5xl text-secondary opacity-50`}>konnichiwa</h1>
                <h1 className={`${style.four} uppercase text-9xl tracking-widest 2xl:text-[12rem]`}>Hello!</h1>
                <h1 className={`${style.five} text-3xl text-secondary opacity-50`}>Zdravstvuyte</h1>
                <h1 className={`${style.six} text-7xl text-secondary opacity-50`}>Nǐn hǎo</h1>
                <h1 className={`${style.seven} text-2xl text-secondary opacity-50`}>Salve</h1>
            </div>
        </>
    )
}

export default hello