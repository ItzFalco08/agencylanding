"use client"

import React from "react"
import { MailIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Dock as DockPrimitive, DockIcon } from "@/components/ui/dock"

export type IconProps = React.HTMLAttributes<SVGElement>

const Icons = {
  email: (props: IconProps) => <MailIcon {...props} />,
  discord: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.73 5.33a18.2 18.2 0 0 0-4.49-1.4.07.07 0 0 0-.08.04c-.2.36-.42.84-.58 1.21a16.8 16.8 0 0 0-5.05 0c-.16-.38-.39-.85-.59-1.21a.08.08 0 0 0-.08-.04 18.15 18.15 0 0 0-4.5 1.4.07.07 0 0 0-.03.03C1.48 9.55.7 13.64 1.08 17.68c0 .02.01.04.03.05a18.3 18.3 0 0 0 5.5 2.79.08.08 0 0 0 .09-.03c.42-.57.8-1.17 1.12-1.8a.08.08 0 0 0-.04-.11 12.1 12.1 0 0 1-1.72-.82.08.08 0 0 1-.01-.13l.35-.28a.08.08 0 0 1 .08-.01c3.61 1.65 7.52 1.65 11.09 0a.08.08 0 0 1 .08.01l.35.28a.08.08 0 0 1-.01.13c-.55.32-1.13.6-1.72.82a.08.08 0 0 0-.04.11c.33.63.7 1.23 1.12 1.8a.08.08 0 0 0 .09.03 18.25 18.25 0 0 0 5.5-2.79.08.08 0 0 0 .03-.05c.45-4.67-.75-8.72-3.24-12.32a.06.06 0 0 0-.03-.03ZM8.02 14.72c-1.08 0-1.97-.99-1.97-2.2s.87-2.2 1.97-2.2c1.11 0 1.99 1 1.97 2.2 0 1.21-.87 2.2-1.97 2.2Zm7.28 0c-1.08 0-1.97-.99-1.97-2.2s.87-2.2 1.97-2.2c1.11 0 1.99 1 1.97 2.2 0 1.21-.86 2.2-1.97 2.2Z" />
    </svg>
  ),
  instagram: (props: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
    </svg>
  ),
}

const CONTACT_LINKS = [
  { label: "Discord", href: "https://discord.com/users/1467510683649310750", icon: Icons.discord },
  { label: "Instagram", href: "https://www.instagram.com/originodigital/", icon: Icons.instagram },
  { label: "Gmail", href: "mailto:originodigital@gmail.com", icon: Icons.email },
]

export function Dock() {
  return (
    <TooltipProvider>
      <div role="group" aria-label="Contact links">
        <DockPrimitive>
        {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
          <DockIcon key={label} className="group">
            <Tooltip>
              <TooltipTrigger
                render={<a href={href} target="_blank" rel="noreferrer" />}
                aria-label={label}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "size-12 rounded-full"
                )}
              >
                <Icon className="size-5 transition-transform duration-200 group-hover:scale-110" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        </DockPrimitive>
      </div>
    </TooltipProvider>
  )
}
