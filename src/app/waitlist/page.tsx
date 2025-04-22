import Container from '@/shared/components/layout/Container'
import { Button } from '@/shared/components/ui/button'
import FormField from '@/shared/components/ui/form-field'

const Waitlist = () => {
  return (
    <section className="-mt-[72px] flex min-h-screen items-center justify-center">
      <Container className="max-w-lg">
        <div className="mb-4 space-y-3">
          <h1 className="text-h1">Get early access!</h1>
          <p className="text-muted-foreground">
            We&apos;re building something exciting — the ultimate platform for discovering
            experiences and activities. Be the first to know when we launch and get exclusive early
            updates.
          </p>
        </div>
        <form className="space-y-4 text-left">
          <FormField label="First name" name="firstName" placeholder="Jane" required />
          <FormField label="Last name" name="lastName" placeholder="Doe" required />
          <FormField
            label="Email address"
            name="email"
            type="email"
            placeholder="you@example.com"
            error="Enter a valid email"
            required
          />

          <Button type="submit" className="mt-2 w-full rounded-full">
            Join Waitlist
          </Button>
        </form>
      </Container>
    </section>
  )
}

export default Waitlist
