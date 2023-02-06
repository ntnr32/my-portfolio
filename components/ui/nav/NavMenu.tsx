import React from 'react'
import { motion } from 'framer-motion'
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
        path: '/#welcome',
        transitionDelay: 0.8,
        exitDelay: 1
    }, {
        name: 'Introduction',
        id: 'introduction',
        path: '/#introduction',
        transitionDelay: 0.7,
        exitDelay: 0.8
    }, {
        name: 'About',
        id: 'about',
        path: '/#about',
        transitionDelay: 0.6,
        exitDelay: 0.6
    }, {
        name: 'Work',
        id: 'work',
        path: '/#work',
        transitionDelay: 0.5,
        exitDelay: 0.4
    }, {
        name: 'Tech Stack',
        id: 'tech-stack',
        path: '/tech-stack',
        transitionDelay: 0.4,
        exitDelay: 0.2
    },
];

const variants = {
    exit: {
        opacity: 0,
        height: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.3,
            delay: 1.2
        }
    }
}

const NavMenu: React.FC<NavMenuProps> = ({ open, setOpen }) => {

    const router = useRouter();

    return (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            variants={variants}
            transition={{ duration: 0.5 }}
            exit="exit"
            className={`z-0 fixed w-30 h-30 bg-black sm:pr-5 h-screen w-screen`}>
            <div className='grid justify-end h-20 md:my-4 md:px-10 min-w-full'>
                <Button className='my-auto mx-5 sm:mx-0' onClick={() => setOpen(!open)} leadIcon={<GrClose />} >
                    Close
                </Button>
            </div>
            <ul className="grid gap-6">
                {
                    menuItems.map(({ name, id, path, exitDelay, transitionDelay }) => {
                        return (
                            <motion.li
                                key={id}
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: transitionDelay }}
                                exit={{
                                    opacity: 0,
                                    y: 40,
                                    transition: {
                                        ease: "easeInOut",
                                        delay: exitDelay
                                    }
                                }}

                                className="transition-all text-4xl hover:border-b-2 border-gray-200 p-2 m-auto text-gray-400 hover:text-white">
                                <button
                                    onClick={() => {
                                        setOpen(!open);
                                        router.push(path);
                                    }}
                                    className="">
                                    {name}
                                </button>
                            </motion.li>
                        )
                    })
                }
            </ul>
        </motion.div>
    )
}

export default NavMenu