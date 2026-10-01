import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
} from "lucide-react";

function ResourcesCTA() {
  const points = [
    "Practical career insights",
    "Professional positioning guidance",
    "Useful resources and tools",
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/82" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-[#00B4D8]/25" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#00B4D8]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B4D8]">
                Your Next Step
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-[50px]">
              Ready to turn career insight into action?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-[17px] sm:leading-8">
              Reading can help you understand the problem. The next
              step is applying that insight to your own professional
              story.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/free-review"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#00B4D8] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#009FC0] hover:shadow-lg hover:shadow-[#00B4D8]/25"
              >
                Get Your Free Review

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/15"
              >
                Explore Services

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00B4D8] text-white">
                <Mail size={20} strokeWidth={2} />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-[#00B4D8]">
                Career Insights
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                Stay informed.
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Get practical career insights, professional positioning
                guidance, and useful resources from LPC Careers.
              </p>

              <div className="mt-6 space-y-3">
                {points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-[#00B4D8]"
                    />

                    <span className="text-sm text-slate-300">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="mailto:hello@lpccareers.com?subject=Career%20Insights%20Newsletter"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/15"
              >
                Join by Email

                <ArrowUpRight size={16} />
              </a>

              <p className="mt-3 text-center text-[11px] leading-5 text-slate-500">
                Newsletter delivery can be connected to your email
                platform when the subscriber system is ready.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ResourcesCTA;