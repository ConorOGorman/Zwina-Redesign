import { Container } from "@/components/primitives/Container";
import { Typography } from "@/components/primitives/Typography";
import { Link } from "@/components/primitives/Link";
import { Button } from "@/components/primitives/Button";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary border-y border-black/5">
      <Container>
        <div className="py-10 md:py-12">
          <div className="flex items-start justify-center md:justify-start text-center md:text-left">
            <Typography
              variant="h3"
              className="text-foreground whitespace-normal sm:whitespace-nowrap uppercase tracking-[0.08em] md:tracking-[0.12em] text-2xl sm:text-3xl md:text-4xl"
            >
              Zwina Foundation
            </Typography>
          </div>

          <div className="h-px w-full bg-foreground/10 my-8 md:my-10" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-start">
            <div>
              <Typography variant="h3" className="mb-4 text-foreground">Stay connected.</Typography>
              <Typography variant="body" className="mb-8 text-muted-foreground max-w-xl">
                Subscribe to our newsletter for updates on projects, impact stories, and ways to get
                involved.
              </Typography>

              <form
                className="max-w-xl mx-auto md:mx-0 grid grid-cols-1 gap-3 sm:flex sm:items-stretch sm:gap-0"
                aria-label="Newsletter signup"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 h-12 px-5 bg-surface border border-foreground/15 focus:outline-none text-foreground placeholder:text-muted-foreground rounded-[var(--radius-button)] sm:rounded-r-none transition focus:border-foreground/30 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-secondary"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  effect="sweep"
                  className="w-full sm:w-auto sm:rounded-l-none"
                >
                  Subscribe
                </Button>
              </form>
            </div>

            <div className="mx-auto w-full lg:mx-0 lg:ml-auto lg:max-w-5xl">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-10">
                <div>
                  <Typography variant="h6" className="mb-4 md:mb-6 text-foreground uppercase tracking-widest text-xs">About</Typography>
                  <ul className="space-y-2 md:space-y-4">
                    <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Story</Link></li>
                    <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Team</Link></li>
                    <li><Link href="/impact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Impact</Link></li>
                    <li><Link href="/partners" className="text-sm text-muted-foreground hover:text-primary transition-colors">Partners</Link></li>
                  </ul>
                </div>

                <div>
                  <Typography variant="h6" className="mb-4 md:mb-6 text-foreground uppercase tracking-widest text-xs">Projects</Typography>
                  <ul className="space-y-2 md:space-y-4">
                    <li><Link href="/projects/sewing-hope" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sewing Hope</Link></li>
                    <li><Link href="/projects/upcoming" className="text-sm text-muted-foreground hover:text-primary transition-colors">Upcoming Initiatives</Link></li>
                    <li><Link href="/volunteer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Volunteer</Link></li>
                    <li><Link href="/donate" className="text-sm text-muted-foreground hover:text-primary transition-colors">Donate</Link></li>
                  </ul>
                </div>

                <div>
                  <Typography variant="h6" className="mb-4 md:mb-6 text-foreground uppercase tracking-widest text-xs">Connect</Typography>
                  <ul className="space-y-2 md:space-y-4">
                    <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                    <li><Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shop</Link></li>
                    <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-foreground/10 my-8 md:my-10" />

          <div className="flex flex-col md:flex-row gap-5 md:gap-6 items-center md:items-center justify-between">
            <div className="text-center md:text-left">
              <Typography variant="h6" className="text-foreground uppercase tracking-widest text-xs">Zwina Foundation</Typography>
              <Typography variant="body-sm" className="text-muted-foreground">
                &copy; {new Date().getFullYear()}
              </Typography>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
