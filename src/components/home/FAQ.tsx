'use client';

import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

const FAQData = [
  {
    question: "What services do you offer?",
    answer:
      "I offer a range of services including web development, mobile app development, and UI/UX design. I specialize in creating modern, responsive, and user-friendly digital experiences.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "I work with a variety of technologies including React, Next.js, Node.js, TypeScript, and more. I stay up-to-date with the latest trends and best practices in web and mobile development.",
  },
  {
    question: "How can I get in touch with you?",
    answer:
      "You can reach me through the contact links, or you can send me an email at originodigital@gmail.com.",
  },
  {
    question: "What is your development process?",
    answer:
      "My development process typically involves understanding the client's requirements, creating wireframes and prototypes, developing the application, and testing it thoroughly before deployment. I also provide ongoing support and maintenance as needed.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Yes, I offer custom solutions tailored to the specific needs of each client. I work closely with clients to understand their goals and create a solution that meets their requirements.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-container grid gap-8 md:grid-cols-[1fr_2fr]">
      <header className="flex flex-col items-start gap-1">
        <span className="text-sm font-medium text-muted-foreground">FAQ</span>
        <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Got <span className="font-serif font-normal italic">questions?</span>
        </h2>
      </header>

      <LayoutGroup id="faq-list">
        <ul className="isolate flex flex-col">
          {FAQData.map(({ question, answer }, index) => {
            const isOpen = activeIndex === index;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <motion.li layout key={question} className="relative rounded-2xl">
                {isOpen && (
                  <motion.div
                    layoutId="faq-active-highlight"
                    className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-muted"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                <button
                  id={questionId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 px-4 py-4 text-left"
                >
                  <span
                    className={`text-[15px] font-medium transition-colors duration-200 ${isOpen ? "text-foreground" : "text-foreground/60 hover:text-foreground"}`}
                  >
                    {question}
                  </span>
                  <motion.svg
                    aria-hidden="true"
                    viewBox="0 0 12 12"
                    className="size-3 shrink-0 text-foreground/50"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      d="M6 1v10M1 6h10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </button>

                <div id={answerId} role="region" aria-labelledby={questionId}>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={answerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="max-w-2xl px-4 pb-5">
                          <motion.p
                            initial={{ filter: "blur(6px)" }}
                            animate={{ filter: "blur(0px)" }}
                            exit={{ filter: "blur(10px)" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="text-[15px] text-muted-foreground leading-relaxed"
                          >
                            {answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </LayoutGroup>
    </section>
  );
};

export default FAQ;
