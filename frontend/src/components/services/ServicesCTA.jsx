import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

function ServicesCTA() {
  const points = [
    "Choose an individual service or career package",
    "Receive clear next steps before work begins",
    "Professional delivery in 1–3 days, based on scope",
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=85"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/80" />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-[#00B4D8]/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          {/* Main Content */}
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
                Get Started
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-[52px]">
              Ready to strengthen your professional positioning?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-[17px] sm:leading-8">
              Choose the service or package that fits your current
              career need, or speak with LPC Careers if you need help
              deciding where to begin.
            </p>

            {/* Buttons */}
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
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/15"
              >
                Contact LPC Careers

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Supporting Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:justify-self-end"
          >
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md sm:p-7 lg:max-w-md">
              <p className="text-sm font-bold text-white">
                Start with a clear path.
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                From selecting the right service to receiving your final
                deliverables, the process is designed to stay clear and
                straightforward.
              </p>

              <div className="mt-6 space-y-4">
                {points.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2 + index * 0.08,
                    }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00B4D8]/15 text-[#00B4D8]">
                      <CheckCircle2 size={15} strokeWidth={2.2} />
                    </span>

                    <p className="text-sm leading-6 text-slate-300">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom reassurance */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 border-t border-white/10 pt-6"
        >
          <div className="flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              LPC Careers · Professional Positioning · Career Strategy
            </p>

            <p>
              Final scope, timing, and deliverables confirmed before work begins.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesCTA;