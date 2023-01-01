import React from 'react'
import type { NextPage } from 'next'
import { About, ContactUs, Footer, Introduction, Section, Welcome, Work } from 'components'

const Home: NextPage = () => {

  return (
    <>
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
    </>
  )
}

export default Home

Home.displayName = "I'm NITIN";