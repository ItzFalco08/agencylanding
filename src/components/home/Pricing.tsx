"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import type { CSSProperties } from "react";
import PixelCard from "@/components/ui/PixelCard";
import { RainbowButton } from "@/components/ui/rainbow-button";

const rainbowPalette = {
  "--color-1": "#3f6fa9",
  "--color-2": "#5b82b6",
  "--color-3": "#4785ff",
  "--color-4": "#7899c0",
  "--color-5": "#a8bdd8",
  "--speed": "6s",
} as CSSProperties;

const fullStackRainbowPalette = {
  ...rainbowPalette,
  color: "var(--background)",
} as CSSProperties;

const plans = [
  {
    name: "Launch",
    priceLabel: "Starting at",
    price: "₹5,999",
    features: [
      "Up to 5 custom pages",
      "Contact form and key integrations",
      "Responsive, search-ready build",
      "Launch support and 2 refinement rounds",
    ],
  },
  {
    name: "Full-stack",
    priceLabel: "Starting at",
    price: "₹34,999",
    features: [
      "Up to 8 core screens",
      "User accounts and authentication",
      "Database, API, and admin essentials",
      "Deployment and 30-day support",
    ],
  },
  {
    name: "Custom",
    priceLabel: "Pricing",
    price: "By scope",
    features: [
      "Web, mobile, or full-stack builds",
      "Features tailored to your requirements",
      "Clear milestones and project scope",
      "Launch support shaped to your project",
    ],
  },
];

function inquiryLink(planName: string) {
  const subject = encodeURIComponent(`Project enquiry — ${planName}`);
  return `mailto:originodigital@gmail.com?subject=${subject}`;
}

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("Full-stack");

  return (
    <section id="pricing" className="section-container scroll-mt-28 pt-12 md:pt-20">
      <header className="mb-9 md:mb-12">
        <span className="text-sm font-medium text-muted-foreground tracking-widest">PRICING</span>
        <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Web &amp; app <span className="font-serif font-normal italic">builds.</span>
        </h2>
      </header>

      <div className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className="relative min-w-0"
            onClick={() => setSelectedPlan(plan.name)}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 translate-x-1 translate-y-1 rounded-[24px] border border-r-4 border-b-4 border-foreground/15 bg-card"
            />
            <PixelCard
              variant="default"
              theme="dark"
              colors={["#77767c", "#929197", "#aeacb2"]}
              shape="square"
              gap={13}
              pixelSize={2}
              speed={22}
              intro={false}
              trigger={selectedPlan === plan.name ? "always" : "hover"}
              noFocus={false}
              spotlight={0.28}
              glow={0.18}
              glowColor="#929197"
              radius={24}
              className="relative z-10 w-full"
              style={{
                width: "100%",
                height: "100%",
                minHeight: "27rem",
                background: "var(--card)",
                "--pixel-card-edge": "color-mix(in srgb, var(--foreground) 10%, transparent)",
                "--pixel-card-edge-active": "color-mix(in srgb, var(--foreground) 20%, transparent)",
                "--pixel-card-highlight": "color-mix(in srgb, var(--foreground) 3%, transparent)",
                "--pixel-card-shadow": "none",
              }}
            >
              <div className="flex h-full w-full flex-col p-6 sm:p-7">
                <h3 className="text-2xl font-medium tracking-tight text-foreground">{plan.name}</h3>

                <div className="mt-5 border-y border-border/70 py-4">
                  <p className="text-[11px] text-muted-foreground">{plan.priceLabel}</p>
                  <p className="mt-0.5 text-3xl font-medium tracking-tight text-foreground">{plan.price}</p>
                </div>

                <ul className="mt-5 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-foreground/75">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <RainbowButton
                  asChild
                  href={inquiryLink(plan.name)}
                  variant="outline"
                  size="lg"
                  className={`mt-auto w-full rounded-xl ${plan.name === "Full-stack" ? "[--rainbow-button-surface:var(--foreground)] dark:[--rainbow-button-surface:color-mix(in_srgb,var(--foreground)_90%,transparent)]" : ""}`}
                  style={plan.name === "Full-stack" ? fullStackRainbowPalette : rainbowPalette}
                >
                  Let’s talk
                  <ArrowRight
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:-rotate-45"
                  />
                </RainbowButton>
              </div>
            </PixelCard>
          </article>
        ))}
      </div>
    </section>
  );
}
