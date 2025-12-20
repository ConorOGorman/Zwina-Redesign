import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { Button } from "@/components/primitives/Button";
import { Link } from "@/components/primitives/Link";
import React from "react";

export const CtaSection: React.FC = () => {
  return (
    <Section className="text-center border-t border-foreground/10">
      <Container className="max-w-3xl">
        <Typography variant="h2" className="mb-8">Ready to Order?</Typography>
        <Typography variant="body" className="mb-12 text-xl text-muted-foreground">
          Connect with us directly to discuss your preferences, measurements, and
          customizations. Our team is ready to help you create something truly special.
        </Typography>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button variant="outline" asChild size="lg">
            <Link href="https://www.instagram.com/zwina.foundation/" className="no-underline">
              Instagram
            </Link>
          </Button>
          <Button variant="primary" asChild size="lg">
            <Link href="https://wa.me/393493804960" className="no-underline">
              WhatsApp
            </Link>
          </Button>
        </div>

        <Typography variant="caption" className="text-muted-foreground max-w-md mx-auto block">
          Each piece is similar to what you see in our shop, but slight variations in
          shape and color may occur.
        </Typography>
      </Container>
    </Section>
  );
};
