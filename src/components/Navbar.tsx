'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'

const tabs = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Features', href: '#features' },
]

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Pricing')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24)
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      window.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  const selectTab = (label: string) => {
    setActiveTab(label)
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      aria-label="Main navigation"
      animate={{ width: isScrolled ? 'min(60rem, calc(100vw - 1.5rem))' : 'min(48rem, calc(100vw - 1.5rem))' }}
      transition={{ type: 'spring', stiffness: 260, damping: 28 }}
      className="fixed left-1/2 top-3 z-50 flex -translate-x-1/2 items-center justify-between rounded-full bg-(--glass-bg) p-1.5 shadow-(--glass-shadow) backdrop-blur-xs md:grid md:grid-cols-[1fr_auto] md:gap-3"
      style={{ borderRadius: '9999px', transformOrigin: '50% 50% 0px' }}
    >
      <div className="pointer-events-auto flex min-w-0 items-center">
        <a aria-label="Origino home" className="group flex h-11 shrink-0 items-center gap-1 rounded-full px-2 md:px-4" href="/">
          <span className="text-xl font-normal text-foreground md:text-2xl font-(family-name:--font-instrument-serif)">
            <span className="text-primary font-semibold">O</span>
            <span className='italic'>rigino</span>
          </span>
        </a>

        <div className="hidden h-11 items-center gap-1 md:flex">
          {tabs.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => selectTab(label)}
              aria-current={activeTab === label ? 'page' : undefined}
              className={`isolate relative rounded-full px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent ${activeTab === label ? 'font-medium' : 'text-foreground/65 hover:text-foreground'}`}
            >
              {activeTab === label && <motion.span layoutId="navbar-active-tab" className="absolute inset-0 z-0 rounded-full bg-accent shadow-(--glass-shadow)" transition={{ type: 'spring', stiffness: 420, damping: 32 }} />}
              <span className="relative z-10">{label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="pointer-events-auto hidden items-center justify-self-end gap-1 md:flex md:pr-1">
        <a href="https://github.com/ItzFalco08" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent">
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.04 11.04 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" /></svg>
        </a>
        <ThemeToggle sound={false} className="size-10 rounded-full bg-transparent p-0 text-foreground hover:bg-accent" />
      </div>

      <button
        type="button"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsMenuOpen((open) => !open)}
        className="pointer-events-auto flex size-10 shrink-0 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:hidden"
      >
        {isMenuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="absolute left-0 right-0 top-[calc(100%+0.65rem)] rounded-3xl bg-(--glass-bg) p-2 shadow-(--glass-shadow) backdrop-blur-sm md:hidden"
          >
            <div className="flex flex-col gap-1">
              {tabs.map(({ label, href }) => (
                <a key={label} href={href} onClick={() => selectTab(label)} aria-current={activeTab === label ? 'page' : undefined} className={`rounded-2xl px-4 py-3 text-sm transition-colors hover:bg-accent ${activeTab === label ? 'bg-accent font-medium text-foreground' : 'text-foreground/75'}`}>
                  {label}
                </a>
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-(--glass-border) px-2 pt-2">
              <a href="https://github.com/ItzFalco08" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.04 11.04 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" /></svg>
              </a>
              <ThemeToggle sound={false} className="size-10 rounded-full bg-transparent p-0 text-foreground hover:bg-accent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
