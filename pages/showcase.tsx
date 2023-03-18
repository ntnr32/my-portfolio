import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heading } from 'components'

const Showcase = () => {
    return (
        <div className='grid place-content-center h-screen'>
            <Heading className='text-4xl font-bold'>
                Show case
            </Heading>
        </div>
    )
}

export default Showcase