import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Crown,
  GraduationCap,
  RefreshCcw,
  TrendingUp,
} from "lucide-react";

function CareerStages() {
  const stages = [
    {
      icon: GraduationCap,
      number: "01",
      title: "Early Career",
      description:
        "Build a strong professional foundation and learn how to make education, projects, internships, and early experience work harder for you.",
    },
    {
      icon: TrendingUp,
      number: "02",
      title: "Mid-Career",
      description:
        "Move beyond a simple job history and communicate progression, increasing scope, expertise, and meaningful contribution.",
    },
    {
      icon: Crown,
      number: "03",
      title: "Senior & Executive",
      description:
        "Position leadership scope, strategic contribution, organizational impact, and executive value with greater precision.",
    },
    {
      icon: RefreshCcw,
      number: "04",
      title: "Career Change",
      description:
        "Translate transferable capabilities and create a clearer connection between your existing experience and your intended direction.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#00B4D8]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
                Career Stage Guides
              </span>
            </div>

            <h2 className="mt-5 max-w-md text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl">
              The right career advice depends on where you are.
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
              A recent graduate and a senior executive face very
              different positioning challenges. Start with guidance
              relevant to your current stage.
            </p>

            <Link
              to="/contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#00B4D8] transition-colors hover:text-slate-900"
            >
              Talk to LPC Careers

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <motion.article
                  key={stage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group bg-white p-6 transition-colors duration-300 hover:bg-slate-50 sm:p-7 lg:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8] transition-all duration-300 group-hover:bg-[#00B4D8] group-hover:text-white">
                      <Icon size={20} strokeWidth={2} />
                    </div>

                    <span className="text-xs font-bold tracking-[0.12em] text-slate-300">
                      {stage.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-bold tracking-tight text-slate-950">
                    {stage.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {stage.description}
                  </p>

                  <div className="mt-6 h-px w-8 bg-[#CAD182] transition-all duration-500 group-hover:w-14" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerStages;