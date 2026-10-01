import { motion } from "motion/react";
import {
  CircleCheckBig,
  LockKeyhole,
  Target,
  UserRoundCheck,
  Sparkles,
} from "lucide-react";

function WhatWeStandFor() {
  const values = [
    {
      icon: Target,
      title: "Clarity",
      description:
        "We believe strong professional positioning starts with a clear message. Every part of the work should help the reader understand what you bring to the table.",
    },
    {
      icon: UserRoundCheck,
      title: "Personalization",
      description:
        "Your experience, goals, and professional direction are unique. Our work is built around your situation rather than a one-size-fits-all approach.",
    },
    {
      icon: Sparkles,
      title: "Purposeful Quality",
      description:
        "Polish matters, but it should serve a purpose. We refine language, structure, and presentation to improve how your professional story is understood.",
    },
    {
      icon: LockKeyhole,
      title: "Confidentiality",
      description:
        "Career information can be highly personal. Professional discretion and appropriate handling of your information are fundamental to the engagement.",
    },
    {
      icon: CircleCheckBig,
      title: "Integrity",
      description:
        "We work from the experience and evidence you provide. The objective is stronger positioning without misrepresenting your background or achievements.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#00B4D8]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
                What We Stand For
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Principles that shape every client engagement.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              The quality of career materials depends not only on
              writing, but on the principles guiding the work behind
              them.
            </p>
          </motion.div>

          {/* Values */}
          <div className="space-y-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00B4D8]/40 hover:shadow-[0_14px_35px_rgba(0,0,0,0.06)] sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8] transition-colors duration-300 group-hover:bg-[#00B4D8] group-hover:text-white">
                      <Icon size={20} strokeWidth={2} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold tracking-tight text-slate-950">
                        {value.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {value.description}
                      </p>
                    </div>

                    <span className="hidden text-xs font-bold tracking-[0.12em] text-[#00B4D8] sm:block">
                      0{index + 1}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeStandFor;