"use client"
import React, { useRef } from 'react'
import { VariableFontCursorProximity } from '../variable-font-cursor-proximity';
import UnderlineToBackground from '../ui/underline-to-background';

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const socialLinks: FooterLink[] = [
  { label: 'Discord', href: 'https://discord.com/users/1467510683649310750', external: true },
  { label: 'Instagram', href: 'https://www.instagram.com/originodigital/', external: true },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61586960546155', external: true },
  { label: 'Telegram', href: 'https://telegram.org', external: true },
];

const pageLinks: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '#projects' },
  { label: 'Booking', href: '#booking' },
];

const personalLinks: FooterLink[] = [
  { label: 'Github', href: 'https://github.com/ItzFalco08', external: true },
  { label: 'Leetcode', href: 'https://leetcode.com/u/melody_fr/', external: true },
  { label: 'My Portfolio', href: 'https://rupamdas-delta.vercel.app/', external: true },
];

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

function FooterLinkList({ links }: { links: FooterLink[] }) {
  return (
    <div className="flex w-fit flex-col gap-2">
      {links.map(({ label, href, external }) => (
        <a
          className="block w-fit"
          href={href}
          key={label}
          rel={external ? 'noreferrer' : undefined}
          target={external ? '_blank' : undefined}
        >
          <UnderlineToBackground
            targetTextColor="var(--background)"
            underlineColor="color-mix(in srgb, var(--foreground) 80%, transparent)"
            className="w-fit cursor-pointer text-foreground/40"
          >
            {label}
          </UnderlineToBackground>
        </a>
      ))}
    </div>
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
            <FooterLinkList links={socialLinks} />
          </div>

          <div className="">
            <p className="pb-2">Pages</p>
            <FooterLinkList links={pageLinks} />
          </div>
          

          <div className="">
            <p className="pb-2">Personal</p>
            <FooterLinkList links={personalLinks} />
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
