import type { NextPage } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Head from 'next/head'
import About from '@/components/About'
import Mint from '@/components/Mint'
import Roadmap from '@/components/Roadmap'
import Team from '@/components/Team'
import Footer from '@/components/Footer'
import Faq from '@/components/Faq'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Crappy Birds</title>
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <Mint />
        <Roadmap />
        <Faq />
        <Team />
      </main>
      <Footer />
    </div>
  )
}

export default Home
