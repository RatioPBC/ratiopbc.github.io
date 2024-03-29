import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-ink py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Ready to connect?
          </h2>
          <Button href="mailto:hello@ratiopbc.com" color="white" className="mt-10">
            Get in touch
          </Button>
        </div>
      </Container>
    </section>
  )
}
