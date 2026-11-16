"use client"
import React, { useRef } from 'react'
import { VariableFontCursorProximity } from '../variable-font-cursor-proximity';
import UnderlineToBackground from '../ui/underline-to-background';

type VariableWeightTextProps = {
  text: string;
  minWeight?: number;
  maxWeight?: number;
};

function VariableWeightText({
  text,
  minWeight = 200,
  maxWeight = 900,
}: VariableWeightTextProps) {
  const chars = Array.from(text);

  return (
    <span className="font-(family-name:--font-instrument-serif) text-[20rem]">
      {chars.map((char, i) => {
        const weight =
          chars.length <= 1
            ? minWeight
            : minWeight +
              (i / (chars.length - 1)) * (maxWeight - minWeight);

        return (
          <span key={i} style={{ fontWeight: weight }}>
            {char}
          </span>
        );
      })}
    </span>
  );
}

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="section-container pb-0! mt-32 flex items-center justify-center flex-col" ref={containerRef}>
      <div className="z-2 grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:-mb-20">
        {/* left */}
        <div className="w-full sm:pl-12">
          <p className="text-muted-foreground text-sm">
            © copyright DevStudios 2024. All rights reserved.
          </p>
        </div>

        {/* right */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-3">
          <div className="">
            <p className="pb-2">Socials</p>
            
            <div className="flex w-fit flex-col gap-2 ">

              <UnderlineToBackground
                targetTextColor="var(--background)"
                underlineColor="color-mix(in srgb, var(--foreground) 80%, transparent)"
                className="cursor-pointer text-foreground/40 w-fit"
              >
                Discord
              </UnderlineToBackground>

              <UnderlineToBackground
                targetTextColor="var(--background)"
                underlineColor="color-mix(in srgb, var(--foreground) 80%, transparent)"
                className="cursor-pointer text-foreground/40 w-fit"
              >
                Instagram
              </UnderlineToBackground>

              <UnderlineToBackground
                targetTextColor="var(--background)"
                underlineColor="color-mix(in srgb, var(--foreground) 80%, transparent)"
                className="cursor-pointer text-foreground/40 w-fit"
              >
                Facebook
              </UnderlineToBackground>
              
              <UnderlineToBackground
                targetTextColor="var(--background)"
                underlineColor="color-mix(in srgb, var(--foreground) 80%, transparent)"
                className="cursor-pointer text-foreground/40 w-fit"
              >
                Telegram
              </UnderlineToBackground>

            </div>          
          </div>

          <div className="">
            <p className="pb-2">Pages</p>
            
            <div className="flex w-fit flex-col gap-2">

              <UnderlineToBackground
                targetTextColor="var(--background)"
                underlineColor="color-mix(in srgb, var(--foreground) 80%, transparent)"
                className="cursor-pointer text-foreground/40 w-fit"
              >
                Home
              </UnderlineToBackground>

              <UnderlineToBackground
                targetTextColor="var(--background)"
                underlineColor="color-mix(in srgb, var(--foreground) 80%, transparent)"
                className="cursor-pointer text-foreground/40 w-fit"
              >
                Projects
              </UnderlineToBackground>

              <UnderlineToBackground
                targetTextColor="var(--background)"
                underlineColor="color-mix(in srgb, var(--foreground) 80%, transparent)"
                className="cursor-pointer text-foreground/40 w-fit"
              >
                Booking
              </UnderlineToBackground>
            </div>          
          </div>
          

          <div className="">
            <p className="pb-2">Personal</p>
            
            <div className="flex w-fit flex-col gap-2">

              <UnderlineToBackground
                targetTextColor="var(--background)"
                underlineColor="color-mix(in srgb, var(--foreground) 80%, transparent)"
                className="cursor-pointer text-foreground/40 w-fit"
              >
                Github
              </UnderlineToBackground>

              <UnderlineToBackground
                targetTextColor="var(--background)"
                underlineColor="color-mix(in srgb, var(--foreground) 80%, transparent)"
                className="cursor-pointer text-foreground/40 w-fit"
              >
                Leetcode
              </UnderlineToBackground>

              <UnderlineToBackground
                targetTextColor="var(--background)"
                underlineColor="color-mix(in srgb, var(--foreground) 80%, transparent)"
                className="cursor-pointer text-foreground/40 w-fit"
              >
                My Portfolio
              </UnderlineToBackground>
            </div>          
          </div>
        </div>
      </div>
      
      <VariableFontCursorProximity
        className="z-1 select-none whitespace-nowrap bg-linear-to-b from-background from-30% bg-clip-text text-[clamp(5rem,25vw,8rem)] leading-tight! tracking-tight text-transparent sm:text-[16rem] md:text-[18rem] lg:text-[25rem] font-(family-name:--font-instrument-serif) to-foreground/20 to-100%"
        containerRef={containerRef}
        fromFontVariationSettings="'wght' 400"
        radius={500}
        toFontVariationSettings="'wght' 900"
      >
        Origino
      </VariableFontCursorProximity>
    </div>
  )
}

export default Footer
