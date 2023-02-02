import React from 'react'
import { Button, NavButton } from 'components/controls'
import * as CONSTANT from 'utils/constant'
import { Logo } from '..'
import { VscComment, VscMenu } from 'react-icons/vsc'

const sayHello = () => {
    console.log('test');

    window.location.href = `mailto:${CONSTANT.EMAIL_ADDRESS}`
}

const NavBar = () => {
    return (
        <nav className="top-0 left-0 fixed h-20 flex justify-between md:my-4 md:px-10 min-w-full">
            <Logo path='/' text={CONSTANT.TITLE_NAME} className='p-4 text-lg my-auto' />
            <div className='flex p-4 gap-4 font-poppins font-bold'>
                <Button className='uppercase' variant='regular' leadIcon={<VscMenu />} >Menu</Button>
                <NavButton
                    className='uppercase' variant='outline'
                    tailIcon={<VscComment />}
                    onClick={sayHello}
                >Say Hello</NavButton>
            </div>
        </nav >
    )
}

export default NavBar