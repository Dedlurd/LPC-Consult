import { motion } from "motion/react";
import {
  ArrowRight,
  ClipboardList,
  SearchCheck,
  Send,
} from "lucide-react";

function EnquiryProcess() {
  const steps = [
    {
      number: "01",
      icon: ClipboardList,
      title: "Tell Us What You Need",
      description:
        "Share the role, opportunity, career transition, or professional challenge you are working through.",
    },
    {
      number: "02",
      icon: SearchCheck,
      title: "We Review Your Request",
      description:
        "LCP Careers reviews the information and identifies the most appropriate service or support path.",
    },
    {
      number: "03",
      icon: Send,
      title: "We Send the Next Steps",
      description:
        "You receive clear guidance on the recommended service, scope, timing, and what is needed to begin.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#00B4D8]" />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
              How Enquiries Work
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[46px]">
            A simple path from your first message to the right next step.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-[17px]">
            You don't need to know exactly which service you need
            before reaching out. Start with your situation and we'll
            work from there.
          </p>
        </motion.div>

        <div className="relative mt-12">
          <div className="absolute left-[16%] right-[16%] top-10 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-5 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.15em] text-[#00B4D8]">
                      {step.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8]">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                  </div>

                  <h3 className="mt-7 text-lg font-bold tracking-tight text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>

                  {index !== steps.length - 1 && (
                    <ArrowRight
                      size={18}
                      className="absolute -bottom-7 left-1/2 hidden -translate-x-1/2 text-[#00B4D8] lg:block"
                    />
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnquiryProcess;