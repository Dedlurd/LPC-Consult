import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  FileDown,
  FilePenLine,
  MessageSquareText,
  UserRoundCheck,
} from "lucide-react";

function WhatToExpect() {
  const expectations = [
    {
      icon: UserRoundCheck,
      title: "Personalized to Your Direction",
      description:
        "Your materials are developed around your background, experience, target opportunity, and professional goals.",
    },
    {
      icon: FilePenLine,
      title: "Thoughtful Professional Writing",
      description:
        "We focus on clear language, relevant evidence, strong positioning, and a professional voice appropriate to your career level.",
    },
    {
      icon: FileDown,
      title: "Practical File Delivery",
      description:
        "Completed document-based services are delivered in practical formats, including DOCX and PDF where applicable.",
    },
    {
      icon: Clock3,
      title: "Clear Turnaround",
      description:
        "Standard delivery is generally targeted within 1–3 days, with final timing confirmed according to the selected service and scope.",
    },
    {
      icon: MessageSquareText,
      title: "Clear Communication",
      description:
        "You know what information is required, what stage your request is at, and what happens next throughout the engagement.",
    },
    {
      icon: CheckCircle2,
      title: "Revision Support",
      description:
        "Where included in the selected service, you have an opportunity to review the work and request revisions within the agreed scope.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
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
                What You Can Expect
              </span>
            </div>

            <h2 className="mt-5 max-w-md text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Professional service from brief to delivery.
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
              LCP Careers focuses on making the engagement clear,
              professional, and tailored to the person behind the
              documents or career decision.
            </p>
          </motion.div>
        </div>

        {/* Expectations Grid */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {expectations.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group bg-white p-6 transition-colors duration-300 hover:bg-[#00B4D8]/[0.03] sm:p-7 lg:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8] transition-all duration-300 group-hover:bg-[#00B4D8] group-hover:text-white">
                  <Icon size={20} strokeWidth={2} />
                </div>

                <h3 className="mt-7 text-lg font-bold tracking-tight text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-7 h-px w-7 bg-[#CAD182] transition-all duration-500 group-hover:w-12" />
              </motion.article>
            );
          })}
        </div>

        {/* Important Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 grid gap-0 overflow-hidden rounded-2xl border border-slate-200 bg-white lg:grid-cols-[1.1fr_0.9fr]"
        >
          {/* Left */}
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#00B4D8]">
              Before We Begin
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
              Your input is part of the process.
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Strong professional materials depend on accurate
              information. Before work begins, you will provide the
              relevant background, career details, target role or
              opportunity, and other information needed for the selected
              service.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Your current resume or career history",
                "Target role, industry, programme, or opportunity",
                "Relevant achievements and responsibilities",
                "Any specific requirements for the engagement",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#00B4D8]"
                    strokeWidth={2}
                  />

                  <p className="text-sm leading-6 text-slate-600">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="border-t border-slate-200 bg-slate-950 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#00B4D8]">
              Delivery & Review
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
              Clear files. Clear next steps.
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-400 sm:text-base">
              Once your work is completed, you receive the agreed
              deliverables in the appropriate format and can review them
              according to the revision terms of your selected service.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  File Formats
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  DOCX + PDF
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  Standard Turnaround
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  1–3 Days
                </p>
              </div>
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
            Have a specific career need in mind? Start your request and
            we will guide you through the appropriate next step.
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

export default WhatToExpect;