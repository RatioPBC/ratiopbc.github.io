import Link from "next/link";

export function OurStory()
{
    return (
        <div className="bg-ink py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
      <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">Our story</h2>
      <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
        <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
          <p className="mt-10 max-w-xl text-base leading-7 text-cream">At the start of the COVID-19 pandemic, state health departments were scrambling to stand up public health interventions to reduce the spread of the virus, and many of their existing technology systems could not be modified quickly enough to enable these programs. Ratio's founders were brought in by multiple states to rapidly build and implement the software applications and data pipelines they needed to enable their COVID-19 response programs. <a className="mt-10 max-w-xl text-base leading-7 text-sunset" href="https://www.lfph.io/2021/09/21/building-software-for-covid-19-contact-tracing-programs/">Read more about our early work.</a></p>
          <br></br>
          <p className="mt-10 max-w-xl text-base leading-7 text-cream">Since then, Ratio has built on our commitment to contribute to a more resilient and human-centered technology infrastructure for the United States' public health and human services programs. From SMS-based public engagement campaigns to designing a modern cloud data environment for public health researchers, our work has helped state agencies, healthcare providers, and non-profit organizations pursue their important missions. We're just getting started. </p>
        </div>
        <div className="lg:flex lg:flex-auto lg:justify-center">
          <dl className="w-64 space-y-8 xl:w-80">
            <br></br>
            <div className="flex flex-col-reverse gap-y-4">
              <dt className="text-base leading-7 text-cream">Jim Kirkwood<br></br>Director, Center for Health Data Innovation<br></br>New York State Department of Health</dt>
              <dd className="text-2xl font-semibold tracking-tight text-sunset">"The Ratio team quickly built and implemented an API integration we needed to understand COVID hospitalization data."</dd>
            </div>

          </dl>
        </div>
      </div>
    </div>
  </div>
</div>




    )
}
