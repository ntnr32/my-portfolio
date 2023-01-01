import React, { useEffect, useState } from 'react'
import { Arrow, NavBar } from 'components'
import { useDarkMode } from 'common/hooks/useDarkMode';

interface ILayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {

    const [isLastScreen, setIsLastScreen] = useState(() => false);
    const [darkMode, setDarkMode] = useDarkMode();

    const pageRef = React.useRef<HTMLDivElement>();

    const onScrollHandler = () => {
        const elementRef = pageRef.current;
        if (elementRef) {
            const { scrollTop, scrollHeight, clientHeight } = elementRef;
            if (Math.trunc(scrollTop + clientHeight) === scrollHeight && !isLastScreen) {
                setIsLastScreen(true);
            } else {
                setIsLastScreen(false);
            }
        }
    }

    useEffect(() => {
        setDarkMode(true);
    }, [])

    return (
        <main
            onScroll={onScrollHandler} ref={pageRef as React.RefObject<HTMLDivElement>}
            className='font-KnewaveRegular select-none bg-dots h-screen snap-y snap-mandatory overflow-y-scroll'>
            <NavBar />
            {children}
            {!isLastScreen && <Arrow />}
        </main>
    )
}

export default Layout