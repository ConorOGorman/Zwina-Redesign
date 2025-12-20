import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { Typography } from "@/components/primitives/Typography";
import { Button } from "@/components/primitives/Button";
import React from "react";

export default function StyleGuidePage() {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <div className="mb-20">
          <Typography variant="h1" className="mb-4">Zwina Style Guide</Typography>
          <Typography variant="body" className="text-xl max-w-2xl">
            A modern, warm, and playful design system inspired by the Zwina Foundation&apos;s vibrant identity.
          </Typography>
        </div>

        {/* Colors */}
        <Section className="border-t border-black/10 py-12">
          <Typography variant="h3" className="mb-8">Color Palette</Typography>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="h-32 w-full rounded-md bg-background border border-black/10 shadow-sm"></div>
              <Typography variant="caption">Background (Warm Cream)</Typography>
              <code className="text-xs">#F9F7F2</code>
            </div>
            <div className="space-y-2">
              <div className="h-32 w-full rounded-md bg-[var(--foreground)] shadow-sm"></div>
              <Typography variant="caption">Foreground (Deep Rust)</Typography>
              <code className="text-xs">#4A2C2A</code>
            </div>
            <div className="space-y-2">
              <div className="h-32 w-full rounded-md bg-primary shadow-sm"></div>
              <Typography variant="caption">Primary (Terracotta)</Typography>
              <code className="text-xs">#E65F5C</code>
            </div>
            <div className="space-y-2">
              <div className="h-32 w-full rounded-md bg-accent shadow-sm"></div>
              <Typography variant="caption">Accent (Sunshine)</Typography>
              <code className="text-xs">#F9C22E</code>
            </div>
            <div className="space-y-2">
              <div className="h-32 w-full rounded-md bg-[var(--color-sky)] shadow-sm"></div>
              <Typography variant="caption">Sky Blue</Typography>
              <code className="text-xs">#A0D2DB</code>
            </div>
            <div className="space-y-2">
              <div className="h-32 w-full rounded-md bg-[var(--color-pink)] shadow-sm"></div>
              <Typography variant="caption">Pop Pink</Typography>
              <code className="text-xs">#F06595</code>
            </div>
            <div className="space-y-2">
              <div className="h-32 w-full rounded-md bg-secondary shadow-sm"></div>
              <Typography variant="caption">Secondary (Sand)</Typography>
              <code className="text-xs">#F0EBE0</code>
            </div>
          </div>
        </Section>

        {/* Typography */}
        <Section className="border-t border-black/10 py-12">
          <Typography variant="h3" className="mb-8">Typography</Typography>
          <div className="space-y-8">
            <div>
              <Typography variant="h1">Heading 1 - Playfair Display</Typography>
              <p className="text-sm text-gray-500 mt-2">Serif / 400 / Tight Tracking</p>
            </div>
            <div>
              <Typography variant="h2">Heading 2 - The Quick Brown Fox</Typography>
            </div>
            <div>
              <Typography variant="h3">Heading 3 - Jumps Over The Lazy Dog</Typography>
            </div>
            <div>
              <Typography variant="body" className="max-w-2xl">
                <strong>Body Text (Manrope):</strong> Zwina Foundation began as a group of students in the Netherlands who decided not to wait for the perfect moment to create impact—we simply started. Today, we are a youth-led organization empowering communities worldwide.
              </Typography>
            </div>
          </div>
        </Section>

        {/* Buttons */}
        <Section className="border-t border-black/10 py-12">
          <Typography variant="h3" className="mb-8">Buttons & Interactions</Typography>
          <div className="flex flex-wrap gap-6 items-center">
            <Button variant="primary">Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="outline">Outline Action</Button>
            <Button variant="ghost">Ghost Action</Button>
          </div>
        </Section>

        {/* Logo Concept */}
        <Section className="border-t border-black/10 py-12">
          <Typography variant="h3" className="mb-8">Logo Concept</Typography>
          <div className="p-12 bg-white rounded-lg inline-block border border-black/5">
             {/* CSS-only recreation of the logo vibe */}
             <div className="flex items-center gap-1 text-4xl font-black tracking-tighter">
                <span className="text-[var(--primary)] -rotate-6 inline-block">Z</span>
                <span className="text-[var(--accent)] rotate-3 inline-block">W</span>
                <span className="text-[var(--color-rust)] -rotate-3 inline-block">I</span>
                <span className="text-[var(--color-pink)] rotate-6 inline-block">N</span>
                <span className="text-[var(--accent)] -rotate-2 inline-block">A</span>
             </div>
             <div className="w-full h-2 bg-[var(--color-sky)] mt-1 rounded-full opacity-60"></div>
          </div>
        </Section>

      </Container>
    </div>
  );
}
