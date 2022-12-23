import React, { useEffect } from 'react'
import { NavBar } from 'components'
import { useDarkMode } from 'common/hooks/useDarkMode';

interface ILayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {

    const [darkMode, setDarkMode] = useDarkMode();

    useEffect(() => {
        setDarkMode(true);
        console.log('index loaded')
    }, [])

    return (
        <main className='font-KnewaveRegular select-none bg-dots h-screen snap-y snap-mandatory overflow-y-scroll'>
            <NavBar />
            {children}
        </main>
    )
}

export default Layout