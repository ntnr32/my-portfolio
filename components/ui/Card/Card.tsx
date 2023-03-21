import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';
import axios from 'axios';
import { Comment } from 'common/models/comment';
import { HiExternalLink } from 'react-icons/hi'
import { ImSpinner10 } from 'react-icons/im';

interface CardProps {
    id: string;
    imageUrl: string;
    title: string;
    body: string;
    link: string;
    footer: string;
}

const fetchComments = async (gistId: string) => {
    console.log(`Fetching comments ${gistId}`)
    const url = `https://api.github.com/gists/${gistId}/comments`;
    const response = await axios.get(url);
    return response.data;
}

const Card: React.FC<CardProps> = ({ id, imageUrl, title, body, link, footer }) => {

    const [description, setDescription] = useState("")
    useEffect(() => {
        fetchComments(id)
            .then((data: Array<Comment>) => {
                if (data.length > 0) {
                    setDescription(data[0].body)
                }
            });
    }, [id])

    return (
        <Link href={`code-snippets/${id}`}>
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
                        {
                            description
                                ? <p className='text-xs'>{body}</p>
                                : <ImSpinner10 />
                        }
                    </article>
                    <div className='card-footer grid grid-flow-col justify-between text-xs p-4 border-t border-zinc-700'>
                        <span className='max-w-[1/2]'>{footer}</span>
                        <span className='max-w-[1/2]'>{
                            <Link href={link} target="_blank" passHref>
                                <HiExternalLink />
                            </Link>
                        }</span>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

export default Card