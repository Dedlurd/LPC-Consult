import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Building2,
  UsersRound,
  Target,
} from "lucide-react";

function Intro() {
  const points = [
    {
      icon: Building2,
      title: "Professional approach",
      text: "Structured support built around your career objectives.",
    },
    {
      icon: UsersRound,
      title: "Personalised support",
      text: "Guidance that considers your experience, goals, and direction.",
    },
    {
      icon: Target,
      title: "Career-focused strategy",
      text: "Practical steps designed to strengthen your professional positioning.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#00B4D8]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
                Who We Are
              </span>
            </div>

            <h2 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-[-0.025em] text-slate-950 sm:text-4xl">
              Helping professionals move forward with clarity.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl text-base leading-7 text-slate-600 sm:text-[17px]"
          >
             LPC Careers provides professional career support
            for individuals who want to strengthen their professional
            presence, make better career decisions, and approach new
            opportunities with greater confidence.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                alt="Professional team collaborating during a business meeting"
                className="h-[390px] w-full object-cover sm:h-[440px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 rounded-2xl bg-[#CAD182]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <p className="max-w-xl text-lg font-semibold leading-8 text-slate-900">
              Your professional story matters.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              From presenting your experience effectively to preparing
              for your next opportunity, we help you approach your
              career with a clearer strategy and a stronger
              professional foundation.
            </p>

            <div className="mt-8 space-y-5">
              {points.map((point, index) => {
                const Icon = point.icon;

                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="flex gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00B4D8]/10 text-[#00B4D8]">
                      <Icon size={19} strokeWidth={2} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {point.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {point.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-9">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#00B4D8] transition-colors duration-300 hover:text-slate-900"
              >
                Discover  LPC Careers

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

export default Intro;