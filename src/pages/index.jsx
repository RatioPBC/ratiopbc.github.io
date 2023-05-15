import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { WhyRatio } from '@/components/WhyRatio'
import { Testimonials } from '@/components/Testimonials'
import { Services } from '@/components/Services'
import { OurStory } from '@/components/OurStory'
import { Clients } from '@/components/Clients'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ratio PBC - Software and data consultancy supporting health and human services organizations.</title>
        <meta
          name="description"
          content="We design, build, and operate mission critical software and data systems for health and human services organizations."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Services />
        <Clients />
        <OurStory />
        <WhyRatio />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
