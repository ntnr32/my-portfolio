import React from 'react'
import Word from './Word'
import style from './welcome.module.css'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const Welcome = () => {

    return (
        <div className={`grid overflow-hidden`}>
            <h1
                className={`text-center text-[12vw] sm:text-[5vw] cursor-pointer`}>
                <Word className={`mr-[2vw] inline-block sm:inline ${style.word}`}>Web</Word>
                <Word className={`mr-[2vw] inline-block sm:inline ${style.word}`}>is</Word>
                <Word className={`mr-[2vw] ${style.word}`}>an</Word>
                <Word className={`mr-[2vw] ${style.word} ${style["word-clip"]}`}>amazing</Word>
                <Word className={`block sm:inline ${style.word} ${style['word-color']}`}>place.</Word>
            </h1>
            <h2 className={`font-MajorMonoDisplay text-[1vw] text-center`}>
                Crafting digital experiences,{' '}
                <Typewriter
                    words={['one line of code at a time.']}
                    loop={true}
                    cursor
                    cursorStyle='_'
                />
            </h2>
        </div>
    )
}

export default Welcome