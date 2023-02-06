import React, { useEffect, useState } from 'react'
import { Arrow, NavBar } from 'components'
import { useDarkMode } from 'common/hooks/useDarkMode';
import SocialLink from '../widgets/SocialLink';
import EmailLink from '../widgets/EmailLink';


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
            className='font-MajorMonoDisplay select-none bg-dots h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth'>
            <NavBar />
            {children}
            {/* {!isLastScreen && <Arrow />} */}
            <SocialLink />
            <EmailLink />
        </main>
    )
}

export default Layout