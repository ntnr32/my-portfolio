import React from 'react'
import { Button, NavButton } from 'components/controls'
import * as CONSTANT from 'utils/constant'
import { Logo } from '..'
import { VscComment, VscMenu } from 'react-icons/vsc'

const NavBar = () => {
    return (
        <nav className="top-0 left-0 fixed h-20 flex justify-between my-4 px-10 min-w-full">
            <Logo path='/' text={CONSTANT.NITIN} className='p-4 text-lg my-auto' />
            <div className='flex p-4 gap-4'>
                <Button className='uppercase' variant='regular' leadIcon={<VscMenu />} >Menu</Button>
                <NavButton className='uppercase' variant='outline' tailIcon={<VscComment />} >Get in touch</NavButton>
            </div>
        </nav >
    )
}

export default NavBar