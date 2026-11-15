
import React from 'react'
import { AsciiJellyfish } from "@/components/ui/ascii-jellyfish"

const Hero = () => {
  return (
    <section className="relative min-h-svh w-full px-3 pb-3 pt-20 sm:px-4 sm:pb-4">
      <div className="relative flex min-h-[calc(100svh-5.75rem)] w-full items-center justify-center overflow-hidden rounded-3xl border border-border bg-popover sm:min-h-[calc(100svh-6rem)] sm:rounded-4xl">
        <AsciiJellyfish className="absolute inset-0" />

        {/* Main Text */}
        <div className="relative z-1 my-12 w-[calc(100%-2rem)] max-w-5xl rounded-3xl p-5 text-center isolate before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:bg-(--glass-bg) before:backdrop-blur-md before:mask-[radial-gradient(ellipse_at_center,black_45%,transparent_100%)] sm:w-[calc(100%-4rem)] sm:p-8 md:w-[calc(100%-6rem)] md:p-10">
          <h1 className="font-(family-name:--font-instrument-serif) text-[clamp(2.25rem,9vw,7rem)] leading-[0.92] tracking-tight">
            <span className="font-normal italic">Ideas, engineered into,</span>
            <br />
            digital experiences.
          </h1>

          <p className="mx-auto mt-5 w-full max-w-152 text-sm leading-relaxed text-foreground/70 sm:mt-6 sm:text-base md:text-lg">
            Origino is an independent development studio building modern websites, full-stack applications, and mobile experiences. From concept to deployment, I turn ideas into polished, scalable products.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
