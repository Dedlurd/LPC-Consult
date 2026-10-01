import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  RefreshCcw,
  Target,
} from "lucide-react";

function FeaturedOutcomes() {
  const outcomes = [
    {
      icon: Target,
      category: "Professional Positioning",
      title: "Turning a broad career history into a clearer professional narrative.",
      challenge:
        "The candidate had substantial experience, but the strongest achievements were buried beneath long responsibility-focused descriptions.",
      approach:
        "We reorganized the story around outcomes, scope, leadership, and the professional direction being pursued.",
      result:
        "A more focused presentation that made the candidate's experience easier to understand and connect to the target direction.",
    },
    {
      icon: BriefcaseBusiness,
      category: "Executive Branding",
      title: "Creating consistency across an executive's professional profile.",
      challenge:
        "The resume, LinkedIn profile, and biography presented different versions of the same career.",
      approach:
        "We aligned the messaging, leadership themes, career progression, and professional positioning across the core materials.",
      result:
        "A more coherent executive presence across the documents and platforms representing the professional.",
    },
    {
      icon: RefreshCcw,
      category: "Career Transition",
      title: "Making transferable experience relevant to a new direction.",
      challenge:
        "The candidate's previous role did not immediately communicate relevance to the field they wanted to enter.",
      approach:
        "We identified transferable capabilities and reframed relevant experience around the requirements of the intended direction.",
      result:
        "A clearer transition story with stronger connections between previous experience and the next career objective.",
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
              Featured Client Outcomes
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[46px]">
            What changed, and how we approached the work.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-[17px]">
            Each project starts with a different challenge. These
            examples show how LCP Careers approaches positioning,
            professional storytelling, and presentation.
          </p>
        </motion.div>

        <div className="mt-12 space-y-5">
          {outcomes.map((outcome, index) => {
            const Icon = outcome.icon;

            return (
              <motion.article
                key={outcome.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition-all duration-300 hover:border-[#00B4D8]/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.06)]"
              >
                <div className="grid lg:grid-cols-[0.28fr_0.72fr]">
                  <div className="bg-slate-950 p-6 sm:p-8 lg:p-9">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00B4D8] text-white">
                      <Icon size={21} strokeWidth={2} />
                    </div>

                    <p className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-[#00B4D8]">
                      {outcome.category}
                    </p>

                    <h3 className="mt-3 text-xl font-bold leading-7 tracking-tight text-white sm:text-2xl">
                      {outcome.title}
                    </h3>
                  </div>

                  <div className="grid gap-0 sm:grid-cols-3">
                    <div className="border-b border-slate-200 p-6 sm:border-b-0 sm:border-r sm:p-7">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#00B4D8]">
                        Challenge
                      </p>

                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {outcome.challenge}
                      </p>
                    </div>

                    <div className="border-b border-slate-200 p-6 sm:border-b-0 sm:border-r sm:p-7">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#00B4D8]">
                        Our Approach
                      </p>

                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {outcome.approach}
                      </p>
                    </div>

                    <div className="p-6 sm:p-7">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#00B4D8]">
                        Result
                      </p>

                      <p className="mt-3 text-sm leading-6 text-slate-500">
                        {outcome.result}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#00B4D8] transition-colors hover:text-slate-900"
          >
            Discuss your own career positioning

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

export default FeaturedOutcomes;