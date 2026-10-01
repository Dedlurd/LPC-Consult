import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BrainCircuit,
  FileSearch,
  PenLine,
  ScanSearch,
} from "lucide-react";

function OurApproach() {
  const approachSteps = [
    {
      number: "01",
      icon: FileSearch,
      title: "Understand the Record",
      description:
        "We begin with your actual experience, responsibilities, achievements, goals, and context. The work starts with understanding what is already there.",
    },
    {
      number: "02",
      icon: ScanSearch,
      title: "Find the Positioning",
      description:
        "We identify the strongest themes, evidence, and professional direction that should come forward for the audience you are trying to reach.",
    },
    {
      number: "03",
      icon: BrainCircuit,
      title: "Build the Narrative",
      description:
        "We connect your experience into a coherent professional story so your capabilities, progression, and value are easier to understand.",
    },
    {
      number: "04",
      icon: PenLine,
      title: "Refine with Purpose",
      description:
        "Only after the message is right do we refine wording, structure, tone, and presentation to create a polished final result.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#00B4D8]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
                Our Approach
              </span>
            </div>

            <h2 className="mt-5 max-w-md text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Strategy first. Presentation with purpose.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl"
          >
            <p className="text-base leading-7 text-slate-600 sm:text-[17px]">
              Every professional story is different. Our approach is
              designed to uncover what matters most, shape it for the
              right audience, and present it without losing the person
              behind the experience.
            </p>
          </motion.div>
        </div>

        {/* Main Methodology */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <div className="grid lg:grid-cols-[0.34fr_0.66fr]">
            {/* Left Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden bg-slate-950 p-7 sm:p-9 lg:p-10"
            >
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#00B4D8]/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00B4D8] text-white">
                  <BrainCircuit size={22} strokeWidth={2} />
                </div>

                <p className="mt-8 text-xs font-bold uppercase tracking-[0.15em] text-[#00B4D8]">
                  The LPC Careers Standard
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                  The message comes before the design.
                </h3>

                <p className="mt-5 text-sm leading-6 text-slate-400">
                  Strong career materials are not created by formatting
                  alone. We first determine what should be communicated,
                  why it matters, and how it should be understood.
                </p>

                <div className="mt-8 h-px w-12 bg-[#CAD182]" />

                <p className="mt-4 text-sm font-semibold leading-6 text-white">
                  Clear thinking creates stronger professional
                  presentation.
                </p>
              </div>
            </motion.div>

            {/* Steps */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="space-y-0">
                {approachSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <motion.article
                      key={step.number}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className={`flex gap-5 py-6 ${
                        index !== approachSteps.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >
                      <div className="flex shrink-0 flex-col items-center">
                        <span className="text-xs font-bold tracking-[0.15em] text-[#00B4D8]">
                          {step.number}
                        </span>

                        <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8]">
                          <Icon size={19} strokeWidth={2} />
                        </div>
                      </div>

                      <div className="pt-0.5">
                        <h3 className="text-lg font-bold tracking-tight text-slate-950">
                          {step.title}
                        </h3>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                          {step.description}
                        </p>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Three Principles */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Evidence over exaggeration",
              text: "We work with the experience you actually have and focus on presenting it with stronger clarity and relevance.",
            },
            {
              title: "Relevance over volume",
              text: "More information does not always create more impact. We prioritize the details that matter most to the intended audience.",
            },
            {
              title: "Polish without losing authenticity",
              text: "The final result should feel refined and credible without sounding disconnected from the professional behind it.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
            >
              <div className="h-1 w-8 rounded-full bg-[#CAD182]" />

              <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-col gap-4 rounded-2xl bg-[#CAD182]/20 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8"
        >
          <div>
            <p className="text-sm font-bold text-slate-950">
              See how this approach translates into practical services.
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Explore the ways Lpc Careers can help strengthen your
              professional positioning.
            </p>
          </div>

          <Link
            to="/services"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#00B4D8] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#009FC0] hover:shadow-lg hover:shadow-[#00B4D8]/20"
          >
            Explore Services

            <ArrowUpRight
              size={17}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default OurApproach;