import type { NextPage } from 'next'
import Head from 'next/head'
import { Section } from '../components'
import Label from '../components/controls/label/Label'


const Home: NextPage = () => {


  return (
    <>
      <main className='bg-primary'>
        <Section className='section'>
          <h1 className="uppercase text-9xl tracking-widest outline-font 2xl:text-[12rem]">Hello!</h1>
        </Section>
        <Section className='section'>
          <article className='grid gap-5'>
            <span className="flex justify-center text-4xl 2xl:text-6xl">I&apos; m</span>
            <div className='grid grid-flow-col grid-cols-12'>
              <span className='h-1 min-w-full border-2 border-primary my-2 col-span-5'></span>
              <span className="animate-ping mx-auto h-4 w-4 max-w-2 rounded-full bg-sky-400 opacity-75 col-span-2"></span>
              <span className='h-1 min-w-full border-2 border-primary my-2 col-span-5'></span>
            </div>
            <h1 className="uppercase text-9xl outline-font 2xl:text-[12rem] text-center">Nitin Res</h1>
          </article>
        </Section>
        <Section className='section'>
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
        <Section className='section'>

        </Section>
        <Section className='section'>
          <h1>Hello!</h1>
        </Section>
      </main>
    </>
  )
}

export default Home

Home.displayName = "I'm NITIN";