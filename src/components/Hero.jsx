import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Modern software and data solutions for public sector and specialized
        industries.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        We design, build, and operate secure, resilient, and human-centered
        software and data systems for public sector organizations, non-profits
        and specialized industries including healthcare, biotechnology,
        pharmaceutical, and deep tech companies.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="mailto:hello@ratiopbc.com" color="ink">Get in touch</Button>
        <Button
          href="#services"
          variant="outline"
        >
          <span className="ml-3">How we help</span>
        </Button>
      </div>
    </Container>
  )
}
