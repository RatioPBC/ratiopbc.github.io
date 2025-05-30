import Head from "next/head";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export default function Redirect() {
  const redirectUrl = "https://polymorph.ratiopbc.com/sign-up";

  useEffect(() => {
    window.location.href = redirectUrl;
  }, []);

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${redirectUrl}`} />
        <title>Redirecting to Digital Data Collector demo</title>
      </Head>
      <Header />
      <main>
        <section
          id="polymorph-demo"
          aria-label="Polymorph Digital Data Collector demo"
          className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
        >
          <Container>
            <div className="mx-auto max-w-2xl md:text-center">
              <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                Redirecting to Ratio's Digital Data Collector demo...
              </h2>
              <p className="mt-4 text-lg tracking-tight text-slate-700">
                If you are not redirected automatically,{" "}
                <a className="underline hover:no-underline" href={redirectUrl}>
                  click here
                </a>.
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
