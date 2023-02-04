import React from 'react'
import BoyColor from 'static/svg/boy-color.svg'
import BoyPremium from 'static/svg/boy-premium.svg'

const About = () => {
    return (
        <div className='grid gap-y-10 m-auto xl:p-28'>
            <h1 className='font-bold text-center text-4xl'>About Me</h1>
            <div className='grid grid-cols-2 gap-4'>
                <div className='hidden sm:grid content-center xl:px-28'>
                    <BoyColor />
                </div>
                <div className='grid content-center col-span-2 sm:col-span-1 gap-4'>
                    <p>Hello!, I&apos;m Nitin Res. I build things for the web.</p>
                    <p>I&apos;m a Software Engineer specializing in building (and occasionally designing) exceptional digital experience. </p>
                    <p>Web is an amazing place and I enjoy creating things live on it.</p>
                    <p>Currently my main focus is to build great inclusive & accessible applications on the internet.</p>
                </div>
            </div>
        </div>
    )
}

export default About