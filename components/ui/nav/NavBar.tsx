import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import * as CONSTANT from 'utils/constant'
import { Logo } from '..'
import { Button } from 'components/controls'
import { VscMenu } from 'react-icons/vsc'
import NavMenu from './NavMenu'

const sayHello = () => {
    window.location.href = `mailto:${CONSTANT.EMAIL_ADDRESS}`
}

const NavBar = () => {

    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(!open);

    return (
        <header className='top-0 left-0 fixed h-20 min-w-full z-50 bg-primary'>
            <div className='flex justify-between md:my-4 md:px-10'>
                <Logo
                    path='/'
                    text={CONSTANT.TITLE_NAME}
                    className='p-4 text-lg my-auto'
                />
                <Button
                    className={`uppercase my-auto mx-5`}
                    variant='regular'
                    leadIcon={<VscMenu />}
                    onClick={handleOpen}
                >
                    Menu
                </Button>
            </div>
            <AnimatePresence>
                {open && <NavMenu open={open} setOpen={setOpen} />}
            </AnimatePresence>
        </header >
    )
}

export default NavBar