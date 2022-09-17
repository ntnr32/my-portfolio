import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import { useDarkMode } from '../common/hooks/useDarkMode'
import { Section } from '../components'


const Home: NextPage = () => {

  const [darkMode, setDarkMode] = useDarkMode();

  useEffect(() => {
    setDarkMode(!darkMode);
    console.log('index loaded')
  }, [])


  return (
    <>
      <main className='bg-primary text-primary font-KnewaveRegular h-screen snap-y snap-mandatory overflow-y-scroll'>
        <Section className='section snap-start'>
          <h1 className="font-KnewaveOutlineRegular lowercase text-9xl tracking-widest 2xl:text-[12rem]">Hello!</h1>
        </Section>
        <Section className='section snap-start'>
          <article className='grid gap-5'>
            <span className="flex justify-center text-4xl 2xl:text-6xl">I&apos; m</span>
            <div className='grid grid-flow-col grid-cols-12'>
              <span className='h-1 min-w-full bg-invert my-2 col-span-5'></span>
              <span className="animate-ping mx-auto h-4 w-4 max-w-2 rounded-full bg-sky-400 opacity-75 col-span-2"></span>
              <span className='h-1 min-w-full bg-invert my-2 col-span-5'></span>
            </div>
            <h1 className="font-KnewaveOutlineRegular uppercase text-9xl 2xl:text-[12rem] text-center">Nitin Res</h1>
          </article>
        </Section>
        <Section className='section snap-start'>
          <article className="grid gap-6">
            <h2 className='text-4xl'>Interested in too many things</h2>
            <span>
              <p>Hi, I&apos; m Nitin, a web developer 💻 and interested in too many things!💡</p>
              <p>From font-end to backend development, even mobile sometimes 😁. I love trying new things and new tech
                stack.</p>
              <p>I work as Software Engineer @ Microsoft India and on my free time contributing to open source.</p>
            </span>
          </article>
        </Section>
        <Section className='section snap-start'>

        </Section>
        <Section className='section snap-start'>
          <h1>Hello!</h1>
        </Section>
      </main>
    </>
  )
}

export default Home

Home.displayName = "I'm NITIN";