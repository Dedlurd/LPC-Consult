import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  Target,
  UsersRound,
} from "lucide-react";

function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Resume",
    "LinkedIn",
    "Executive",
    "Career Strategy",
    "Career Transition",
  ];

  const caseStudies = [
    {
      id: 1,
      category: "Resume",
      industry: "Operations",
      title: "Reframing operational experience around measurable impact",
      client: "Senior Operations Professional",
      service: "Resume Writing",
      summary:
        "A responsibility-heavy resume was reorganized around leadership scope, operational improvements, and professional progression.",
      icon: FileText,
    },
    {
      id: 2,
      category: "LinkedIn",
      industry: "Technology",
      title: "Creating a stronger professional presence for a technology leader",
      client: "Technology Professional",
      service: "LinkedIn Optimization",
      summary:
        "The profile was refined to make expertise, leadership focus, and career direction more immediately visible.",
      icon: BriefcaseBusiness,
    },
    {
      id: 3,
      category: "Executive",
      industry: "Finance",
      title: "Building an executive narrative across core career materials",
      client: "Senior Finance Professional",
      service: "Executive Branding",
      summary:
        "Resume, executive bio, and professional positioning were aligned around leadership scope and strategic contribution.",
      icon: BriefcaseBusiness,
    },
    {
      id: 4,
      category: "Career Strategy",
      industry: "Professional Services",
      title: "Creating direction for a high-stakes career transition",
      client: "Experienced Professional",
      service: "Career Strategy",
      summary:
        "The engagement focused on defining the next direction, identifying positioning priorities, and turning the plan into practical action.",
      icon: Target,
    },
    {
      id: 5,
      category: "Career Transition",
      industry: "Engineering",
      title: "Translating technical experience into a new professional direction",
      client: "Engineering Professional",
      service: "Career Transition",
      summary:
        "Transferable technical, project, and leadership experience was repositioned around the requirements of a new target field.",
      icon: UsersRound,
    },
    {
      id: 6,
      category: "Executive",
      industry: "Healthcare",
      title: "Bringing executive materials into one consistent story",
      client: "Healthcare Leader",
      service: "Executive Package",
      summary:
        "Multiple professional touchpoints were developed around one coherent leadership narrative.",
      icon: BriefcaseBusiness,
    },
  ];

  const filteredCases = useMemo(() => {
    if (activeFilter === "All") {
      return caseStudies;
    }

    return caseStudies.filter(
      (caseStudy) => caseStudy.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section
      id="case-studies"
      className="bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
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
              Case Studies
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[46px]">
            Explore work by career need and service.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-[17px]">
            Browse selected examples to see the types of professional
            positioning work LCP Careers can provide.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-[#00B4D8] bg-[#00B4D8] text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#00B4D8]/50 hover:text-[#00B4D8]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Case Cards */}
        <motion.div
          layout
          className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredCases.map((caseStudy) => {
              const Icon = caseStudy.icon;

              return (
                <motion.article
                  layout
                  key={caseStudy.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  className="group flex min-h-[390px] flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00B4D8]/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8] transition-colors duration-300 group-hover:bg-[#00B4D8] group-hover:text-white">
                      <Icon size={20} strokeWidth={2} />
                    </div>

                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                      {caseStudy.category}
                    </span>
                  </div>

                  <div className="mt-7">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#00B4D8]">
                      {caseStudy.industry}
                    </p>

                    <h3 className="mt-2 text-xl font-bold leading-7 tracking-tight text-slate-950">
                      {caseStudy.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-slate-500">
                      {caseStudy.summary}
                    </p>
                  </div>

                  <div className="mt-auto border-t border-slate-100 pt-5">
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {caseStudy.client}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {caseStudy.service}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="group/link mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors hover:text-[#00B4D8]"
                    >
                      View case study

                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default CaseStudies;