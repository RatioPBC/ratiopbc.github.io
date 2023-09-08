import Head from "next/head";

import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Ratio PBC - Software and data consultancy supporting health and human
          services organizations.
        </title>
        <meta
          name="description"
          content="We design, build, and operate mission critical software and data systems for health and human services organizations."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <p>
          We are reworking our blog, please check back soon!
        </p>
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
