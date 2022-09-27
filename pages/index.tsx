import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useDarkMode } from '../common/hooks/useDarkMode'
import { Introduction, NavBar, Section, Welcome } from 'components'


const Home: NextPage = () => {

  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    setDarkMode(true);
    console.log('index loaded')
  }, [])


  return (
    <>
      <main className='font-KnewaveRegular'>
        <NavBar />
        <Section className='snap-start bg-map background'>
          <Welcome />
        </Section>
        <Section className='snap-start mx-14'>
          <Introduction />
        </Section>
      </main>
    </>
  )
}

export default Home

Home.displayName = "I'm NITIN";