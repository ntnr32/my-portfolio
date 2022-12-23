import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useDarkMode } from '../common/hooks/useDarkMode'
import { About, Arrow, ContactUs, Footer, Introduction, NavBar, Section, Welcome, Work } from 'components'


const Home: NextPage = () => {

  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    setDarkMode(true);
    console.log('index loaded')
  }, [])


  return (
    <>
      <main className='font-KnewaveRegular select-none bg-dots'>
        <NavBar />
        <Section className='snap-start bg-map background'>
          <Welcome />
        </Section>
        <Section className='snap-start mx-14'>
          <Introduction />
        </Section>
        <Section className='snap-start mx-14'>
          <About />
        </Section>
        <Section className='snap-start mx-14'>
          <Work />
        </Section>
        <Footer />
        <Arrow />
      </main>
    </>
  )
}

export default Home

Home.displayName = "I'm NITIN";