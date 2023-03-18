import React from 'react'
import Image from 'next/image'

interface CardProps {
    imageUrl: string;
    title: string;
    body: string;
    footer: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, body, footer }) => {
    return (
        <div className=''>
            <div className='card max-w-sm mx-auto bg-gradient-to-r from-zinc-900 via-zinc-900 to-black rounded-lg mt-5 shadow-xl shadow-zinc-800'>
                <div className='h-56 card-header shadow-lg mx-4 -translate-y-6'>
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
        </div>
    )
}

export default Card