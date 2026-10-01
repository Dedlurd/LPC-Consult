import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  GraduationCap,
  RefreshCcw,
  TrendingUp,
  UsersRound,
} from "lucide-react";

function WhoWeHelp() {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Early-Career Professionals",
      text: "Build a strong professional foundation with materials that present your education, early experience, strengths, and direction clearly.",
    },
    {
      icon: TrendingUp,
      title: "Experienced Professionals",
      text: "Strengthen how your progression, achievements, and expertise are communicated when you are targeting your next opportunity.",
    },
    {
      icon: RefreshCcw,
      title: "Career Changers",
      text: "Reframe transferable experience and create a clearer connection between your previous work and your intended direction.",
    },
    {
      icon: UsersRound,
      title: "Senior Leaders",
      text: "Develop more consistent executive positioning across resumes, bios, LinkedIn profiles, and other professional touchpoints.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
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
              Who We Help
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[46px]">
            Support for professionals at different stages of the journey.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-[17px]">
            Whether you are entering the workforce, changing direction,
            pursuing advancement, or moving into leadership, the
            positioning challenge is different. Our support adapts to
            the situation.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          {/* Audience Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;

              return (
                <motion.article
                  key={audience.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00B4D8]/40 hover:bg-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8] transition-colors duration-300 group-hover:bg-[#00B4D8] group-hover:text-white">
                      <Icon size={20} strokeWidth={2} />
                    </div>

                    <span className="text-xs font-bold tracking-[0.12em] text-slate-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-bold tracking-tight text-slate-950">
                    {audience.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {audience.text}
                  </p>

                  <div className="mt-6 h-px w-8 bg-[#CAD182] transition-all duration-500 group-hover:w-14" />
                </motion.article>
              );
            })}
          </div>

          {/* Image Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[420px] overflow-hidden rounded-2xl bg-slate-950 lg:min-h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85"
              alt="Professionals connecting during a collaborative discussion"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 sm:bottom-7 sm:left-7 sm:right-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#00B4D8]">
                Different career stages. Different positioning needs.
              </p>

              <p className="mt-3 max-w-md text-xl font-bold leading-8 text-white sm:text-2xl">
                The right professional story depends on where you are
                going, not only where you have been.
              </p>

              <Link
                to="/services"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-white"
              >
                Explore services

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeHelp;