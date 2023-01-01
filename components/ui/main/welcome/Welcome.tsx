import React from 'react'
import Word from './Word'
import style from './welcome.module.css'

const Welcome = () => {

    return (
        <div className={`grid`}>
            <h1 className={`font-KnewaveOutlineRegular text-center text-[12vw] sm:text-[8vw] cursor-pointer`}>
                <Word className={`mr-[2vw] inline-block sm:inline ${style.word}`}>Web</Word>
                <Word className={`mr-[2vw] inline-block sm:inline ${style.word}`}>is</Word>
                <Word className={`mr-[2vw] ${style.word}`}>an</Word>
                <Word className={`mr-[2vw] ${style.word}`}>amazing</Word>
                <Word className={`block sm:inline ${style.word} ${style['word-color']}`}>place.</Word>
            </h1>
            <h2 className={`font-KnewaveRegular text-[2vw] text-center`}>
                All Creative people want to do the unexpected
            </h2>
        </div>
    )
}

export default Welcome