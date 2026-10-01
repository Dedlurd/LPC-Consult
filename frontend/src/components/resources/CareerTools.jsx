import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  FileText,
  MessageCircle,
  Target,
  Zap,
} from "lucide-react";

function CareerTools() {
  const tools = [
    {
      icon: FileText,
      title: "Resume Review Checklist",
      description:
        "A practical final check for structure, relevance, readability, and important resume details.",
    },
    {
      icon: MessageCircle,
      title: "Interview Preparation Checklist",
      description:
        "A simple preparation guide covering research, examples, questions, and interview-day readiness.",
    },
    {
      icon: Target,
      title: "Job Search Action Plan",
      description:
        "A structured way to organize your weekly search, applications, networking, and follow-up activity.",
    },
  ];

  const quickWins = [
    "Quantify meaningful achievements where evidence is available.",
    "Tailor your professional message to the opportunity you are pursuing.",
    "Make your strongest qualifications easy to find at first glance.",
    "Replace vague responsibility statements with clearer action and outcomes.",
    "Keep your resume, LinkedIn profile, and professional story consistent.",
    "Review older career content regularly and remove information that no longer supports your direction.",
  ];

  return (
    <section
      id="tools"
      className="bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
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
              Free Career Tools
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[46px]">
            Useful tools and quick improvements.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-[17px]">
            Use these resources to review your current approach,
            identify gaps, and make practical improvements before your
            next application or career conversation.
          </p>
        </motion.div>

        {/* Tool Cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {tools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <motion.article
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00B4D8]/40 hover:shadow-[0_18px_45px_rgba(0,0,0,0.07)] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8] transition-colors duration-300 group-hover:bg-[#00B4D8] group-hover:text-white">
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  <span className="rounded-full bg-[#CAD182]/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-700">
                    Free
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-bold tracking-tight text-slate-950">
                  {tool.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {tool.description}
                </p>

                <Link
                  to="/contact"
                  className="group/link mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#00B4D8]"
                >
                  Request this tool

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Quick Wins */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 overflow-hidden rounded-2xl bg-slate-950"
        >
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#00B4D8]/10 blur-3xl" />

              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00B4D8] text-white">
                  <Zap size={21} strokeWidth={2} />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-[#00B4D8]">
                  Quick Wins
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-8 tracking-tight text-white sm:text-3xl">
                  Six improvements you can make without rebuilding
                  everything.
                </h3>

                <p className="mt-5 text-sm leading-6 text-slate-400">
                  Small changes can improve clarity before you commit to
                  a complete rewrite.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                {quickWins.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00B4D8]/15 text-[#00B4D8]">
                      <CheckCircle2 size={15} strokeWidth={2.2} />
                    </span>

                    <p className="text-sm leading-6 text-slate-300">
                      <span className="mr-2 text-xs font-bold text-[#CAD182]">
                        0{index + 1}
                      </span>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CareerTools;