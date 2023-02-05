import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom';

const menuItems = [
    {
        name: 'Home',
        id: 'home',
        path: '/'
    }, {
        name: 'Tech Stack',
        id: 'tech-stack',
        path: '/tech-stack'
    },
];

const NavMenuV1 = () => {
    const ref = useRef<Element | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        ref.current = document.getElementById('navMenu');
        setMounted(true);
    }, [])

    return (mounted && ref.current) ?
        createPortal(
            <>
                <div className='fixed inset-y-0 w-full h-full bg-primary opacity-50'></div>
                <div className='fixed top-0 right-0 z-0 inset-y-0 pt-20 m-auto w-full h-full overflow-x-hidden'>
                    <ul className="text-center grid gap-2">
                        {
                            menuItems.map(({ name, id, path }) => {
                                return (
                                    <li key={id} className="transition-all hover:border-b-2 border-gray-200 p-2 m-auto text-gray-400 hover:text-white">
                                        <Link href={path} className="no-underline">{name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </>
            , ref.current!)
        : null;
}

export default NavMenuV1