import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div className='font-poppins grid gap-10'>
            <h1 className='font-bold text-center text-4xl'>About Me</h1>
            <div className='grid grid-cols-2 gap-4'>
                <div className='hidden sm:grid content-center'>
                </div>
                <div className='grid content-center col-span-2 sm:col-span-1 gap-4'>
                    <p>Hi there!, I&apos;m Nitin Res. I build things for the web.</p>
                    <p>I&apos;m a Software Engineer specializing in building (and occasionally designing) exceptional digital experience. </p>
                    <p>Web is an amazing place and I enjoy creating things live on it.</p>
                </div>
            </div>
        </div>
    )
}

export default About