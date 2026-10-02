import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Target,
  Layers3,
  UserRoundCheck,
  Compass,
} from "lucide-react";

function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      icon: Target,
      title: "Built Around Your Goals",
      description:
        "Your career direction, experience, and ambitions shape the work. We do not treat every professional profile the same way.",
    },
    {
      number: "02",
      icon: Layers3,
      title: "Strategic, Not Just Cosmetic",
      description:
        "We go beyond formatting and surface-level edits. Your experience needs to communicate your value clearly and strategically.",
    },
    {
      number: "03",
      icon: UserRoundCheck,
      title: "Professional Positioning",
      description:
        "Your resume, LinkedIn profile, and professional story should work together to create a consistent and credible impression.",
    },
    {
      number: "04",
      icon: Compass,
      title: "Focused on Your Next Move",
      description:
        "The objective is bigger than improving a document. We help you build the positioning and direction needed for your next opportunity.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* SECTION INTRO */}
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
                Why Choose  LPC Careers
              </span>
            </div>

            <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl">
              Career decisions deserve more than generic advice.
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
              At  LPC Careers, we combine professional positioning with
              practical career strategy. The focus is not simply on
              making your documents look better, but on helping you
              communicate your value with greater clarity.
            </p>

            <Link
              to="/about"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#00B4D8] transition-colors hover:text-slate-900"
            >
              Learn more about  LPC Careers

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* REASONS */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group relative bg-white p-7 transition-colors duration-300 hover:bg-[#CAF0F8]/30 sm:p-8 lg:p-10"
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold tracking-[0.15em] text-[#00B4D8]">
                    {reason.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8] transition-all duration-300 group-hover:bg-[#00B4D8] group-hover:text-white">
                    <Icon size={19} strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-10 max-w-md">
                  <h3 className="text-xl font-bold tracking-tight text-slate-950">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="mt-8 h-px w-0 bg-[#CAD182] transition-all duration-500 group-hover:w-16" />
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col gap-5 rounded-2xl bg-slate-950 px-6 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10"
        >
          <div>
            <p className="text-sm font-semibold text-white">
              Your next opportunity starts with how you position yourself.
            </p>

            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-400">
              Let  LPC Careers help you turn your professional experience into
              a clearer and stronger career story.
            </p>
          </div>

          <Link
            to="/contact#enquiry"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#00B4D8] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#009FC0] hover:shadow-lg hover:shadow-[#00B4D8]/20"
          >
            Get a Free Review

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
