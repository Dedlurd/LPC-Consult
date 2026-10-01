import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ClipboardList,
  FileEdit,
  SearchCheck,
  Send,
} from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Service",
      description:
        "Select an individual service or career package that matches your current professional need.",
      icon: ClipboardList,
    },
    {
      number: "02",
      title: "Share Your Details",
      description:
        "Tell us about your experience, goals, target opportunity, and provide the information needed for the engagement.",
      icon: SearchCheck,
    },
    {
      number: "03",
      title: "We Develop Your Materials",
      description:
        "Our work is built around your information, career direction, and the positioning required for your target audience.",
      icon: FileEdit,
    },
    {
      number: "04",
      title: "Review & Delivery",
      description:
        "Review the completed work, request revisions within the agreed scope, and receive your final documents in the required formats.",
      icon: Send,
    },
  ];

  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
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
                How It Works
              </span>
            </div>

            <h2 className="mt-5 max-w-md text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">
              A straightforward process from first conversation to final delivery.
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
              We keep the process clear and focused so you understand
              what happens at every stage of your engagement with
              LPC Careers.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="relative mt-14">
          {/* Desktop connector */}
          <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group relative"
                >
                  <div className="relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00B4D8]/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)] sm:p-7">
                    {/* Number + Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.15em] text-[#00B4D8]">
                        {step.number}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8] transition-all duration-300 group-hover:bg-[#00B4D8] group-hover:text-white">
                        <Icon size={20} strokeWidth={2} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-8">
                      <h3 className="text-lg font-bold tracking-tight text-slate-950">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {step.description}
                      </p>
                    </div>

                    {/* Accent */}
                    <div className="mt-7 h-px w-8 bg-[#CAD182] transition-all duration-500 group-hover:w-14" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Delivery Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 overflow-hidden rounded-2xl bg-slate-950"
        >
          <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#00B4D8]">
                Delivery
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                Clear expectations at every stage.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                LPC Careers aims to keep every engagement organized,
                transparent, and easy to follow from the initial request
                through final delivery.
              </p>
            </div>

            <div className="flex flex-col justify-center border-t border-white/10 bg-white/5 p-6 sm:p-8 lg:min-w-[300px] lg:border-l lg:border-t-0">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Standard Turnaround
                </p>

                <p className="mt-2 text-3xl font-bold text-white">
                  1–3 Days
                </p>
              </div>

              <div className="mt-5 h-px bg-white/10" />

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Final timing is confirmed based on the selected service,
                scope, and information provided.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            Already know what you need? Start your request and tell us
            where you want your career materials to take you.
          </p>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#00B4D8] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#009FC0] hover:shadow-lg hover:shadow-[#00B4D8]/20"
          >
            Start Your Request

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

export default HowItWorks;