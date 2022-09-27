import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useDarkMode } from '../common/hooks/useDarkMode'
import { NavBar, Section, Welcome } from 'components'


const Home: NextPage = () => {

  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    setDarkMode(true);
    console.log('index loaded')
  }, [])


  return (
    <>
      <main className='h-screen font-KnewaveRegular bg-map background'>
        <NavBar />
        <Section className='snap-start'>
          <Welcome />
        </Section>
      </main>
    </>
  )
}

export default Home

Home.displayName = "I'm NITIN";