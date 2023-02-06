import React from 'react'
import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { Button } from 'components/controls';
import { useRouter } from 'next/router';
interface NavMenuProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const menuItems = [
    {
        name: 'Welcome',
        id: 'welcome',
        path: '/#welcome'
    }, {
        name: 'Introduction',
        id: 'introduction',
        path: '/#introduction'
    }, {
        name: 'About',
        id: 'about',
        path: '/#about'
    }, {
        name: 'Work',
        id: 'work',
        path: '/#work'
    }, {
        name: 'Tech Stack',
        id: 'tech-stack',
        path: '/tech-stack'
    },
];

const NavMenu: React.FC<NavMenuProps> = ({ open, setOpen }) => {

    const router = useRouter();

    return (
        <>
            <div className={`z-0 fixed w-30 h-30 bg-black sm:pr-5 h-screen w-screen`}>
                <div className='grid justify-end h-20 md:my-4 md:px-10 min-w-full'>
                    <Button className='my-auto mx-5 sm:mx-0' onClick={() => setOpen(!open)} leadIcon={<GrClose />} >
                        Close
                    </Button>
                </div>
                <ul className="grid gap-2">
                    {
                        menuItems.map(({ name, id, path }) => {
                            return (
                                <li key={id} className="transition-all hover:border-b-2 border-gray-200 p-2 m-auto text-gray-400 hover:text-white">
                                    <button
                                        onClick={() => {
                                            setOpen(!open);
                                            router.push(path);
                                        }}
                                        className="">
                                        {name}
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default NavMenu