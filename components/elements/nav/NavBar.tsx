import React from 'react'
import NavMenu from './NavMenu'

const NavBar = () => {
    return (
        <nav className="top-0 left-0 fixed" id="navBar">
            <input type="checkbox" id="chkToggleMenu" className="hidden" />
            <section className="nav-menu z-10 fixed top-0 left-0 h-full w-full bg-black bg-opacity-80" id="overlay">
                <label className="grid p-7 z-0 cursor-pointer" title="menu" htmlFor="chkToggleMenu" id="lblMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>
                </label>
                <NavMenu />
            </section>
        </nav>
    )
}

export default NavBar