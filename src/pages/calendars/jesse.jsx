import Head from "next/head";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/Container";

export default function Redirect() {
  const redirectUrl =
    "https://calendar.google.com/calendar/u/0/appointments/AcZssZ10w4zrHjSvRNuOXRCvkruv_l4rT9O14mvM4yw=?gv=true";

  useEffect(() => {
    window.location.href = redirectUrl;
  }, []);

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${redirectUrl}`} />
        <title>Redirecting to Jesse's calendar...</title>
      </Head>
      <Header />
      <main>
        <section
          id="why-ratio"
          aria-label="Features for simplifying everyday business tasks"
          className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
        >
          <Container>
            <div className="mx-auto max-w-2xl md:text-center">
              <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                Redirecting to Jesse's appointment calendar...
              </h2>
              <p className="mt-4 text-lg tracking-tight text-slate-700">
                If you are not redirected automatically,{" "}
                <a href={redirectUrl}>click here</a>.
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
