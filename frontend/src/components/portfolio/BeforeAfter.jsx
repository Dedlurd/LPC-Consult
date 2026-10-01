import { motion } from "motion/react";
import {
  ArrowRight,
  FileText,
  BriefcaseBusiness,
  UserRound,
} from "lucide-react";

function BeforeAfter() {
  const examples = [
    {
      type: "Resume",
      icon: FileText,
      before:
        "Responsible for managing projects and working with different teams to complete assignments.",
      after:
        "Managed cross-functional projects from planning through delivery, coordinating teams, timelines, and stakeholder priorities across multiple workstreams.",
    },
    {
      type: "LinkedIn",
      icon: BriefcaseBusiness,
      before:
        "Experienced professional with strong leadership and communication skills.",
      after:
        "Operations & Business Leader | Process Improvement | Team Leadership | Strategic Execution",
    },
    {
      type: "Executive Bio",
      icon: UserRound,
      before:
        "Experienced executive with many years of experience in leadership and business management.",
      after:
        "Senior business leader with extensive experience translating operational priorities into scalable teams, stronger processes, and sustainable organizational performance.",
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
              Before & After
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[46px]">
            The difference is often in how the story is communicated.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-[17px]">
            These examples illustrate the type of transformation
            thoughtful positioning can create. Production examples
            should be replaced with approved client material before
            publication.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {examples.map((example, index) => {
            const Icon = example.icon;

            return (
              <motion.article
                key={example.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8]">
                    <Icon size={18} strokeWidth={2} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      {example.type}
                    </p>

                    <p className="text-xs text-slate-400">
                      Positioning example
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      Before
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {example.before}
                    </p>
                  </div>

                  <div className="my-4 flex justify-center text-[#00B4D8]">
                    <ArrowRight size={19} />
                  </div>

                  <div className="rounded-xl border border-[#00B4D8]/20 bg-[#00B4D8]/5 p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#00B4D8]">
                      After
                    </p>

                    <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">
                      {example.after}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BeforeAfter;