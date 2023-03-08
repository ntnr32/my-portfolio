import React from 'react'
import Image from 'next/image'
import { Heading } from 'components/controls'

const TechStack = () => {
    return (
        <div className='mx-14 grid gap-4 place-content-center h-screen'>
            <Heading className='text-4xl text-center'>
                Tech Stack
            </Heading>
            <h2 className='text-center'>My go-to stack of apps for designing, coding, managing
                and everything in between...
            </h2>
            <div className='grid'>
                <div>Switch Grid vs List</div>
                <section>
                    <h2>Tools</h2>
                    <div className='grid'>
                        <Image src="" alt='' />
                    </div>
                </section>
                <section>
                    <h2>Tech Stack</h2>
                    <div></div>
                </section>
            </div>
        </div>
    )
}

export default TechStack