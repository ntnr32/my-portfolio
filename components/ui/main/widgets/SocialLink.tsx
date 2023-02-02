import React from 'react'
import { FiGithub, FiCodepen, FiInstagram, FiLinkedin } from 'react-icons/fi';

const data = [
    {
        id: 1,
        name: 'GitHub',
        icon: <FiGithub />,
        link: 'https://www.github.com/ntnr32',
    },
    {
        id: 2,
        name: 'Linkedin',
        icon: <FiLinkedin />,
        link: 'https://www.linkedin.com/in/nitin-res/',
    },
    {
        id: 3,
        name: 'CodePen',
        icon: <FiCodepen />,
        link: 'https://codepen.io/ntnr34',
    },
    {
        id: 4,
        name: 'Instagram',
        icon: <FiInstagram />,
        link: 'https://www.instagram.com/ntnr34/',
    },

]

const SocialLink = () => {
    return (
        <ul className='hidden md:grid gap-4 px-10 text-gray-400 bottom-0 left-0 fixed text-2xl after:h-20 after:bg-gray-400 after:w-[1px] after:mx-auto'>
            {data.map(item => (
                <li key={item.id} className="">
                    <a href={item.link} target="_blank" rel="noreferrer">{item.icon}</a>
                </li>
            ))}
        </ul>
    )
}

export default SocialLink