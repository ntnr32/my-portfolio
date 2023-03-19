import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';

interface CardProps {
    id: string;
    imageUrl: string;
    title: string;
    body: string;
    footer: string;
}

const Card: React.FC<CardProps> = ({ id, imageUrl, title, body, footer }) => {
    return (
        <Link href={id}>
            <motion.div
                className='cursor-pointer'
                initial={{ opacity: 0, y: 300 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    type: 'spring',
                    bounce: 0.4,
                    duration: 0.8,
                }}
                viewport={{ once: true }}
            >
                <div className='card max-w-sm mx-auto rounded-lg mt-5 border border-zinc-700 bg-gradient-to-r from-slate-900 to-zinc-900 hover:shadow-xl hover:shadow-violet-800 hover:border-violet-800'>
                    <div
                        className='card-header h-56 mx-4 -translate-y-6'>
                        <Image src={imageUrl}
                            objectFit="fill"
                            layout="fill"
                            className='rounded-md overflow-hidden'
                            alt="Card Header"
                            loading='lazy'
                        />
                    </div>
                    <article className='card-body p-6 -mt-6'>
                        <h2 className='text-lg mb-2'>{title}</h2>
                        <p className='text-xs'>{body}</p>
                    </article>
                    <div className='card-footer grid justify-between text-xs p-6 -mt-6'>
                        <span>{footer}</span>
                        <span></span>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

export default Card